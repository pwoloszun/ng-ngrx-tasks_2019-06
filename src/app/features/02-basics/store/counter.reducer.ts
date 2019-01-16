import {
  CounterActionTypes,
  CounterActions,
} from './counter.actions';

// FEATURE name
export const featureName = 'myCounter';

// App STATE
export interface ApplicationState {
  myCounter: CounterState; // IMPORTANT: prop name must equal featureName
}

// Feature STATE
export interface CounterState {
  value: number;
  updatedAt: number;
}

// initial feature state value
const initialState: CounterState = {
  value: 0,
  updatedAt: null,
};

export function counterReducer(state: CounterState = initialState, action: CounterActions) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT: {
      const {value, updatedAt} = action.payload;
      return {
        value: state.value + value,
        updatedAt
      };
    }
    // TODO 2 DECREMENT
    // TODO 1 RESET
    default:
      return state;
  }
}
