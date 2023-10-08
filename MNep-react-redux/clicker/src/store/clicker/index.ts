import {increment, reset, decrement} from '@store/clicker/clicker.actions';
import {counter} from '@store/clicker/clicker.reducer';
import {ClickerActions} from '@store/clicker/clicker.constants';
import { selectCounter } from '@store/clicker/clicker.selectors';

export {increment, reset, decrement, counter, ClickerActions, selectCounter}
