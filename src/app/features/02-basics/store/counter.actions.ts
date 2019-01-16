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

// TODO 2 DecrementAction

// TODO 1 ResetAction

export type CounterActions
  = IncrementAction; // TODO 1 & 2
