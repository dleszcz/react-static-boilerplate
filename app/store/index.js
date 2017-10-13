import {
  compose,
  createStore,
} from 'redux';

import rootReducer from '../reducers';

export const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer, 
    initialState);
  
  store.close = () => store.dispatch();
  
  return store;
};
