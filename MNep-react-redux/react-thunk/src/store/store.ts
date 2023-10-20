import { applyMiddleware, createStore } from 'redux';
import { RootReducer } from '@/store/RootReducer';
import thunk from 'redux-thunk';

export const store = createStore(RootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
