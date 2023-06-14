import {FC, JSX} from "react";
import {IUser} from "../../types/types";
import UserItem from "../UserItem/UserItem";
import {useNavigate} from "react-router-dom";

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({users}): JSX.Element => {
  const navigate = useNavigate();
  return (
    <div>
      {users.map(user => <UserItem user={user} key={user.id} onClick={(user) => navigate(`/users/${user.id}`)}/>)}
    </div>
  );
}
export default UserList;
