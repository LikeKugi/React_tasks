import { RootState } from '@store/types/types';

export const selectCounter = (store: RootState) => store.counter;
