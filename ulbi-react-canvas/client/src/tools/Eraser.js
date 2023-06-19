import Brush from "./Brush";

export default class Eraser extends Brush {
  constructor(canvas, socket, id) {
    super(canvas, socket, id);
  }
  draw(x, y) {
    this.ctx.strokeStyle = "white";
    Brush.draw(x, y);
  }
}
