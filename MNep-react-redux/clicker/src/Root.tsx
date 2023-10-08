import { FC, JSX } from 'react';
import App from '@/App';
import { Provider } from 'react-redux';
import { RootState } from '@store/types/types';

interface IRootProps {
  store: RootState
}

const Root: FC<IRootProps> = ({store}): JSX.Element => {
  return (
    <Provider store={store}>
      <App/>
    </Provider>
  );
};
export default Root;
