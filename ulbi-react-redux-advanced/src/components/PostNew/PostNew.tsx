import {JSX, useEffect, useReducer, useState} from "react";
import {Action} from "@reduxjs/toolkit";
import PostForm from "../PostForm/PostForm";
import {postAPI} from "../../services/PostService";
import {IPost} from "../../types/IPost";

type State = {
  value: boolean;
}

const initialValue: State = {
  value: false,
}

function reducer(state: State, _: Action): State {
  return {...state, value: !state.value};
}

const PostNew = (): JSX.Element => {
  const [visible, dispatch] = useReducer(reducer, initialValue);
  const [postData, setPostData] = useState({title: '', author: ''})
  const [createPost, {}] = postAPI.useCreatePostMutation();

  const defaultPostData = () => {
    setPostData({title: '', author: ''})
  }

  useEffect(() => {
    if (postData.title.length > 0 && postData.author.length > 0) {
      handleCreate()
    }
  }, [postData])

  const handleCreate = async () => {
    await createPost(postData as IPost);
    defaultPostData();
  }

  const newPostHandler = (data: {title: string, author: string}) => {
    setPostData({title: data.title, author: data.author});
  }

  return (
    <div style={{padding: '2rem'}}>
      <button style={{marginBottom: '1rem'}} onClick={dispatch}>{!visible.value ? 'Create new post' : 'Hide form'}</button>
      {visible.value && <PostForm formHandler={newPostHandler}/>}
    </div>
  );
}
export default PostNew;
