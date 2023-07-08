import {List, Spinner } from "@chakra-ui/react";
import {FC, JSX} from "react";
import TodoItem from "./TodoItem";
import {useTodosQuery} from "../hooks/useTodosQuery";
import {TodoStateType} from "../types/ITodos";

interface ITodoListProps {
  state: TodoStateType
}

const TodoList: FC<ITodoListProps> = ({state}): JSX.Element => {

  const {data, isLoading, isSuccess } = useTodosQuery(state);

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    )
  }

  return (
    <List>
      {isSuccess && data.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </List>
  );
}
export default TodoList;
