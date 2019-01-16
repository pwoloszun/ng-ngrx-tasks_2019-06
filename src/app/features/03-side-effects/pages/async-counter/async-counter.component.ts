import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { selectCounterIsFetching, selectCounterValue } from '../../store/async-counter.selectors';
import {
  FetchRequestAction,
  IncrementRequestAction,
} from '../../store/async-counter.actions';
import { ApplicationState } from '../../store/async-counter.reducer';

@Component({
  selector: 'nts-async-counter',
  templateUrl: './async-counter.component.html',
  styleUrls: ['./async-counter.component.css']
})
export class AsyncCounterComponent implements OnInit {
  counterValue$: Observable<number>;
  isFetching$: Observable<boolean>;

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    this.counterValue$ = this.store
      .pipe(select(selectCounterValue));

    this.isFetching$ = this.store
      .pipe(select(selectCounterIsFetching));

    this.store.dispatch(new FetchRequestAction());
  }

  increment() {
    this.store.dispatch(new IncrementRequestAction(11));
  }

  decrement() {
    // this.store.dispatch(new DecrementAction(4));
  }

}
