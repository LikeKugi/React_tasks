import { combineReducers } from 'redux';
import { counter } from '@store/clicker';
import { todos } from '@store/todos';
import { filters } from '@store/filters';

export const RootReducer = combineReducers({
  counter,
  todos,
  filters
});
