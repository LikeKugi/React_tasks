import React, {FC, JSX, useRef, useState} from "react";

const InputReference: FC = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [paragraph, setParagraph] = useState('');
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setParagraph(inputRef.current?.value || '')
  }
  return (
    <div>
      <h3>Reference input: </h3>
      <input ref={inputRef} type="text" placeholder={'Ref Input'}/>
      <button onClick={clickHandler}>patch</button>
      <p style={{height: 30, border: '1px solid teal'}}>{paragraph}</p>
    </div>
  );
}
export default InputReference;
