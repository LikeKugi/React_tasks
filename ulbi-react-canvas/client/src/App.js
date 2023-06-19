import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Root from "./pages/Root";
import Modal from "./components/Modal/Modal";
import {useEffect, useState} from "react";
import canvasState from "./store/canvasState";
import Brush from "./tools/Brush";
import toolState from "./store/toolState";
import Rect from "./tools/Rect";
import StateBlock from "./components/StateBlock/StateBlock";
import usersState from "./store/usersState";
import Circle from "./tools/Circle";

function App() {
  const data = `f${(+new Date).toString(16)}`

  const [showModal, setShowModal] = useState(false);
  const [nickname, setNickname] = useState('');

  const paramIDHandler = (value) => {
    canvasState.setSessionID(value);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

  const openModalHandler = () => {
    setShowModal(true);
  }

  const submitNicknameHandler = (nickname) => {
    canvasState.setUsername(nickname)
    setNickname(nickname);
  }

  const drawHandler = (msg) => {
    const figure = msg.figure;
    const ctx = canvasState.canvas.getContext('2d');
    switch (figure.type) {
      case "brush":
        Brush.draw(ctx, figure.x, figure.y, figure.fillColor, figure.strokeColor)
        break;
      case "rect":
        Rect.staticDraw(ctx, figure.x, figure.y, figure.width, figure.height, figure.fillColor, figure.strokeColor);
        break;
      case "circle":
        Circle.staticDraw(ctx, figure.x, figure.y, figure.radius, figure.fillColor, figure.strokeColor);
        break;
      case "finish":
        ctx.beginPath();
        break;
    }
  }

  useEffect(() => {
    if (nickname.trim().length > 0) {
      const socket = new WebSocket('ws://localhost:5000');
      canvasState.setSocket(socket);
      toolState.setTool(new Brush(canvasState.canvas, socket, canvasState.sessionID))
      socket.onopen = () => {
        socket.send(JSON.stringify({
          id: canvasState.sessionID,
          username: nickname,
          method: "connection",
        }))
      };
      socket.onmessage = (ev) => {
        const msg = JSON.parse(ev.data)

        switch (msg.method) {
          case "connection":
            console.log(msg)
            usersState.addUser(msg)
            console.log(`User ${msg.username} connected`)
            break;
          case "draw":
            drawHandler(msg);
            break;

        }
      }
    }

  }, [nickname])

  return (
      <BrowserRouter>
        <div className="app">

          <StateBlock openModal={openModalHandler}/>

          <Routes>
            <Route path="/"
                   element={<Navigate to={`/${data}`}/>}/>
            <Route path="/:id"
                   element={<Root setID={paramIDHandler}/>}/>
          </Routes>

          {showModal && <Modal closeModal={closeModalHandler}
                               submitModal={submitNicknameHandler}/>}
        </div>
      </BrowserRouter>
  );
}

export default App;
