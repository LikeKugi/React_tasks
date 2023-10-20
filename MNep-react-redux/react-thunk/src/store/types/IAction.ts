import { UsersConstants } from '@/store/users/users.constants';
import { TodosConstants } from '@/store/todos/todos.constants';

export type PayloadAction<T> = T

export interface IAction<T> {
  type: UsersConstants | TodosConstants,
  payload: PayloadAction<T>
}
