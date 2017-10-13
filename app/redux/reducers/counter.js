import { keys } from '../keys';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
    console.log('action', action.type);
    console.log('state', state);

    switch (action.type) {
    case keys.COUNTER_INCREMENT:
        return { ...state, counter: state.counter + 1 };
    case keys.COUNTER_DECREMENT:
        return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export {
  initialState,
  reducer,
};
