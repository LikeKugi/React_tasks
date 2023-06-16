import React, {JSX} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "../components/PostItem/PostItem";
import PostNew from "../components/PostNew/PostNew";
import {IPost} from "../types/IPost";

const PostsActions = (): JSX.Element => {
  const {data: posts, error, isLoading} = postAPI.useFetchALlPostsQuery(30)

  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const handleRemove = (post: IPost) => {
    deletePost(post);
  }

  const handleUpdate = (post: IPost) => {
    updatePost(post);
  }

  return (
    <div style={{padding: '2rem 0'}}>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      <PostNew />
      {posts && posts.map(post => <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id}/>)}
    </div>
  );
};

export default PostsActions;
