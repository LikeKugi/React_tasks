import { FC, JSX, useId } from 'react';
import {useDispatch} from 'react-redux';
import { toggleTodo } from '@store/store';

interface ITodoItemProps {
  id: number,
  description: string,
  process: boolean
}

const TodoItem: FC<ITodoItemProps> = ({process, id, description}): JSX.Element => {
  const inpId = useId()
  const dispatch = useDispatch();
  return (
    <div>
      <input type="checkbox"
             name="todo"
             id={inpId}
             checked={process}
      onChange={() => dispatch(toggleTodo(id))}/>
      <p style={{color: process ? 'red' : '#fefefe'}}>{description}</p>
    </div>
  );
};
export default TodoItem;
