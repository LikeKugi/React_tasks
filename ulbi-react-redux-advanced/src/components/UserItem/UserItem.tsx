import {FC, JSX} from "react";
import {IUser} from "../../types/IUser";
import styles from './UserItem.module.css';

interface IUserItemProps {
  user: IUser;
}

const UserItem: FC<IUserItemProps> = ({user}): JSX.Element => {
  return (
    <div className={styles.user}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
export default UserItem;
