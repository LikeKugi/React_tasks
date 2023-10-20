import { IAction } from '@/store/types/IAction';
import { TodosConstants } from '@/store/todos/todos.constants';
import { ITodo } from '@/types/ITodo';
import { client } from '@/api';
import { Dispatch } from 'react';

export const addTodos = (todos: ITodo[]): IAction<ITodo[]> => ({
  type: TodosConstants.ADD_TODOS,
  payload: todos,
});

export const setLoading = (): IAction<null> => ({
  type: TodosConstants.SET_LOADING,
  payload: null,
});

export const setError = (err: string) => ({
  type: TodosConstants.SET_ERROR,
  payload: err,
})

export const loadTodos = () => (dispatch: Dispatch<IAction<unknown>>) => {
  dispatch(setLoading());
  client.get('https://jsonplaceholder.typicode.com/todos')
    .then(data => dispatch(addTodos(data as ITodo[])))
    .catch(e => dispatch(setError(e.message)));
};
