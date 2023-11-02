import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '@/types/types';
import { resetToDefault } from '@/store/actions/reset.action';
import { RootState } from '@/store/store';
import { FilterConstants } from '@/store/constants/FilterConstants';

const initialState: ITodo[] = []

export const createTodo = createAsyncThunk(
  '@@todos/create-todo',
  async (title: string, {
    dispatch,
  }) => {
    dispatch({type: 'SET_LOADING'});

    const res = await fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title, completed: false})
    })
    const data = await res.json();
    dispatch(addTodo(data))
  }
);

export const todosSlice = createSlice({
  name: '@@todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodo>) => {
        state.push(action.payload)
      },
      prepare: (title: string) => ({
        payload: {
          title,
          completed: false,
          id: Math.floor(Math.random() * 10000),
        }
      })
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(resetToDefault, () => {
      return [];
    })
  }
})

export const TodosReducer = todosSlice.reducer;
export const {addTodo, toggleTodo, removeTodo} = todosSlice.actions;

export const selectVisibleTodos = (state: RootState, filter: FilterConstants) => {
  switch (filter) {
    case FilterConstants.ALL: {
      return state.todos;
    }
    case FilterConstants.ACTIVE: {
      return state.todos.filter(todo => !todo.completed);
    }
    case FilterConstants.COMPLETED: {
      return state.todos.filter(todo => todo.completed);
    }
    default: {
      return state.todos;
    }
  }
}
