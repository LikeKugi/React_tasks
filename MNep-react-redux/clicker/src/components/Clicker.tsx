import { JSX } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment, reset, selectCounter } from '@store/clicker';

const Clicker = (): JSX.Element => {
  const count = useSelector(selectCounter);
  const dispatch = useDispatch();
  const clickHandler = (action: {type: string}) => {
    dispatch(action);
  }
  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => clickHandler(decrement)}>-</button>
        <button onClick={() => clickHandler(increment)}>+</button>
        <button onClick={() => clickHandler(reset)}>RESET</button>
      </div>
    </div>
  );
};
export default Clicker;
