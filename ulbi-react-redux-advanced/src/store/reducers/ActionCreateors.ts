import axios, {AxiosError} from "axios";
import {IUser} from "../../types/IUser";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_ , thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      return response.data
    } catch (e: unknown) {
      const err = e as Error;
      return thunkAPI.rejectWithValue(err.message)
    }

  }
)
