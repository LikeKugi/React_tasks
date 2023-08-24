import { JSX } from 'react';
import PostsApiList from '../features/posts/PostsApiList';
import AddPostApiForm from '../components/AddPostForm/AddPostApiForm';

const LessonThird = (): JSX.Element => {
  return (
    <div>
      <AddPostApiForm />
      <PostsApiList />
    </div>
  );
};
export default LessonThird;
