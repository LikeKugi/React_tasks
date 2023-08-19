import { IReaction } from './IReaction';

export interface IPostReactionable {
  id: number | string
  reactions: IReaction
}

export interface IPost extends IPostReactionable{
  title: string
  content: string
  userID?: string | number
  date: string
}

export interface IApiPost{
  userId: number
  id: number | string
  title: string
  body: string
}
