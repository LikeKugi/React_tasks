import { RootState } from '@/store/store';

export const selectAllTodos = (state: RootState) => state.todos.list
export const selectStatusTodos = (state: RootState) => state.todos.status
export const selectErrorTodos = (state: RootState) => state.todos.error
