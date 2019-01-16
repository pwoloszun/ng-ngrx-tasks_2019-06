import { createSelector } from '@ngrx/store';
import { ApplicationState, AsyncCounterState, featureName } from './async-counter.reducer';
import { AsyncCounterModel } from '../async-counter.model';

export const selectFeature = (state: ApplicationState) => {
  return state[featureName];
};

export const selectCounterEntity = createSelector(
  selectFeature,
  (state: AsyncCounterState) => {
    return state.entity;
  }
);

export const selectCounterValue = createSelector(
  selectCounterEntity,
  (state: AsyncCounterModel) => {
    return state.value;
  }
);

export const selectCounterUpdatedAt = createSelector(
  selectCounterEntity,
  (state: AsyncCounterModel) => state.updatedAt
);

export const selectCounterIsFetching = createSelector(
  selectFeature,
  (state: AsyncCounterState) => state.isFetching
);

export const selectCounterError = createSelector(
  selectFeature,
  (state: AsyncCounterState) => state.error
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
