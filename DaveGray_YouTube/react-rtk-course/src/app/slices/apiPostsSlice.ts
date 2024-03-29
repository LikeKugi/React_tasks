import { createAsyncThunk, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IApiPostSlice, IInitialState } from '../../types/slicesTypes/apiPostsSliceTypes';
import { IReactionAdded } from '../../types/slicesTypes/postsSliceTypes';
import axios, { AxiosError } from 'axios';
import { POSTS_URL } from '../../constants/urls';
import { IApiPost } from '../../types/IPosts';
import { sub } from 'date-fns';

const initialState: IInitialState = {
  posts: [],
  status: 'idle',
  error: null
};

export const fetchApiPosts = createAsyncThunk('apiPosts/fetchApiPosts', async () => {
  try {
    const response = await axios.get<IApiPost[]>(POSTS_URL);
    return [...response.data];
  } catch (e: unknown) {
    throw e as AxiosError;
  }
});

export const addNewApiPost = createAsyncThunk('apiPosts/addNewPost', async (initialPost: Omit<IApiPost, 'id'>) => {
  try {
    const response = await axios.post(POSTS_URL, initialPost);
    return response.data;
  } catch (e: unknown) {
    const err = e as AxiosError;
    return err.message;
  }
});

export const updatePost = createAsyncThunk('apiPosts/updatePost', async (initialPost: Omit<IApiPostSlice, 'date'>) => {
  const { id } = initialPost;
  try {
    const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
    return response.data;
  } catch (e: unknown) {
    const err = e as AxiosError;
    return err.message;
  }
});

export const deletePost = createAsyncThunk('apiPosts/deletePost', async (initialPost: IApiPostSlice) => {
  const { id } = initialPost;
  try {
    const response = await axios.delete(`${POSTS_URL}/${id}`);
    if (response.status === 200) return initialPost;
    return `${response.status}: ${response.statusText}`;
  } catch (e: unknown) {
    const err = e as AxiosError;
    return err.message;
  }
});

const apiPostsSlice = createSlice({
  name: 'apiPosts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<IApiPostSlice>) {
        state.posts.push(action.payload);
      },
      prepare(title: string, body: string, userId: number, postID?: string | number) {
        return {
          payload: {
            id: postID || nanoid(),
            title,
            body,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          }
        };
      },
    },
    reactionAdded: (state, action: PayloadAction<IReactionAdded>) => {
      const { postID, reaction } = action.payload;
      const existingPost = state.posts.find(post => post.id === postID);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApiPosts.fulfilled, (state, action: PayloadAction<IApiPost[], string, { arg: void, requestId: string, requestStatus: 'fulfilled' }, never>) => {
        state.status = 'succeeded';
        let minute = 1;
        const loadedPosts = action.payload.map(post => {
          const outPost: IApiPostSlice = {
            ...post,
            date: sub(new Date(), { minutes: minute += 1 }).toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          };
          return outPost;
        });
        state.posts = state.posts.concat(loadedPosts);
      })
      .addCase(fetchApiPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      .addCase(addNewApiPost.fulfilled, (state, action: PayloadAction<IApiPost>) => {
        const outPost: IApiPostSlice = {
          userId: Number(action.payload.userId),
          date: new Date().toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
          title: action.payload.title,
          body: action.payload.body,
          id: action.payload.id,
        };
        state.posts.push(outPost);
      })
      .addCase(updatePost.fulfilled, (state, action: PayloadAction<IApiPostSlice>) => {
        if (!action.payload?.id) {
          return;
        }
        const { id } = action.payload;
        const outObj = {
          ...action.payload,
          date: new Date().toISOString()
        };
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = [...posts, outObj];
      })
      .addCase(deletePost.fulfilled, (state, action: PayloadAction<IApiPostSlice | string>) => {
        if (typeof action.payload === 'string' || !action.payload?.id) {
          return;
        }
        const { id } = action.payload;
        const posts = state.posts.filter(post => post.id !== id);
        state.posts = [...posts];
      });
  }
});

export const selectAllApiPosts = (state: RootState) => state.apiPosts.posts;
export const getApiPostsLength = (state: RootState) => state.apiPosts.posts.length;
export const getApiPostsStatus = (state: RootState) => state.apiPosts.status;
export const getApiPostsError = (state: RootState) => state.apiPosts.error;
export const selectApiPostById = (state: RootState, postId: number | string) => state.apiPosts.posts.find(post => post.id === postId);
export const selectApiPostsByUser = (state: RootState, userId: number | string) => state.apiPosts.posts.filter(post => post.userId === userId);
export const { postAdded, reactionAdded } = apiPostsSlice.actions;
export const apiPostsReducer = apiPostsSlice.reducer;
