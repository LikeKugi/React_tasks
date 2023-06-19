import styles from './Canvas.module.css'
import {observer} from "mobx-react-lite";
import {useEffect, useRef} from "react";
import canvasState from "../../store/canvasState";
import axios from "axios";

const Canvas = observer((props) => {

  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
    axios.get(`http://localhost:5000/image?id=${canvasState.sessionID}`).then(res => {
      const img = new Image();
      img.src = res.data;
      img.onload = () => {
        const ctx = canvasState.canvas.getContext('2d')
        ctx.clearRect(0, 0, canvasState.canvas.width, canvasState.canvas.height)
        ctx.drawImage(img, 0, 0, canvasState.canvas.width, canvasState.canvas.height)
        ctx.stroke()
      }
    }).catch(() => {

    })
  }, [])

  const mouseDownHandler = () => {
    canvasState.pushToUndo(canvasRef.current.toDataURL())
  }

  const mouseUpHandler = () => {
    axios.post(`http://localhost:5000/image?id=${canvasState.sessionID}`, {img: canvasRef.current.toDataURL()})
        .then(response => console.log(response.data))
  }

  return (
      <div className={styles.canvas}>
        <div className="container">
          <canvas onMouseDown={mouseDownHandler} onMouseUp={mouseUpHandler} ref={canvasRef} className={styles.canvas__field}  width={800} height={600}></canvas>
        </div>
      </div>
  );
})
export default Canvas;
