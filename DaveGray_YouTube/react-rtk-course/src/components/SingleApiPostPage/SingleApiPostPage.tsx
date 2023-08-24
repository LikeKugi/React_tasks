import { JSX } from 'react';
import { useAppSelector } from '../../app/store';
import { reactionAdded, selectApiPostById } from '../../app/slices/apiPostsSlice';
import { useParams } from 'react-router-dom';
import PostAuthor from '../PostAuthor/PostAuthor';
import TimeAgo from '../TimeAgo/TimeAgo';
import ReactionButtons from '../ReactionButtons/ReactionButtons';

const SingleApiPostPage = (): JSX.Element => {
  const { postId } = useParams();
  const post = useAppSelector((state) => selectApiPostById(state, Number(postId)));
  if (!post) {
    return (<section>
      <h2>Post not Found!</h2>
    </section>)
  }
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p className="postCredit">
        <PostAuthor userID={post.userId}/>
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} reactionAdded={reactionAdded} />
    </article>
  );
};
export default SingleApiPostPage;
