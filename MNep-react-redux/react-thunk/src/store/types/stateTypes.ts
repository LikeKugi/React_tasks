import { ITodo } from '@/types/ITodo';

export const enum LoadingStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export interface IBaseState {
  status: LoadingStatus,
  error: string | null
}

export interface ITodoState extends IBaseState{
  list: ITodo[],
}
