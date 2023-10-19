import { RootState } from '@store/types/types';

export const STORAGE_KEY = 'td';

export const loadState = (): RootState | undefined => {
  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (!savedState) {
      return;
    }
    return JSON.parse(savedState);
  } catch {
    return;
  }
}

export const saveState = (state: RootState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    return true;
  } catch {
    return false;
  }
}
