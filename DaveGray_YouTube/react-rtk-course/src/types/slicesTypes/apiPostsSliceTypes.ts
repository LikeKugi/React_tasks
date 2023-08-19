import { IApiPost } from '../IPosts';
import { IReaction } from '../IReaction';

export interface IApiPostSlice extends IApiPost{
  reactions: IReaction
  date: string
}

export interface IInitialState {
  posts: IApiPostSlice[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null | string
}

