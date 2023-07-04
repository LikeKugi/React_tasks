import Tool from './Tool';

export default class Brush extends Tool {
  constructor(canvas, socket, id) {
    super(canvas, socket, id);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler() {
    this.mouseDown = false;
    this.ctx.closePath();
    this.socket.send(
      JSON.stringify({
        method: 'draw',
        id: this.id,
        figure: {
          type: 'finish',
        },
      }),
    );
  }

  mouseDownHandler(e) {
    console.log(e, e.target.offsetLeft, typeof e.target.offsetLeft);
    this.mouseDown = true;
    this.ctx.moveTo(
      e.pageX - e.target.offsetLeft,
      e.pageY - e.target.offsetTop,
    );
  }

  mouseMoveHandler(e) {
    if (this.mouseDown) {
      this.socket.send(
        JSON.stringify({
          method: 'draw',
          id: this.id,
          figure: {
            type: 'brush',
            x: e.pageX - e.target.offsetLeft,
            y: e.pageY - e.target.offsetTop,
            fillColor: this.ctx.fillStyle,
            strokeColor: this.ctx.strokeStyle,
            lineWidth: this.ctx.lineWidth,
          },
        }),
      );
    }
  }

  static draw(ctx, x, y, fillColor, strokeColor, lineWidth) {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = lineWidth;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
