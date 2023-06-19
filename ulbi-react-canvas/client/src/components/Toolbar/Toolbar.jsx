import styles from './Toolbar.module.css'
import brush from '../../assets/img/toolbar/brush.svg'
import circle from '../../assets/img/toolbar/circle.svg'
import eraser from '../../assets/img/toolbar/eraser.svg'
import line from '../../assets/img/toolbar/line.svg'
import rect from '../../assets/img/toolbar/rect.svg'
import redo from '../../assets/img/toolbar/redo.svg'
import save from '../../assets/img/toolbar/save.svg'
import undo from '../../assets/img/toolbar/undo.svg'
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import canvasState from "../../store/canvasState";
import Rect from "../../tools/Rect";
import Circle from "../../tools/Circle";
import Line from "../../tools/Line";
import Eraser from "../../tools/Eraser";
import {useRef, useState} from "react";

const Toolbar = (props) => {
  const [fillColor, setFillColor] = useState('#000000');
  const [strokeColor, setStrokeColor] = useState('#000000');
  const fillRef = useRef();
  const strokeRef = useRef();

  const changeColorHandler = (e) => {
    e.preventDefault();
    if (e.target === fillRef.current) {
      setFillColor(e.target.value);
      toolState.setFillColor(fillColor);
    } else if (e.target === strokeRef.current) {
      setStrokeColor(e.target.value);
      toolState.setStrokeColor(strokeColor);
    }
  }

  const brushHandler = (e) => {
    toolState.setStrokeColor(strokeColor);
    toolState.setFillColor(fillColor);
    toolState.setTool(new Brush(canvasState.canvas, canvasState.socket, canvasState.sessionID))
    console.log(toolState.tool instanceof Brush, toolState.tool)
  }
  const rectHandler = (e) => {
    toolState.setStrokeColor(strokeColor);
    toolState.setFillColor(fillColor);
    toolState.setTool(new Rect(canvasState.canvas, canvasState.socket, canvasState.sessionID))
  }

  const eraserHandler = (e) => {
    toolState.setStrokeColor("#ffffff");
    toolState.setFillColor("#ffffff");
    toolState.setTool(new Eraser(canvasState.canvas, canvasState.socket, canvasState.sessionID))
  }

  const circleHandler = (e) => {
    toolState.setStrokeColor("#ffffff");
    toolState.setFillColor("#ffffff");
    toolState.setTool(new Circle(canvasState.canvas, canvasState.socket, canvasState.sessionID))
  }

  const download = () => {
    const dataUrl = canvasState.canvas.toDataURL();
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = canvasState.sessionID + 'jpg';
    document.body.appendChild(a);
    a.click()
    document.body.removeChild(a);
  }


  return (
      <div className={styles.toolbar}>
        <div className={styles.toolbar__controls}>
          <button className={styles.toolbar__btn}
                  onClick={brushHandler}><img src={brush}
                                              alt="brush"/></button>
          <button className={styles.toolbar__btn}
                  onClick={rectHandler}><img src={rect}
                                                                                       alt="rect"/></button>
          <button className={styles.toolbar__btn}
                  onClick={circleHandler}><img src={circle}
                                                                                         alt="circle"/></button>
          <button className={styles.toolbar__btn}
                  onClick={eraserHandler}><img src={eraser}
                                                                                         alt="eraser"/></button>
          <button className={styles.toolbar__btn}
                  onClick={() => toolState.setTool(new Line(canvasState.canvas))}><img src={line}
                                                                                       alt="line"/></button>
          <label htmlFor="fillColor">Fill color: </label>
          <input ref={fillRef}
                 className={styles.toolbar__btn}
                 onChange={changeColorHandler}
                 type="color"
                 name="color"
                 value={fillColor}
                 id="fillColor"/>
          <label htmlFor="strokeColor">Stroke color: </label>
          <input ref={strokeRef}
                 onChange={changeColorHandler}
                 className={styles.toolbar__btn}
                 type="color"
                 name="strokeColor"
                 id="strokeColor"/>
        </div>
        <div className={styles.toolbar__controls}>
          <button onClick={()=> canvasState.undo()} className={styles.toolbar__btn}><img src={undo}
                                                       alt="undo"/></button>
          <button onClick={()=> canvasState.redo()} className={styles.toolbar__btn}><img src={redo}
                                                       alt="redo"/></button>
          <button onClick={download} className={styles.toolbar__btn}><img src={save}
                                                       alt="save"/></button>
        </div>


      </div>
  );
}
export default Toolbar;
