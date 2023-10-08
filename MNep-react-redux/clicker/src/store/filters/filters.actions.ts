import { FiltersActions } from '@store/filters/filters.constants';
import { IAction } from '@store/types/types';

export const setFilter = (payload: string): IAction => ({
  type: FiltersActions.SET_FILTER,
  payload
})
