import { createStore, compose } from 'redux';
import setLoginReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(setLoginReducer, composeEnhancers());
