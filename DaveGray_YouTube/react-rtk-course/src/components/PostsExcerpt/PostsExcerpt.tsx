import { FC, JSX } from 'react';
import { IApiPostSlice } from '../../types/slicesTypes/apiPostsSliceTypes';
import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';

interface IPostsExcerptProps {
  post: IApiPostSlice
}

const PostsExcerpt: FC<IPostsExcerptProps> = ({post}): JSX.Element => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userID={post.userId}/>
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
export default PostsExcerpt;
