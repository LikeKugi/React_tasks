import React, { useEffect } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { fetchApiPosts, getApiPostsStatus } from './app/slices/apiPostsSlice';
import { fetchApiUsers } from './app/slices/apiUsersSlice';
import { useAppDispatch, useAppSelector } from './app/store';

function App() {
  const dispatch = useAppDispatch();

  const postStatus = useAppSelector(getApiPostsStatus);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchApiPosts());
      dispatch(fetchApiUsers());
    }
  }, [postStatus, dispatch]);
  return (
    <AppRoutes />
  );
}

export default App;
