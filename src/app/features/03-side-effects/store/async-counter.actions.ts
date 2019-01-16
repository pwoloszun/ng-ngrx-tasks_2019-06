import { Action } from '@ngrx/store';
import { AsyncCounterState } from './async-counter.reducer';
import { AsyncCounterModel } from '../async-counter.model';

export enum AsyncCounterActionTypes {
  FETCH_REQUEST = 'side-effects/async-counter/FETCH_REQUEST',
  FETCH_SUCCESS = 'side-effects/async-counter/FETCH_SUCCESS',
  FETCH_ERROR = 'side-effects/async-counter/FETCH_ERROR',

  INCREMENT_REQUEST = 'side-effects/async-counter/INCREMENT_REQUEST',
  INCREMENT_SUCCESS = 'side-effects/async-counter/INCREMENT_SUCCESS',

  DECREMENT = 'side-effects/async-counter/Decrement',
}

export class FetchRequestAction implements Action {
  readonly type = AsyncCounterActionTypes.FETCH_REQUEST;
}

export class FetchSuccessAction implements Action {
  readonly type = AsyncCounterActionTypes.FETCH_SUCCESS;

  constructor(public payload: AsyncCounterModel) {
  }
}

export class FetchErrorAction implements Action {
  readonly type = AsyncCounterActionTypes.FETCH_ERROR;

  constructor(public payload: Error) {
  }
}

export class IncrementRequestAction implements Action {
  readonly type = AsyncCounterActionTypes.INCREMENT_REQUEST;

  constructor(public payload: number) {
  }
}

export class IncrementSuccessAction implements Action {
  readonly type = AsyncCounterActionTypes.INCREMENT_SUCCESS;

  constructor(public payload: number) {
  }
}

export class DecrementAction implements Action {
  readonly type = AsyncCounterActionTypes.DECREMENT;

  constructor(public payload: number) {
  }
}

export type AsyncCounterActions
  = FetchRequestAction
  | FetchSuccessAction
  | FetchErrorAction
  | IncrementRequestAction
  | IncrementSuccessAction
  | DecrementAction;
