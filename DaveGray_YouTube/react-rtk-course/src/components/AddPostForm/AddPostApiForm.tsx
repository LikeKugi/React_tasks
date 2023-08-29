import { ChangeEvent, FormEvent, JSX, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { addNewApiPost } from '../../app/slices/apiPostsSlice';
import { StatusApiType } from '../../types/slicesTypes/apiPostsSliceTypes';
import { AxiosError } from 'axios';
import { selectAllApiUsers } from '../../app/slices/apiUsersSlice';
import { useNavigate } from 'react-router-dom';

const AddPostApiForm = (): JSX.Element => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userID, setUserID] = useState('');
  const [addRequestStatus, setAddRequestStatus] = useState<StatusApiType>('idle');

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectAllApiUsers);

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value || '');
  };

  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value || '');
  };

  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserID(e.target.value);
  };

  const usersOptions = users.map(user => (
    <option value={user.id}
            key={user.id}>{user.name}</option>
  ));

  const canSave = [title, body, userID].every(Boolean) && addRequestStatus === 'idle';

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    try {
      setAddRequestStatus('pending');
      dispatch(addNewApiPost({title, body, userId: +userID})).unwrap()
    } catch (e: unknown) {
      console.log(e as AxiosError);
    } finally {
      setAddRequestStatus('idle');
    }
    setTitle('');
    setBody('');
    setUserID('');
    navigate('/third/posts')
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={onSubmitForm}>
        <label htmlFor={'postTitle'}>Title:</label>
        <input type="text"
               id={'postTitle'}
               name={'postTitle'}
               value={title}
               onChange={onTitleChanged}/>

        <label htmlFor="postAuthor">Author:</label>
        <select name="postAuthor"
                id="postAuthor"
                value={userID}
                onChange={onAuthorChanged}>
          <option value="">-</option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={onContentChanged}
        />
        <button type="submit"
                disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostApiForm;
