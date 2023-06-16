import React, {FC, JSX} from "react";
import {IPost} from "../../types/IPost";
import styles from './PostItem.module.css'

interface IPostItemProps {
  post: IPost;
  remove: (post: IPost) => void,
  update: (post: IPost) => void,
}

const PostItem: FC<IPostItemProps> = ({post, remove, update}): JSX.Element => {
  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    remove(post);
  }
  const updateHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTitle = prompt();
    if (!newTitle || newTitle.trim().length === 0) {
      return;
    }
    update({...post, title: newTitle});
  }
  return (
    <div className={styles.post}>
      <p>{post.author}</p>
      <h2>{post.title}</h2>
      <div>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={updateHandler}>Update</button>
      </div>
    </div>
  );
}
export default PostItem;
