import { JSX } from 'react';
import { useAppSelector } from '../../app/store';
import { selectAllApiUsers } from '../../app/slices/apiUsersSlice';
import { Link } from 'react-router-dom';

const UsersApiList = (): JSX.Element => {
  const users = useAppSelector(selectAllApiUsers);

  const renderedUsers = users.map(user => (
    <li key={user.id}>
      <Link to={`/third/users/${user.id}`}>{user.name}</Link>
    </li>
  ))

  return (
    <section>
      <h2>Users</h2>

      <ul>{renderedUsers}</ul>
    </section>
  );
};
export default UsersApiList;
