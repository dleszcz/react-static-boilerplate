import {
  compose,
  createStore,
} from 'redux';

import rootReducer from '../redux';

export const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState
  );

  store.close = () => store.dispatch();

  return store;
};
