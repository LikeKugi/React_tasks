import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
import { IPost } from '../../types/IPosts';
import { RootState } from '../store';
import { IReactionAdded } from '../../types/slicesTypes/postsSliceTypes';

const initialState: IPost[] = [
  {
    id: 1,
    title: 'First',
    content: 'An important one',
    date: sub(new Date(), {minutes: 15}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: 'Second',
    content: 'Tester',
    date: sub(new Date(), {minutes: 10}).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action: PayloadAction<IPost>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userID: string | number) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userID,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          }
        }
      },
    },
    reactionAdded: (state, action: PayloadAction<IReactionAdded>) => {
      const {postID, reaction} = action.payload;
      const existingPost = state.find(post => post.id === postID);
      if (existingPost) {
        existingPost.reactions[reaction] += 1;
      }
    }
  }
});


export const selectAllPosts = (state: RootState) => state.posts;
export const { postAdded, reactionAdded } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
