import {IUser} from "../../types/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IUserState {
  users: IUser[],
  isLoading: boolean,
  error: string,
  count: number
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
}

export const baseUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    }
  }
})

export default baseUserSlice.reducer;
