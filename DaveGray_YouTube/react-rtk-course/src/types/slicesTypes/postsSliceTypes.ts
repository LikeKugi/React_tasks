export interface IReactionAdded {
  postID: number | string
  reaction: 'thumbsUp' | 'wow' | 'heart' | 'rocket' | 'coffee'
}
