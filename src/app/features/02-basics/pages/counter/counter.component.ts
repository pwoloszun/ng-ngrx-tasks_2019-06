import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { IncrementAction} from '../../store/counter.actions';
import { ApplicationState } from '../../store/counter.reducer';
import { fullObserver } from '../../../../utils';

@Component({
  selector: 'nts-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counterValue$: Observable<number>;
  updatedAgo$: Observable<number>;

  // mySubscription: Subscription;

  constructor(private store: Store<ApplicationState>) {
  }

  ngOnInit() {
    // this.mySubscription = this.store.subscribe(fullObserver('STORE'));
    // TODO 0 counterValue$

    // TODO 3 updatedAgo$
  }

  increment() {
    this.store.dispatch(new IncrementAction(5));
  }

  decrement() {
    // TODO 2
  }

  reset() {
    // TODO 1
  }
}
