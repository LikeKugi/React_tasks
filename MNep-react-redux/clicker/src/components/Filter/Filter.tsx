import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiltersProp, selectActiveFilter, setFilter } from '@store/filters';

const Filter = (): JSX.Element => {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  return (
    <div>
      <button onClick={() => dispatch(setFilter(FiltersProp.ALL))} disabled={activeFilter===FiltersProp.ALL}>All</button>
      <button onClick={() => dispatch(setFilter(FiltersProp.ACTIVE))} disabled={activeFilter===FiltersProp.ACTIVE}>Active</button>
      <button onClick={() => dispatch(setFilter(FiltersProp.COMPLETE))} disabled={activeFilter===FiltersProp.COMPLETE}>Completed</button>
    </div>
  );
};
export default Filter;
