import React, {FC, JSX, useState} from "react";

const DragNDrop: FC = (): JSX.Element => {
  const [isDrag, setIsDrag] = useState(false);
  const dragHandler = () => {
  }
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  }
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  }
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  }
  return (
    <div style={{height: 200, padding: 20}}>
      <div onDrag={dragHandler}
           draggable
           style={{width: 100, height: 100, backgroundColor: 'lightsalmon'}}></div>
      <div onDrop={dropHandler}
           onDragLeave={leaveHandler}
           onDragOver={dragWithPreventHandler}
           style={{width: 100, height: 100, backgroundColor: isDrag ? 'greenyellow' : 'darkolivegreen'}}></div>
    </div>
  );
}
export default DragNDrop;
