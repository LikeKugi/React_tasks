import { JSX } from 'react';
import { Outlet } from 'react-router-dom';
import PostsNav from '../components/PostsNav/PostsNav';

const LessonThird = (): JSX.Element => {
  return (
    <div>
      <PostsNav />
      <Outlet />
    </div>
  );
};
export default LessonThird;
