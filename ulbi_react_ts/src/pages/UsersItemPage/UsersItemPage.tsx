import {JSX, useEffect, useState} from "react";
import {IUser} from "../../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UsersItemPage = (): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null)
  // @ts-ignore
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();
  useEffect(() => {
    fetchUser();
  })
  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      setUser(response.data)
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <button onClick={() => navigate('/users')}>Back</button>
      <h1>{user?.name ? user.name : 'Default'} user page</h1>
      <div>
        <p>{user?.email ? user.email : 'email@placeholder.com'}</p>
        <p>{user?.address?.city ? user.address.city : 'default city'}</p>
      </div>
    </div>
  );
}
export default UsersItemPage;
