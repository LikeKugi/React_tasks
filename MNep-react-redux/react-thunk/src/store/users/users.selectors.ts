import { RootState } from '@/store/store';

export const selectAllUsers = (store: RootState) => store.users;
