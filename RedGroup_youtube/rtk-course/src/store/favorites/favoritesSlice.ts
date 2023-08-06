import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRecipe} from "../../types/receipe";

const initialState: IRecipe[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, action: PayloadAction<IRecipe>) => {
      const recipe = action.payload;

      if (state.some((r) => r.id === recipe.id)) {
        const idx = state.findIndex((r) => r.id === recipe.id);
        state.splice(idx, 1);
      } else {
        state.push(recipe)
      }

    }
  }
})

export const {actions, reducer} = favoritesSlice;
