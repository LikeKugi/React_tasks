import { createStore } from 'redux';
import { RootReducer } from '@store/reducer/RootReducer';

import {loadState, saveState} from '@/services';

export const configureStore = () => {
  const persistedState = loadState();
  const store =  createStore(RootReducer, persistedState);

  store.subscribe(() => saveState(store.getState().todos ));

  return store;
}
