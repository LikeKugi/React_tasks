import { JSX } from 'react';
import TodoForm from '@components/todos/TodoForm';
import {useSelector} from 'react-redux';
import { RootState } from '@store/store';
import TodoItem from '@components/todos/TodoItem';

const Todos = (): JSX.Element => {
  const todoList = useSelector((store: RootState) => store.todos);
  return (
    <>
      <h1>Todos</h1>
      <TodoForm />
      <div className="todos">
        {todoList.map(todo => <TodoItem id={todo.id} description={todo.description} process={todo.process} key={todo.id}/>)}
      </div>
    </>
  );
};
export default Todos;
