import { FormEvent, JSX, useId, useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { createTodo } from '@/store/todos/todos.actions';
import { IAction } from '@/store/types/IAction';
import { ITodo } from '@/types/ITodo';

const NewTodo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const inputId = useId();
  const [inpValue, setInpValue] = useState('');
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(createTodo(inpValue) as unknown as IAction<ITodo>);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId}>Add new to do:</label>
      <input type="text"
             id={inputId}
             name={'todoInput'}
             placeholder={'New todo...'}
             value={inpValue}
             onChange={(e) => setInpValue(e.target.value)}/>
      <button type={'submit'}>Submit</button>
    </form>
  );
};
export default NewTodo;
