import {JSX, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks/redux";
import {fetchUsers} from "../store/reducers/ActionCreateors";
import UserItem from "../components/UserItem/UserItem";

const UsersActions = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <div style={{padding: '2rem 0'}}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {users.map((user) => <UserItem user={user} key={user.id}/>)}
    </div>
  );
}
export default UsersActions;
