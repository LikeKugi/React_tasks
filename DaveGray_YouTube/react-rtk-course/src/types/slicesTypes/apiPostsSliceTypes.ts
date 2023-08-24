import { IApiPost } from '../IPosts';
import { IReaction } from '../IReaction';

export type StatusApiType = 'idle' | 'loading' | 'succeeded' | 'failed' | 'pending';

export interface IApiPostSlice extends IApiPost{
  reactions: IReaction
  date: string
}

export interface IInitialState {
  posts: IApiPostSlice[]
  status: StatusApiType
  error: null | string
}

