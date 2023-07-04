import './App.css';
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import canvasState from "./store/canvasState";
import toolState from "./store/toolState";
import usersState from "./store/usersState";

import Root from "./pages/Root";
import Modal from "./components/Modal/Modal";
import StateBlock from "./components/StateBlock/StateBlock";

import Brush from "./tools/Brush";
import Rect from "./tools/Rect";
import Circle from "./tools/Circle";
import Line from "./tools/Line";
import NewUser from "./components/NewUser/NewUser";
import UndoRedo from "./tools/UndoRedo";


function App() {
  const data = `f${(+new Date).toString(16)}`

  const [showModal, setShowModal] = useState(true);
  const [nickname, setNickname] = useState('');

  const [showLast, setShowLast] = useState(false);
  const [lastUser, setLastUser] = useState('');

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
    usersState.setUsername(nickname)
    setNickname(nickname);
  }

  useEffect(() => {
    setShowLast(true);
    setTimeout(() => setShowLast(false), 10000);
  }, [lastUser])

  const drawHandler = (msg) => {
    const figure = msg.figure;
    const ctx = canvasState.canvas.getContext('2d');
    switch (figure.type) {
      case "brush":
        Brush.draw(ctx, figure.x, figure.y, figure.fillColor, figure.strokeColor, figure.lineWidth)
        break;
      case "rect":
        canvasState.pushToUndo(canvasState.canvas.toDataURL())
        Rect.staticDraw(ctx, figure.x, figure.y, figure.width, figure.height, figure.fillColor, figure.strokeColor, figure.lineWidth);
        break;
      case "circle":
        canvasState.pushToUndo(canvasState.canvas.toDataURL())
        Circle.staticDraw(ctx, figure.x, figure.y, figure.radius, figure.fillColor, figure.strokeColor, figure.lineWidth);
        break;
      case "line":
        canvasState.pushToUndo(canvasState.canvas.toDataURL())
        Line.staticDraw(ctx, figure.startX, figure.startY, figure.endX, figure.endY, figure.fillColor, figure.strokeColor, figure.lineWidth)
        break;
      case "finish":
        canvasState.pushToUndo(canvasState.canvas.toDataURL())
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
            usersState.addUser(msg);
            setLastUser(msg.username);
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

          <StateBlock openModal={openModalHandler}
                      newUser={lastUser}/>

          <Routes>
            <Route path="/"
                   element={<Navigate to={`/${data}`}/>}/>
            <Route path="/:id"
                   element={<Root setID={paramIDHandler}/>}/>
          </Routes>

          {showModal && <Modal closeModal={closeModalHandler}
                               submitModal={submitNicknameHandler}/>}
          {showLast && <NewUser newUser={lastUser}/>}
        </div>
      </BrowserRouter>
  );
}

export default App;
