import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { AsyncCounterModel } from '../async-counter.model';

const countersUrl = '/api/counters';
const id = 'asyncCounter';
const asyncCounterUrl = `${countersUrl}/${id}`;

const fakeDelay = 1200;

@Injectable()
export class AsyncCounterService {

  constructor(private http: HttpClient) {
  }

  find(): Observable<AsyncCounterModel> {
    return this.http.get<AsyncCounterModel>(asyncCounterUrl)
      .pipe(delay(fakeDelay));
  }

  update(entity: AsyncCounterModel): Observable<Object> {
    return this.http.put(asyncCounterUrl, entity)
      .pipe(delay(fakeDelay));
  }

  create(entity: AsyncCounterModel): Observable<Object> {
    return this.http.post(asyncCounterUrl, entity)
      .pipe(delay(fakeDelay));
  }
}
