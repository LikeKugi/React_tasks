import { IApiUser } from '../../types/IUsers';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios, { AxiosError } from 'axios';
import { USERS_URL } from '../../constants/urls';

const initialState: IApiUser[] = [];

export const fetchApiUsers = createAsyncThunk('apiUsers/fetchApiUsers', async () => {
  try {
    const response = await axios.get<IApiUser[]>(USERS_URL);
    return [...response.data];
  } catch (e: unknown) {
    throw e as AxiosError;
  }
});

const apiUsersSlice = createSlice({
  name: 'apiUsers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchApiUsers.fulfilled, (state, action) => {
      return action.payload;
    }).addCase(fetchApiUsers.rejected, () => []);
  }
});

export const apiUsersReducer = apiUsersSlice.reducer;

export const selectApiUserById = (state: RootState, userId: number) => state.apiUsers.find(user => user.id === userId);
export const selectAllApiUsers = (state: RootState) => state.apiUsers;
