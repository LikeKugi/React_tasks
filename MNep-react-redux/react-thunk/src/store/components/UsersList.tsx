import { JSX } from 'react';
import { useAppSelector } from '@/store/hooks';
import { selectAllUsers } from '@/store/users/users.selectors';


const UsersList = (): JSX.Element => {
  const users = useAppSelector(selectAllUsers);
  return (
    <div>
      Users: {users && users.length}
    </div>
  );
};
export default UsersList;
