import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import {
  CreateTodoError,
  CreateTodoRequest, CreateTodoSuccess,
  FetchAllTodosError,
  FetchAllTodosSuccess,
  TodosActions,
  TodosActionTypes,

} from './todos.actions';
import { NormalizedTodos, TodosEntities } from './todos.reducer';
import { normalizeTodos } from './normalize-todos';
import { TodosService } from '../services/todos.service';
import { TodoModel } from '../services/todo.model';


@Injectable()
export class TodosEffects {

  @Effect() fetchAll$: Observable<TodosActions> = this.actions$.pipe(
    ofType(TodosActionTypes.FETCH_ALL_REQUEST),
    mergeMap((action) => {
      return this.todosService.getAll().pipe(
        // If successful:
        // normalize data: TODO: move to service
        map((todos: TodoModel[]) => normalizeTodos(todos)),
        // dispatch success action with result
        map((normalizedTodosData: NormalizedTodos) => new FetchAllTodosSuccess(normalizedTodosData)),
        // If request fails, dispatch failed action
        catchError((error) => of(new FetchAllTodosError(error)))
      );
    })
  );

  @Effect() createTodo$: Observable<TodosActions> = this.actions$.pipe(
    ofType(TodosActionTypes.CREATE_REQUEST),
    mergeMap((action: CreateTodoRequest) => {
      return this.todosService.create(action.payload).pipe(
        map((createdTodo) => normalizeTodos([createdTodo])),
        map((normalized) => new CreateTodoSuccess(normalized)),
        catchError((error) => of(new CreateTodoError(error)))
      );
    })
  );

  // TODO 1: deleteTodo$ effect

  // TODO 2b: updateTodo$ effect

  constructor(private actions$: Actions,
              private todosService: TodosService) {
  }
}
