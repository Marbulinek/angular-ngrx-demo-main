import { customIncrement, decrement, increment, reset } from '../counter.actions';
import { counterReducer } from '../counter.reducer';
import { initialState } from '../counter.state';

describe('CounterReducer', () => {
  it('should return the default state', () => {
    const action = {};
    const state = counterReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('should return counter + 1', () => {
    const state = counterReducer(initialState, increment);

    expect(state.counter).toBe(1);
  });

  it('should return counter - 1', () => {
    const state = counterReducer(initialState, decrement);
    
    expect(state.counter).toBe(-1);
  });

  it('should reset the count', () => {
    const currentState = {counter: 5};
    const state = counterReducer(currentState, reset);

    expect(state.counter).toBe(0);
  });

  it('should increment count by custom value', () => {
    const currentState = {counter: 3};
    const state = counterReducer(currentState, customIncrement({count: 5}));

    expect(state.counter).toBe(8);
  });
});
