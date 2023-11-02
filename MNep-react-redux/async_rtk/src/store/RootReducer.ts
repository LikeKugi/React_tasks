import { combineReducers } from '@reduxjs/toolkit';
import { TodosReducer } from '@/store/slices/todosSlice';
import { FiltersReducer } from '@/store/slices/filtersSlice';

export const RootReducer = combineReducers({
  todos: TodosReducer,
  filters: FiltersReducer,
})
