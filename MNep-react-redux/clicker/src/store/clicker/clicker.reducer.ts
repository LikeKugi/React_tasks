import { IAction } from '@store/types/types';
import { ClickerActions } from '@store/clicker/clicker.constants';

export const counter = (state = 0, action: IAction) => {
  switch (action.type) {
    case ClickerActions.increment:
      return state + 1;
    case ClickerActions.decrement:
      return state - 1;
    case ClickerActions.reset:
      return 0;
    default:
      return state;
  }
};
