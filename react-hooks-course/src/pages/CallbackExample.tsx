import {JSX, useCallback, useState} from "react";
import ListItems from "../components/ListItems/ListItems";

const CallbackExample = (): JSX.Element => {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'darkred' : 'black',
  }

  const generateItems = useCallback((): string[] => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
  }, [count])

  return (
    <>
      <h1>useCallback example</h1>
      <p>useCallback returns memorized function (function doesn't change during rendering)</p>
      <h2 style={styles}>Count of elements: {count} </h2>
      <button onClick={()=>setCount(prevState => prevState + 1)}>Add element</button>
      <button onClick={()=>setColored(prevState => !prevState)}>Change color</button>

      <ListItems getItems={generateItems} />
    </>
  );
}
export default CallbackExample;
