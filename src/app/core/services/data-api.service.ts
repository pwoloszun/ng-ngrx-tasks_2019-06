import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const delaysMap = {
  create: 1800,
  read: 800,
  update: 2400,
  delete: 2400,
};

@Injectable()
export class DataApiService<T extends { id: any }> {
  constructor(private http: HttpClient) {
  }

  find(id: any): Observable<T> {
    return this.http.get(this.getUrl())
      .pipe(
        map((o: Object) => <T>o),
        delay(delaysMap.read)
      );
  }

  update(entity: T): Observable<T> {
    return this.http.put(this.getSingleUrl(entity), entity)
      .pipe(
        map((o: Object) => <T>o),
        delay(delaysMap.update)
      );
  }

  remove(entity: T): Observable<any> {
    return this.http.delete(this.getSingleUrl(entity))
      .pipe(
        map(() => entity.id),
        delay(delaysMap.delete)
      );
  }

  create(entityParams: any): Observable<T> {
    return this.http.post(this.getUrl(), entityParams)
      .pipe(
        map((o: Object) => <T>o),
        delay(delaysMap.create)
      );
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.getUrl())
      .pipe(
        map((o: Object) => <T[]>o),
        delay(delaysMap.read)
      );
  }

  getUrl(): string {
    throw new Error('Abstract method');
  }

  getSingleUrl(entity: T): string {
    return `${this.getUrl()}/${entity.id}`;
  }

}
