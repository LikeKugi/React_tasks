import { ChangeEvent, FormEvent, JSX, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { deletePost, selectApiPostById, updatePost } from '../../app/slices/apiPostsSlice';
import { StatusApiType } from '../../types/slicesTypes/apiPostsSliceTypes';
import { selectAllApiUsers } from '../../app/slices/apiUsersSlice';

const EditPostForm = (): JSX.Element => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useAppSelector(state => selectApiPostById(state, Number(postId)));
  const users = useAppSelector(selectAllApiUsers);

  const [title, setTitle] = useState(post?.title || '');
  const [body, setBody] = useState(post?.body || '');
  const [userId, setUserId] = useState(post?.userId || -1);
  const [requestStatus, setRequestStatus] = useState<StatusApiType>('idle');

  const dispatch = useAppDispatch();

  if (!post) {
    return (<section>
      <h2>Post not found!</h2>
    </section>);
  }

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onBodyChanged = (e: ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value);
  const onAuthorChanged = (e: ChangeEvent<HTMLSelectElement>) => setUserId(+e.target.value);

  const canSave = [title, body, userId].every(Boolean) && requestStatus === 'idle';

  const onSavePost = (e: FormEvent) => {
    e.preventDefault();
    if (canSave) {
      try {
        setRequestStatus('pending');

        dispatch(updatePost({ id: post.id, title, body, userId, reactions: post.reactions })).unwrap();

        setTitle('');
        setBody('');
        setUserId(-1);
        navigate(`/third/${post.id}`);
      } catch (err) {
        console.error('Failed to save the post', err);
      } finally {
        setRequestStatus('idle');
      }
    }
  };

  const onDeletePost = () => {
    try {
      setRequestStatus('pending');
      dispatch(deletePost(post)).unwrap();

      setTitle('');
      setBody('');
      setUserId(-1);
      navigate('/third');
    } catch (err) {
      console.error('Failed to delete the post', err);
    } finally {
      setRequestStatus('idle');
    }
  };

  const usersOptions = users.map(user => (
    <option
      key={user.id}
      value={user.id}
    >{user.name}</option>
  ));

  return (
    <section>
      <h2>Edit Post Form</h2>
      <form onSubmit={onSavePost}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor"
                value={userId}
                onChange={onAuthorChanged}>
          <option value="-1">-</option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={body}
          onChange={onBodyChanged}
        />
        <button
          type="submit"
          disabled={!canSave}
        >
          Save Post
        </button>
        <button className="deleteButton"
                type="button"
                onClick={onDeletePost}
        >
          Delete Post
        </button>
      </form>
    </section>
  );
};
export default EditPostForm;
