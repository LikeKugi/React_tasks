import { JSX, useEffect, useState } from "react";
import api from "../../api/api";
import { AxiosError } from "axios";
import { IUserRequestAPI } from "../../types/TypesAPI";

const Users = (): JSX.Element => {
  const [users, setUsers] = useState<IUserRequestAPI[]>([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await api.get('/users', {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setUsers(response.data)
      } catch (e) {
        console.log(e as AxiosError);
      }
    }

    getUsers();

    return () => {
      isMounted = false;
      controller.abort();
    }
  }, [])
  return (
    <article>
      <h2>Users List</h2>
      {users.length ?
      (<ul>
        {users.map((user, i) => <li key={i}>{user.email}</li>)}
      </ul>)
        : (<p>No users to display</p>)
      }
    </article>
  );
};
export default Users;
