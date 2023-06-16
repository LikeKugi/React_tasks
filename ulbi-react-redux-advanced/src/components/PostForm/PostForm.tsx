import React, {FC, useState} from 'react';
import styles from './PostForm.module.css'

interface IPostFormProps {
  formHandler: ({title, author}: {title: string, author: string}) => void;
}

const PostForm: FC<IPostFormProps> = ({formHandler}) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('')

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e.target.value;
    setTitle(value);
  }

  const authorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const value = e.target.value;
    setAuthor(value);
  }

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (title.trim().length > 0 && author.trim().length > 0) {
      const obj = JSON.parse(JSON.stringify({title: title.trim(), author: author.trim()}))
      formHandler(obj);
    }
    setTitle('');
    setAuthor('');
  }

  return (
    <div>
      <form className={styles.form}>
        <label className={styles.form__label}><span className={styles.form__description}>Title: </span><input className={styles.form__input} type="text" value={title} onChange={titleHandler}/></label>
        <label className={styles.form__label}><span className={styles.form__description}>Author: </span><input className={styles.form__input} type="text" value={author} onChange={authorHandler}/></label>
        <button onClick={submitHandler}>Add</button>
      </form>
    </div>
  );
};


export default PostForm;
