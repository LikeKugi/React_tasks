import { JSX } from 'react';
import { useAppSelector } from '../../app/store';
import { selectAllPosts } from '../../app/slices/postsSlice';
import PostAuthor from '../../components/PostAuthor/PostAuthor';
import TimeAgo from '../../components/TimeAgo/TimeAgo';
import ReactionButtons from '../../components/ReactionButtons/ReactionButtons';

const PostsList = (): JSX.Element => {
  const posts = useAppSelector(selectAllPosts);

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userID={post.userID}/>
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
export default PostsList;
