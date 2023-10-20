import { ITodo } from '@/types/ITodo';
import { IAction } from '@/store/types/IAction';
import { ITodoState, LoadingStatus } from '@/store/types/stateTypes';
import { TodosConstants } from '@/store/todos/todos.constants';

const initialState: ITodoState = {
  status: LoadingStatus.IDLE,
  error: null,
  list: [],
}

export const TodosReducer = (state: ITodoState = initialState, action: IAction<ITodo[] | string>): ITodoState => {
  switch (action.type) {
    case TodosConstants.ADD_TODOS:
      return {
        ...state,
        status: LoadingStatus.FULFILLED,
        error: null,
        list: action.payload as ITodo[],
      }
    case TodosConstants.SET_LOADING:
      return {
        ...state,
        status: LoadingStatus.LOADING,
        error: null,
      }
    case TodosConstants.SET_ERROR:
      return {
        ...state,
        status: LoadingStatus.REJECTED,
        error: action.payload as string,
      }
    default:
      return state;
  }
}
