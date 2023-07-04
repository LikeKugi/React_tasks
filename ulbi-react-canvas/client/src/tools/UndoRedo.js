import {getImage, pushImage} from "../services/connections";

class UndoRedo {
  constructor(canvas, socket, id) {
    this.canvas = canvas;
    this.socket = socket;
    this.id = id;
    this.ctx = canvas.getContext('2d');
  }



  pushImage() {
    pushImage(this.canvas.toDataURL())
    this.socket.send(JSON.stringify({
      method: "draw",
      id: this.id,
      figure: {
        type: "do",
      }
    }))
  }
  static staticGetImage() {
    console.log('getting image')
    getImage();
  }
}

export default UndoRedo;
