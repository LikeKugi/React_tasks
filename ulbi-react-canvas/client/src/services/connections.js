import axios from "axios";
import canvasState from "../store/canvasState";

const pushImage = (data) => {
  axios.post(`http://localhost:5000/image?id=${canvasState.sessionID}`, {img: data})
      .then(response => console.log(response.data))
}

const getImage = () => {
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
}

export {pushImage, getImage};
