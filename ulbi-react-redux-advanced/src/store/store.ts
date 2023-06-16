import {combineReducers, configureStore} from "@reduxjs/toolkit";
import baseUserReducer from "./reducers/BaseUserSlice";
import userReducer from './reducers/UserSlice';
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
  baseUserReducer,
  userReducer,
  [postAPI.reducerPath]: postAPI.reducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
