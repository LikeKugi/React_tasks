import { JSX } from 'react';
import TodoForm from '@components/todos/TodoForm';
import {useSelector} from 'react-redux';
import TodoItem from '@components/todos/TodoItem';
import { selectFilteredTodos } from '@store/todos';
import Filter from '@components/Filter/Filter';
import { selectActiveFilter } from '@store/filters';
import { RootState } from '@store/types/types';

const Todos = (): JSX.Element => {
  const activeFilter = useSelector(selectActiveFilter)
  const todoList = useSelector((state: RootState) => selectFilteredTodos(state, activeFilter));
  return (
    <>
      <h1>Todos</h1>
      <TodoForm />
      <Filter />
      <div className="todos">
        {todoList.map(todo => <TodoItem id={todo.id} description={todo.description} process={todo.process} key={todo.id}/>)}
      </div>
    </>
  );
};
export default Todos;
