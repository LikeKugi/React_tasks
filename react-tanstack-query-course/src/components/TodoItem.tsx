import {Checkbox, ListItem, Stack } from "@chakra-ui/react";
import {FC, JSX} from "react";
import {ITodo} from "../types/ITodos";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {toggleTodoStatus} from "../services/todos";

const TodoItem: FC<ITodo> = ({completed, id, title}): JSX.Element => {
  const client = useQueryClient();

  const {mutate: toggle} = useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries({queryKey: ['todos']})
  })

  return (
    <ListItem>
      <Stack spacing={4} direction="row" onClick={() => toggle()}>
        <Checkbox isChecked={completed}>{title}</Checkbox>
      </Stack>
    </ListItem>
  );
}
export default TodoItem;
