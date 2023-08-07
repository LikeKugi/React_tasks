import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IRecipe} from "../../types/receipe";

const API_URL = 'http://localhost:3001/recipes'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['recipe'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query<IRecipe[], void>({
      query: () => '/',
      providesTags: () => [{
        type: 'recipe',
      }],
    }),
  }),
})

export const {useGetRecipesQuery} = api;
