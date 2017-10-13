import { combineReducers } from 'redux';
import { reducer as counterReducer } from './reducers/counter';

export default combineReducers({
    counterReducer,
});
