import { FormEvent, JSX, useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { createTodo } from '@/store/slices/todosSlice';

const NewTodo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [inputText, setInputText] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputText) {
      dispatch(createTodo(inputText));
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" value={inputText} onChange={e => setInputText(e.target.value)} />
      <input type="submit" value="Add Todo" />
    </form>
  );
};
export default NewTodo;
