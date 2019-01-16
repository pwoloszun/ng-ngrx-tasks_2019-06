import { Component, OnInit } from '@angular/core';
import {
  retry,
  catchError,
  take, tap, finalize,
} from 'rxjs/operators';
import { BehaviorSubject, timer } from 'rxjs';

import { ApiCallService, MyHttpError } from '../../services/api-call.service';
import { fullObserver } from '../../../../utils';

@Component({
  selector: 'nts-complex-task',
  templateUrl: './complex-task.component.html',
  styleUrls: ['./complex-task.component.css']
})
export class ComplexTaskComponent implements OnInit {
  showErrorModal$ = new BehaviorSubject<boolean>(false);
  modalText$ = new BehaviorSubject<string>(null);

  constructor(private apiCallService: ApiCallService) {
  }

  ngOnInit() {
  }

  fetchData() {
    // TODO
    // send unsuccessful request to '/user/data'
    // retry exactly 2 times
    // then catch error AND:
    //    1) render modal for 5 sec
    //    2) log error using successful request to '/log/error'
    // log everything on console
  }

  private renderModal(text: string, durationInS: number) {
    // TODO
  }

}
