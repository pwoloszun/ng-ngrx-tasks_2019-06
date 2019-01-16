import { createSelector } from '@ngrx/store';
import { ApplicationState, CounterState, featureName } from './counter.reducer';

export const selectFeature = (state: ApplicationState) => {
  return state[featureName];
};

// TODO 0 selectCounterValue

// TODO 3 selectCounterUpdatedAt

// TODO 3 selectUpdatedAgo
