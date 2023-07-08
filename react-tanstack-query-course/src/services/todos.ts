import {ITodo, TodoStateType} from "../types/ITodos";

const BASE = 'http://localhost:3004/todos'

export async function fetchTodos(state: TodoStateType = 'all'): Promise<ITodo[]> {
  const queries = state === 'all' ? '' : `?completed=${state === 'completed'}`

  const res = await fetch(`${BASE}/${queries}`);

  if (!res.ok) throw new Error('Failed to load')

  return res.json()
}

export async function toggleTodoStatus(todoId: number, completed: boolean) {
  const res = await fetch(`${BASE}/${todoId}`, {
    method: 'PATCH',
    body: JSON.stringify({completed}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json();
}

export async function createTodo(title: string) {
  const res = await fetch(BASE, {
    method: "POST",
    body: JSON.stringify({title, completed: false}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return res.json();
}
