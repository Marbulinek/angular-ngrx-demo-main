import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const POST_STATE_NAME = 'counter';

const getCounterState = createFeatureSelector<CounterState>(POST_STATE_NAME);

const getCounter = createSelector(getCounterState, (state) => {
    return state.counter;
});

export default getCounter;