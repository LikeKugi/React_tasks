import { JSX } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectActiveFilter } from '@/store/slices/filtersSlice';
import { removeTodo, selectVisibleTodos, toggleTodo } from '@/store/slices/todosSlice';

const TodoList = (): JSX.Element => {
  const activeFilter = useAppSelector(selectActiveFilter)
  const todos = useAppSelector(state => selectVisibleTodos(state, activeFilter));
  const dispatch = useAppDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{" "}
          {todo.title}{" "}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
