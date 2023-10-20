import { IAction } from '@/store/types/IAction';
import { UsersConstants } from '@/store/users/users.constants';
import { IUser } from '@/types/IUser';

export const UsersReducer = (state: IUser[] = [], action: IAction<IUser[]>) => {
  switch (action.type) {
    case UsersConstants.ADD_USERS:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
