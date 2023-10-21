import { UsersConstants } from '@/store/users/users.constants';
import { IAction } from '@/store/types/IAction';
import { IUser } from '@/types/IUser';
import { Dispatch } from 'react';
import { client } from '@/api';


export const addUsers = (users: IUser[]): IAction<IUser[]> => ({
  type: UsersConstants.ADD_USERS,
  payload: users
});


export const loadUsers = () => (dispatch: Dispatch<IAction<unknown>>) => {
  client.get('https://jsonplaceholder.typicode.com/users').then(data => dispatch(addUsers(data as IUser[]))).catch(e => console.error(e.message));
};
