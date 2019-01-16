import { createSelector } from '@ngrx/store';
import { ApplicationState, CounterState, featureName } from './counter.reducer';

export const selectFeature = (state: ApplicationState) => {
  return state[featureName];
};

export const selectCounterValue = createSelector(
  selectFeature,
  (state: CounterState) => {
    return state.value;
  }
);

export const selectCounterUpdatedAt = createSelector(
  selectFeature,
  (state: CounterState) => state.updatedAt
);

export const selectUpdatedAgo = createSelector(
  selectCounterUpdatedAt,
  (datetime: number): string => {
    const diffInSec = Math.ceil((Date.now() - datetime) / 1000);
    if (diffInSec > 60) {
      const diffInMins = Math.floor(diffInSec / 60);
      return `${diffInMins} minutes ago`;
    } else {
      return `${diffInSec} seconds ago`;
    }
  }
);
