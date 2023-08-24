import { FC, JSX } from 'react';
import { IReactionEmoji } from '../../types/IReaction';
import { useAppDispatch } from '../../app/store';
import { IPostReactionable } from '../../types/IPosts';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { IReactionAdded } from '../../types/slicesTypes/postsSliceTypes';

const reactionEmoji: IReactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

interface IReactionButtonProps {
  post: IPostReactionable;
  reactionAdded:  ActionCreatorWithPayload<IReactionAdded>
}

const ReactionButtons: FC<IReactionButtonProps> = ({ post, reactionAdded }): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button key={name}
                type={'button'}
                className={'reactionButton'}
                onClick={() => dispatch(reactionAdded({
                  postID: post.id,
                  reaction: name as keyof IReactionEmoji
                }))}>
          {emoji} {post.reactions[name as keyof IReactionEmoji]}
        </button>
      ))}
    </div>
  );
};
export default ReactionButtons;
