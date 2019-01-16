import {
  AsyncCounterActionTypes,
  AsyncCounterActions,
} from './async-counter.actions';
import { AsyncCounterModel } from '../async-counter.model';

// FEATURE name
export const featureName = 'asyncCounter';

// App STATE
export interface ApplicationState {
  asyncCounter: AsyncCounterState; // IMPORTANT: prop name must equal featureName
}

// Feature STATE
export interface AsyncCounterState {
  entity: AsyncCounterModel;
  isFetching: boolean;
  error: Error;
}

// initial feature state value
const initialState: AsyncCounterState = {
  entity: {
    id: null,
    value: null,
    updatedAt: null,
  },
  isFetching: false,
  error: null,
};

export function counterReducer(state: AsyncCounterState = initialState, action: AsyncCounterActions) {
  switch (action.type) {
    case AsyncCounterActionTypes.FETCH_REQUEST:
    case AsyncCounterActionTypes.INCREMENT_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      };
    }
    case AsyncCounterActionTypes.FETCH_SUCCESS: {
      return {
        entity: { ...action.payload },
        isFetching: false,
        error: null
      };
    }
    case AsyncCounterActionTypes.INCREMENT_SUCCESS: {
      return {
        entity: {
          ...state.entity,
          value: action.payload
        },
        isFetching: false,
        error: null
      };
    }
    // TODO: decrement
    default:
      return state;
  }
}
