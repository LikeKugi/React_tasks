import './App.css'
import FilterTodo from '@/components/FilterTodo/FilterTodo';
import TodoList from '@/components/TodoList/TodoList';
import NewTodo from '@/components/NewTodo/NewTodo';

function ResetApp() {
  return null;
}

function App() {

  return (
    <>
      <h1>Todos List</h1>
      <NewTodo />
      <FilterTodo />
      <TodoList />
      <ResetApp />
    </>
  )
}

export default App
