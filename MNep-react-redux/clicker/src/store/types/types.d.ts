import { store } from '@/store';
import { ClickerActions } from '@store/clicker/clicker.constants';
import { TodosActions } from '@store/todos/todos.constants';
import { FiltersActions } from '@store/filters';

interface IAction {
  type: ClickerActions | TodosActions | FiltersActions;
  payload?: string | number
}

interface ITodo {
  id: number,
  process: boolean,
  description: string
}

type RootState = ReturnType<typeof store.getState>
