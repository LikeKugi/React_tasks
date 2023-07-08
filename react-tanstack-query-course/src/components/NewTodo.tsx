import {Button, Input, Stack } from "@chakra-ui/react";
import React, {JSX, useState} from "react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {createTodo} from "../services/todos";
import {ITodo} from "../types/ITodos";

const NewTodo = (): JSX.Element => {
  const [title, setTitle] = useState('');

  const client = useQueryClient();

  const {mutate: create} = useMutation({
    mutationFn: createTodo,
    onSuccess: (newTodo) => {
      client.setQueryData<ITodo[]>(['todos', 'all'], (oldTodos) => {
        return [...(oldTodos || []), newTodo]
      });
      client.invalidateQueries({
        queryKey: ['todos', 'all'],
        refetchType: 'none',
      })
    }
  });

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title) {
      create(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={submit}>
      <Stack direction="row">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="new todo..."
        />
        <Button type="submit">Add new Todos</Button>
      </Stack>
    </form>
  );
}
export default NewTodo;
