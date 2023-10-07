import { FormEvent, JSX, useId, useState } from 'react';
import {useDispatch} from 'react-redux';
import { addTodo } from '@store/store';

const TodoForm = (): JSX.Element => {
  const inpId = useId();
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(description));
    setDescription('');
  };
  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <label htmlFor={inpId}>New action to do:</label><input type="text"
                                                             id={inpId}
                                                             value={description}
                                                             onChange={e => setDescription(e.target.value)}/>
      <button type="submit">Add</button>
    </form>
  );
};
export default TodoForm;
