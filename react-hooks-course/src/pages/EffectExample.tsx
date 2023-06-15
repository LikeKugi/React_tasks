import React, {JSX, useEffect, useState} from "react";
import MousePosition from "../components/MousePosition/MousePosition";

const EffectExample = (): JSX.Element => {
  const [type, setType] = useState('users')
  const [data, setData] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
      .then((response) => response.json())
      .then((json) => setData(JSON.stringify(json, null, 2)));
  }, [type])

  return (
    <div>
      <h1>Resource: {type}</h1>
      <MousePosition />
      <button onClick={() => setType('users')}>Users</button>
      <button onClick={() => setType('todos')}>Todos</button>
      <button onClick={() => setType('posts')}>Posts</button>
      <pre>{data}</pre>
    </div>
  );
}
export default EffectExample;
