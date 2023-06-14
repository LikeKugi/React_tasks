import {FC, JSX} from "react";
import {IUser} from "../../types/types";

interface UserItemProps {
  user: IUser,
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}): JSX.Element => {
  return (
    <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid lightgray', margin:10}}>
      {user.id}: {user.name}
      <p>Address: <span>{user.address.zipcode} </span> <span>{user.address.city} </span>
        <span>{user.address.street} </span></p>
    </div>
  );
}
export default UserItem;
