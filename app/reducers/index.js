import { combineReducers } from 'redux';
import { reducer as counterReducer } from './counter';

export default combineReducers({
    counterReducer,
});
