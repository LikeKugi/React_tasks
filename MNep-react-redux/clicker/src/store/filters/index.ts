import {FiltersActions, FiltersProp} from '@store/filters/filters.constants';
import { setFilter } from '@store/filters/filters.actions';
import { filters } from '@store/filters/filters.reducer';
import { selectActiveFilter } from '@store/filters/filters.selectors';

export {FiltersActions, setFilter, filters, selectActiveFilter, FiltersProp}
