import {api} from "./api";
import {IRecipeClear} from "../../types/receipe";

export const recipeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createRecipe: builder.mutation({
      query: (recipe: IRecipeClear) => ({
        body: recipe,
        url: '/',
        method: "POST",
      }),
      invalidatesTags: () => [{
        type: 'recipe',
      }],
    }),
  }),
})

export const {useCreateRecipeMutation} = recipeApi;
