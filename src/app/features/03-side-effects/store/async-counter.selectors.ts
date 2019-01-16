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

// TODO selectCounterError
