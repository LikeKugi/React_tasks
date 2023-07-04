import { makeAutoObservable } from 'mobx';

class CanvasState {
  canvas = null;
  socket = null;
  sessionID = null;
  undoList = [];
  redoList = [];
  username = '';
  constructor() {
    makeAutoObservable(this);
  }

  setSocket(socket) {
    this.socket = socket;
  }
  setSessionID(sessionID) {
    this.sessionID = sessionID;
  }
  setCanvas(canvas) {
    console.log(canvas);
    this.canvas = canvas;
  }
  setUsername(value) {
    this.username = value;
  }
  pushToUndo(data) {
    this.undoList.push(data);
  }
  pushToRedo(data) {
    this.redoList.push(data);
  }
  undo() {
    const ctx = this.canvas.getContext('2d');
    if (this.undoList < 1) {
      return;
    }
    const dataURL = this.undoList.pop();
    this.redoList.push(this.canvas.toDataURL());
    const img = new Image();
    img.src = dataURL;
    img.onload = () => {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    };
  }
  redo() {
    const ctx = this.canvas.getContext('2d');
    if (this.redoList < 1) {
      return;
    }

    const dataURL = this.redoList.pop();
    this.undoList.push(this.canvas.toDataURL());
    const img = new Image();
    img.src = dataURL;
    img.onload = () => {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
    };
  }
}

export default new CanvasState();
