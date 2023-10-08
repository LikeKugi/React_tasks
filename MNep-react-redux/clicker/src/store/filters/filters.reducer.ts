import { IAction } from '@store/types/types';
import { FiltersActions } from '@store/filters/filters.constants';


export const filters = (state='all', action: IAction) => {
  switch (action.type) {
    case FiltersActions.SET_FILTER:
      return action.payload;
    default:
      return state;
  }
}
