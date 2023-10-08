import { RootState } from '@store/types/types';
import { FiltersProp } from '@store/filters';

export const selectTodos = (state: RootState) => state.todos

export const selectFilteredTodos = (state: RootState, filter: FiltersProp) => {
  switch (filter) {
    case FiltersProp.ALL:
      return state.todos
    case FiltersProp.ACTIVE:
      return state.todos.filter(todo => !todo.process);
    case FiltersProp.COMPLETE:
      return state.todos.filter(todo => todo.process)
    default:
      return state.todos
  }
}
