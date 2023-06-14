import React, {useEffect, useState} from 'react';
import {ITodo} from "../../types/types";
import axios from "axios";
import TodoItem from "../../components/TodoItem/TodoItem";
import List from "../../components/List/List";

const TodosPage: React.FC = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data)
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h2>Todos list</h2>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem  todo={todo} key={todo.id}/>} />
    </div>
  );
};

export default TodosPage;
