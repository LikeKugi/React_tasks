
import './App.css'
import UsersList from '@/store/components/UsersList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadUsers } from '@/store/users/users.actions';
import { AnyAction } from 'redux';
import TodosList from '@/store/components/TodosList';
import NewTodo from '@/store/components/NewTodo';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers() as unknown as AnyAction)
  }, [dispatch])

  return (
    <>
      <NewTodo />
      <UsersList />
      <TodosList />
    </>
  )
}

export default App
