import { JSX, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectAllTodos, selectErrorTodos, selectStatusTodos } from '@/store/todos/todos.selectors';
import { loadTodos } from '@/store/todos/todos.actions';
import { IAction } from '@/store/types/IAction';
import { ITodo } from '@/types/ITodo';
import { LoadingStatus } from '@/store/types/stateTypes';

const TodosList = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector(selectAllTodos);
  const error = useAppSelector(selectErrorTodos);
  const status = useAppSelector(selectStatusTodos);

  useEffect(() => {
    dispatch(loadTodos() as unknown as IAction<string | ITodo[]>)
  }, [dispatch])

  return (
    <>
      {todos.length && <p>Todos length: {todos.length}</p>}
      {error && <h4>{error}</h4>}
      {status === LoadingStatus.LOADING && <p>Loading...</p>}
      {todos.length && todos.map(todo => (<p key={todo.id}>{todo.title}</p>))}
    </>
  );
};
export default TodosList;
