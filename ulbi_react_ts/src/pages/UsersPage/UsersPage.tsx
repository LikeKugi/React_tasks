import React, {FC, JSX, useEffect, useState} from "react";
import {IUser} from "../../types/types";
import axios from "axios";
import UserItem from "../../components/UserItem/UserItem";
import List from "../../components/List/List";
import {useNavigate} from "react-router-dom";

const UsersPage: FC = (): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([
    {
      id: 1,
      name: 'John Doe',
      email: 'e-mail@mail.com',
      address: {city: 'Moscow', street: 'Gorky', zipcode: '13256'}
    }, {
      id: 2,
      name: 'Jonathan Doe',
      email: 'e-mail@mail.com',
      address: {city: 'Spb', street: 'Nevsky', zipcode: '15623'}
    }
  ])

  useEffect(() => {
    fetchUsers()
  }, []);

  const navigate = useNavigate();

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <h2>Users list</h2>
      <List items={users}
            renderItem={(user: IUser) => <UserItem onClick={(user) => navigate(`/users/${user.id}`)}
                                                   user={user}
                                                   key={user.id}/>}/>
    </div>
  );
}
export default UsersPage;
