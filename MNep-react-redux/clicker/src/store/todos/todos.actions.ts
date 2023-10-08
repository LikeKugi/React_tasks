import { TodosActions } from '@store/todos/todos.constants';
import { IAction } from '@store/types/types';

export const addTodo = (payload: string): IAction => ({
  type: TodosActions.addTodo,
  payload,
});

export const removeTodo = (payload: number): IAction => ({
  type: TodosActions.removeTodo,
  payload,
});

export const toggleTodo = (payload: number): IAction => ({
  type: TodosActions.toggleTodo,
  payload,
});
