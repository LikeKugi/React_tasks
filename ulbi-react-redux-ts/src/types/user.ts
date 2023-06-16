export enum UserActionTypes {
  FETCH_USERS = 'FETCH_USERS',
  FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
  FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}


export interface IUserState {
  users: any[],
  loading: boolean,
  error: string | null,
}

export interface IFetchUsersAction {
  type: UserActionTypes.FETCH_USERS,
}

export interface IFetchUsersSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: any[],
}

export interface IFetchUsersError {
  type: UserActionTypes.FETCH_USERS_ERROR,
  payload: string,
}

export type UserAction = IFetchUsersAction | IFetchUsersSuccess | IFetchUsersError;


export interface IAction {
  type: string,
  payload?: any,
}
