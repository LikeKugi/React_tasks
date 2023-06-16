import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../types/IPost";

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchALlPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: `/posts`,
        params: {
          _limit: limit
        }
      }),
      providesTags: result => ['Post'],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (arg) => ({
        url: '/posts',
        method: 'POST',
        body: arg
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (arg) => ({
        url: `/posts/${arg.id}`,
        method: 'PUT',
        body: arg
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (arg) => ({
        url: `/posts/${arg.id}`,
        method: 'DELETE',
        body: arg
      }),
      invalidatesTags: ['Post'],
    }),
  })
})
