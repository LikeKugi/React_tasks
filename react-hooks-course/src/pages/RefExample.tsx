import React, {JSX, useEffect, useRef, useState} from "react";

const RefExample = (): JSX.Element => {
  const [value, setValue] = useState('Enter message');
  const renderCount = useRef(1);
  const inputRef= useRef(null);
  useEffect(() => {
    renderCount.current += 1;
  })
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setValue(e.target.value);
  }

  const focus = () => inputRef.current ? (inputRef.current as HTMLInputElement).focus() : null;

  return (
    <div>
      <h1>useRef example</h1>
      <p>count of renders: {renderCount.current}</p>

      <button onClick={focus}>Focus</button>

      <fieldset>
        <legend>Example for rendering</legend>
        <label htmlFor="renderInput">Put your text here: </label>
        <input ref={inputRef} type="text" id={'renderInput'} value={value} onChange={changeHandler}/>
      </fieldset>

      <p>useRef is used to save some data between renders of the component</p>
    </div>
  );
}
export default RefExample;
