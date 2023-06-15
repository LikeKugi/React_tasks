import React, {JSX, useMemo, useState} from "react";

function complexCompute(n: number): number {
  let i = 0;
  while (i < 2_000_000_000) i += 1
  return n * 2;
}


const MemoExample = (): JSX.Element => {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = {
    color: colored ? 'darkred' : 'black'
  }

  const addHandler = (): void => {
    setNumber(number + 1)
  }

  const removeHandler = () => {
    setNumber(number - 1)
  }

  const computed = useMemo(() => complexCompute(number), [number]);

  return (
    <>
      <h1 style={styles}>Number: {computed}</h1>
      <p>useMemo returns memorized value from function</p>
      <div>
        <button onClick={addHandler}>Add</button>
        <button onClick={removeHandler}>Remove</button>
        <button onClick={() => setColored(prevState => !prevState)}>Change color</button>
      </div>
    </>
  );
}
export default MemoExample;
