import { JSX } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectActiveFilter, setFilter } from '@/store/slices/filtersSlice';
import { FilterConstants } from '@/store/constants/FilterConstants';

const FilterTodo = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeFilter = useAppSelector(selectActiveFilter);

  const handleFilter = (val: FilterConstants) => dispatch(setFilter(val));

  return (
    <div>
      <button
        style={{
          backgroundColor: activeFilter === 'all' ? 'peru' : 'lightgray',
        }}
        onClick={() => handleFilter(FilterConstants.ALL)}>all</button>
      <button
        style={{
          backgroundColor: activeFilter === 'active' ? 'peru' : 'lightgray',
        }}
        onClick={() => handleFilter(FilterConstants.ACTIVE)}>active</button>
      <button
        style={{
          backgroundColor: activeFilter === 'completed' ? 'peru' : 'lightgray',
        }}
        onClick={() => handleFilter(FilterConstants.COMPLETED)}>completed</button>
    </div>
  );
};
export default FilterTodo;
