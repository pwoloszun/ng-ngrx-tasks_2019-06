import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  ofType,
} from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import {
  map,
  mergeMap,
  catchError,
  take,
} from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import {
  AsyncCounterActions,
  AsyncCounterActionTypes,
  FetchErrorAction,
  FetchSuccessAction,
  IncrementRequestAction,
  IncrementSuccessAction,
} from './async-counter.actions';
import { ApplicationState } from './async-counter.reducer';
import { selectCounterEntity } from './async-counter.selectors';
import { AsyncCounterModel } from '../async-counter.model';
import { AsyncCounterService } from '../services/async-counter.service';

@Injectable()
export class AsyncCounterEffects {

  // Listen for the 'AsyncCounterActionTypes.FETCH_REQUEST' action
  @Effect() fetch$: Observable<AsyncCounterActions> = this.actions$.pipe(
    ofType(AsyncCounterActionTypes.FETCH_REQUEST),
    mergeMap((action) => {
      return this.asyncCounterService.find().pipe(
        // If successful, dispatch success action with result
        map((data) => new FetchSuccessAction(data)),
        // If request fails, dispatch failed action
        catchError((error) => of(new FetchErrorAction(new Error(error))))
      );
    })
  );

  @Effect() increment$: Observable<AsyncCounterActions> = this.actions$.pipe(
    ofType(AsyncCounterActionTypes.INCREMENT_REQUEST),
    map(((action: IncrementRequestAction) => action.payload)),
    mergeMap((incValue: number) => {
      return this.latestCounter$()
        .pipe(
          mergeMap((counter: AsyncCounterModel) => {
            const toUpdate = {
              ...counter,
              value: counter.value + incValue
            };
            return this.updateAsyncCounterAction$(toUpdate);
          })
        );
    })
  );

  constructor(private actions$: Actions,
              private asyncCounterService: AsyncCounterService,
              private store: Store<ApplicationState>) {
  }

  private updateAsyncCounterAction$(toUpdate: AsyncCounterModel) {
    return this.asyncCounterService.update(toUpdate)
      .pipe(
        // If successful, dispatch success action with result
        map((updated: AsyncCounterModel) => {
          return new IncrementSuccessAction(updated.value);
        }),
        // If request fails, dispatch failed action
        catchError((error) => of(new FetchErrorAction(new Error(error)))) // TODO
      );
  }

  private latestCounter$(): Observable<AsyncCounterModel> {
    return this.store
      .pipe(
        select(selectCounterEntity),
        take(1)
      );
  }
}
