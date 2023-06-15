import React, {useState} from 'react';

const StateExample = () => {
  const [counter, setCounter] = useState(0);

  const addHandler = ():void => {
    setCounter(counter + 1)
  }

  const removeHandler = () => {
    setCounter(counter - 1)
  }


  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={removeHandler}>Remove</button>
      </div>
    </div>
  );
};

export default StateExample;
