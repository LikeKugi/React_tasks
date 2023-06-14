import {FC, JSX} from "react";
import {ITodo} from "../../types/types";

interface TodoItemProps {
  todo: ITodo,
}

const TodoItem: FC<TodoItemProps> = ({todo}): JSX.Element => {
  return (
    <div style={{padding: 15, border: '1px solid lightgray', margin:10}}>
      {todo.id}: {todo.userId}
      <p>Completed: <span>{todo.completed ? 'Done' : 'Processing'} </span> </p>
      <p>Title: <span>{todo.title} </span> </p>
    </div>
  );
}
export default TodoItem;
