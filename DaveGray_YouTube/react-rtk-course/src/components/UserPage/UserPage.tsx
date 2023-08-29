import { JSX } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/store';
import { selectApiUserById } from '../../app/slices/apiUsersSlice';
import { selectApiPostsByUser } from '../../app/slices/apiPostsSlice';

const UserPage = (): JSX.Element => {
  const { userId } = useParams();
  const user = useAppSelector(state => selectApiUserById(state, userId ? +userId : -1));

  const postsForUser = useAppSelector(state => selectApiPostsByUser(state, Number(userId))) || [];

  const postTitles = postsForUser.map(post => (
    <li key={post.id}>
      <Link to={`/third/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
};
export default UserPage;
