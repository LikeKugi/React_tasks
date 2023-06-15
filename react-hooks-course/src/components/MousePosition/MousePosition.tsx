import React, {JSX, useEffect, useState} from "react";

const MousePosition = (): JSX.Element => {
  const [position, setPosition] = useState({x: 0, y: 0})

  const mouseMoveHandler = (e: MouseEvent) => {
    setPosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)
    return () => window.removeEventListener('mousemove', mouseMoveHandler);
  },[])

  return (
    <>
      <h2>Mouse position:</h2>
      <p>x: {position.x}</p>
      <p>y: {position.y}</p>
    </>
  );
}
export default MousePosition;
