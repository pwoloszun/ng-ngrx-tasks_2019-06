import { Action } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export enum CounterActionTypes {
  INCREMENT = 'basics/counter/Increment',
  DECREMENT = 'basics/counter/Decrement',
  RESET = 'basics/counter/Reset'
}

export class IncrementAction implements Action {
  readonly type = CounterActionTypes.INCREMENT;
  payload: CounterState;

  constructor(value: number) {
    this.payload = {
      value,
      updatedAt: Date.now()
    };
  }
}

export class DecrementAction implements Action {
  readonly type = CounterActionTypes.DECREMENT;

  constructor(public payload: number) {
  }
}

export class ResetAction implements Action {
  readonly type = CounterActionTypes.RESET;
}

export type CounterActions
  = IncrementAction
  | DecrementAction
  | ResetAction;
