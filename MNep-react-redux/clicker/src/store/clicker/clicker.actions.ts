import { ClickerActions } from '@store/clicker/clicker.constants';
import { IAction } from '@store/types/types';

export const increment: IAction = { type: ClickerActions.increment };
export const decrement: IAction = { type: ClickerActions.decrement };
export const reset: IAction = { type: ClickerActions.reset };
