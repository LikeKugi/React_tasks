import { createStore, combineReducers } from 'redux';

export interface IAction {
  type: string;
  description?: string;
  id?: number;
}

const counter = (state = 0, action: IAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

interface ITodo {
  id: number,
  process: boolean,
  description: string
}

const todos = (state: ITodo[] = [], action: IAction) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state = [...state, { id: Date.now(), description: action.description || '', process: false }];
    case 'REMOVE_TODO':
      return state.filter(el => el.id !== action.id);
    case 'TOGGLE_TODO':
      return state.map(el => {
        if (el.id === action.id) {
          el.process = !el.process
        }
        return el
      })
    default:
      return state;
  }
};

export const addTodo = (description: string) => ({
  type: 'ADD_TODO',
  description,
});

export const removeTodo = (id: number) => ({
  type: 'REMOVE_TODO',
  id,
});

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id,
});

const RootReducer = combineReducers({
  counter,
  todos,
});
export const store = createStore(RootReducer);

export const increment = { type: 'INCREMENT' };
export const decrement = { type: 'DECREMENT' };
export const reset = { type: 'RESET' };

export type RootState = ReturnType<typeof store.getState>
