import { JSX, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { decrement, increment, incrementByAmount, reset } from '../../app/slices/counterSlice';

const Counter = (): JSX.Element => {
  const count = useAppSelector(state => state.counter.count);
  const [incValue, setIncValue] = useState(0);
  const dispatch = useAppDispatch();

  const addValue = (val: string) => {
    const adding = +val || 0;
    setIncValue(adding)
  }
  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <button onClick={() => dispatch(reset())}>Reset Counter</button>
      </div>
      <div>
        <label htmlFor="incrementValue">Increment by: </label>
        <input type="number"
               name="incrementValue"
               id="incrementValue"
               value={incValue ? incValue : ''}
               onChange={e => addValue(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(incValue))}>Submit</button>
      </div>
    </div>
  );
};
export default Counter;
