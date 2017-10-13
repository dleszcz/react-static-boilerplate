
import { keys } from '../keys';

export const counterIncrement = value => ({
  type: keys.COUNTER_INCREMENT,
  value,
});

export const counterDecrement = value => ({
  type: keys.COUNTER_DECREMENT,
  value,
});
