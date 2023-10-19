import { applyMiddleware } from 'redux';
import { clickerTrigger } from '@store/clicker/clicker.middleware';

const middlewares = [clickerTrigger]
export const RootMiddleware = applyMiddleware(...middlewares);
