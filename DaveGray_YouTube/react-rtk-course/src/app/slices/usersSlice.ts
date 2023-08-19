import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/IUsers';
import { RootState } from '../store';

const initialState: IUser[] = [
  {id: '1', name: 'John Doe'},
  {id: '2', name: 'Joana Doherty'},
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export const usersReducer = usersSlice.reducer;

export const selectAllUsers = (state: RootState) => state.users;
