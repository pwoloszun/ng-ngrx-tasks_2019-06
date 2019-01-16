import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DecrementAction, IncrementAction, ResetAction } from '../../store/counter.actions';
import { ApplicationState } from '../../store/counter.reducer';
import { selectCounterValue, selectUpdatedAgo } from '../../store/counter.selectors';
import { fullObserver } from '../../../../utils';

@Component({
  selector: 'nts-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterValue$: Observable<number>;
  updatedAgo$: Observable<string>;

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    // this.mySubscription = this.store.subscribe(fullObserver('STORE'));
    this.counterValue$ = this.store.pipe(
      select(selectCounterValue)
    );
    // counter values
    // this.counterValue$.subscribe(fullObserver('counter'));
    // updated ago
    this.updatedAgo$ = this.store.pipe(
      select(selectUpdatedAgo)
    );
  }

  increment() {
    this.store.dispatch(new IncrementAction(5));
  }

  decrement() {
    this.store.dispatch(new DecrementAction(2));
  }

  reset() {
    this.store.dispatch(new ResetAction());
  }
}
