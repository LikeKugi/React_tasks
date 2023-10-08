import { RootState } from '@store/types/types';

export const selectActiveFilter = (store: RootState) => store.filters
