import { FC, JSX } from 'react';
import { useAppSelector } from '../../app/store';
import { selectAllUsers } from '../../app/slices/usersSlice';
import { IApiUser, IUser } from '../../types/IUsers';
import { selectAllApiUsers } from '../../app/slices/apiUsersSlice';

interface IPostAuthorProps {
  userID?: string | number;
}

const PostAuthor: FC<IPostAuthorProps> = ({userID}): JSX.Element => {
  const users: IUser[] = useAppSelector(selectAllUsers);
  const apiUsers: IApiUser[] = useAppSelector(selectAllApiUsers);
  let author;

  if (userID && Number.isFinite(+userID)) {
    author = apiUsers.find(user => user.id === +userID);
  } else if (typeof userID === 'string') {
    author = users.find(user => user.id === userID);
  }
  return (
    <span>
      by {author ? author.name : 'Unknown Author'}
    </span>
  );
};
export default PostAuthor;
