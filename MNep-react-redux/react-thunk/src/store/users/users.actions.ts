import { UsersConstants } from '@/store/users/users.constants';
import { IAction } from '@/store/types/IAction';
import { IUser } from '@/types/IUser';
import { Dispatch } from 'react';

export const addUsers = (users: IUser[]): IAction<IUser[]> => ({
  type: UsersConstants.ADD_USERS,
  payload: users
});


export const loadUsers = () => (dispatch: Dispatch<IAction<unknown>>) => {
  fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => dispatch(addUsers(data)));
};
