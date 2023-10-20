import { combineReducers } from 'redux';
import { UsersReducer } from '@/store/users/users.reducer';
import { TodosReducer } from '@/store/todos/todos.reducer';

export const RootReducer = combineReducers({
  users: UsersReducer,
  todos: TodosReducer,
})
