import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { counterReducer } from './slices/counterSlice';
import { postsReducer } from './slices/postsSlice';
import { usersReducer } from './slices/usersSlice';
import { apiPostsReducer } from './slices/apiPostsSlice';
import { apiUsersReducer } from './slices/apiUsersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    apiPosts: apiPostsReducer,
    apiUsers: apiUsersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
