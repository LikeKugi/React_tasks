import { JSX } from 'react';
import { useAppSelector } from '../../app/store';
import { getApiPostsError, getApiPostsStatus, selectAllApiPosts } from '../../app/slices/apiPostsSlice';
import PostsExcerpt from '../../components/PostsExcerpt/PostsExcerpt';

const PostsApiList = (): JSX.Element => {

  const posts = useAppSelector(selectAllApiPosts);
  const postStatus = useAppSelector(getApiPostsStatus);
  const error = useAppSelector(getApiPostsError);

  let content;
  if (postStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (postStatus === 'succeeded') {
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map(post => <PostsExcerpt post={post}
                                                     key={post.id + Date.now().toLocaleString() + Math.random().toString()}/>);
  } else if (postStatus === 'failed') {
    content = <p>Error. Try again Later... <br/>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};
export default PostsApiList;
