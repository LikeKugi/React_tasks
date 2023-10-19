import { IAction, RootState } from '@store/types/types';
import { ClickerActions } from '@store/clicker/clicker.constants';

export const clickerTrigger = (store: RootState) => (next: (arg: IAction) => void) => (action: IAction) => {
  console.log(store.getState())
  if (action.type === ClickerActions.increment) {
    console.log('increment');
  } else if (action.type === ClickerActions.reset) {
    console.log('reset');
  } else if (action.type === ClickerActions.decrement) {
    console.log('decrement');
  }
  next(action);
}
