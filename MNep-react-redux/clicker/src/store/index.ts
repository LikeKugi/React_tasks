import { createStore } from 'redux';
import { RootReducer } from '@store/reducer/RootReducer';

import {loadState, saveState} from '@/services';
import { RootMiddleware } from '@store/middleware/RootMiddleware';

export const configureStore = () => {
  const persistedState = loadState();
  const store =  createStore(RootReducer, persistedState, RootMiddleware);

  store.subscribe(() => saveState(store.getState().todos ));

  return store;
}
