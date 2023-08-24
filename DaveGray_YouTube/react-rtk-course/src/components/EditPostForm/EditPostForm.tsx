import { ChangeEvent, JSX, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { selectApiPostById } from '../../app/slices/apiPostsSlice';
import { selectAllUsers } from '../../app/slices/usersSlice';
import { StatusApiType } from '../../types/slicesTypes/apiPostsSliceTypes';

const EditPostForm = (): JSX.Element => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useAppSelector(state => selectApiPostById(state, Number(postId)));
  const users = useAppSelector(selectAllUsers);

  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');
  const [userId, setUserId] = useState(post?.userId || 0);
  const [requestStatus, setRequestStatus] = useState<StatusApiType>('idle');

  const dispatch = useAppDispatch();

  if (!post) {
    return (<section>
      <h2>Post not found!</h2>
    </section>)
  }

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChanged = (e: ChangeEvent<HTMLInputElement>) => setBody(e.target.value);
  const onAuthorChanged = (e: ChangeEvent<HTMLInputElement>) => setUserId(+e.target.value);
  return (
    <>
    </>
  );
};
export default EditPostForm;
