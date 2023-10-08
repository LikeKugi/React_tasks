import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from '@/Root';
import { configureStore } from '@/store';
import { RootState } from '@store/types/types';

const store: RootState = configureStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root store={store}/>
  </React.StrictMode>,
)
