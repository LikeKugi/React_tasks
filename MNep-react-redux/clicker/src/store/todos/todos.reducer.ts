import { IAction, ITodo } from '@store/types/types';
import { TodosActions } from '@store/todos/todos.constants';

export const todos = (state: ITodo[] = [], action: IAction) => {
  switch (action.type) {
    case TodosActions.addTodo:
      return state = [...state, { id: Date.now(), description: action.payload as string || '', process: false }];
    case TodosActions.removeTodo:
      return state.filter(el => el.id !== action.payload);
    case TodosActions.toggleTodo:
      return state.map(el => {
        if (el.id === action.payload) {
          el.process = !el.process
        }
        return el
      })
    default:
      return state;
  }
};
