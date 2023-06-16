import React, {JSX, useState} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks/redux";
import {baseUserSlice} from "../store/reducers/BaseUserSlice";

const BaseExample = (): JSX.Element => {
  const {count} = useAppSelector(state => state.baseUserReducer);
  const {increment} = baseUserSlice.actions;
  const dispatch = useAppDispatch();

  const [value, setValue] = useState(1);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(+e.target.value)
  }

  return (
    <div className="App">
      <h1>Changing values in React-Redux</h1>
      <h2>{count}</h2>
      <fieldset style={{display: 'flex', flexDirection: 'column'}}>
        <legend>Change value: </legend>
        <label htmlFor="incrementRange">Value: {value}</label>
        <input type="range"
               name="range"
               id="incrementRange" min={1} max={100} value={value} onChange={changeHandler}/>
        <div style={{display: 'flex', alignItems: "center", justifyContent: 'space-evenly', maxWidth: 500, margin: '0 auto', gap: '2rem'}}>
          <button onClick={() => dispatch(increment(-value))}>decrement on {value}</button>
          <button onClick={() => dispatch(increment(value))}>increment on {value}</button>
        </div>
      </fieldset>
    </div>
  );
}
export default BaseExample;
