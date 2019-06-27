import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

const delayInMs = 1800;

@Injectable()
export class SearchService {

  search$(query: string): Observable<string[]> {
    const results = [
      query,
      `Another ${query}`
    ];
    const count = Math.floor(Math.random() * 5);
    for (let i = 0; i < count; i++) {
      results.push(`${query} ${Math.random()}`);
    }
    return of(results).pipe(
      tap(() => console.log(`REQUEST ${query}`)),
      delay(delayInMs),
      tap(() => console.log(`RESPONSE ${query}, results count: ${results.length}`))
    );
  }
}
