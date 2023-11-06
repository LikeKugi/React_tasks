import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(prevState => prevState + 1)}>Add one</button>
      <div role="contentinfo">Count is: {count}</div>
    </div>
  );
};

export default Counter;
