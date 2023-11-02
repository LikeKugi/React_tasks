import { JSX } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { resetToDefault } from '@/store/actions/reset.action';

const ResetButton = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return <button onClick={() => dispatch(resetToDefault())}>Reset</button>;
};
export default ResetButton;
