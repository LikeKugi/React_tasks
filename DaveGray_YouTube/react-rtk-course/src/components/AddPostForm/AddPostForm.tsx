import { ChangeEvent, FormEvent, JSX, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { postAdded } from '../../app/slices/postsSlice';
import { selectAllUsers } from '../../app/slices/usersSlice';

const AddPostForm = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userID, setUserID] = useState('');

  const dispatch = useAppDispatch();

  const users = useAppSelector(selectAllUsers);

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value || '');
  };

  const onContentChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value || '');
  };

  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserID(e.target.value);
  };

  const usersOptions = users.map(user => (
    <option value={user.id}
            key={user.id}>{user.name}</option>
  ));

  const canSave = !!title && !!content && !!userID;

  const onSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userID));
    }
    setTitle('');
    setContent('');
    setUserID('');
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
          value={content}
          onChange={onContentChanged}
        />
        <button type="submit" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};
export default AddPostForm;
