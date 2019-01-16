import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import {
  CreateTodoError,
  CreateTodoRequest, CreateTodoSuccess,
  DeleteTodoError,
  DeleteTodoRequest, DeleteTodoSuccess,
  FetchAllTodosError,
  FetchAllTodosSuccess,
  TodosActions,
  TodosActionTypes, UpdateTodoError, UpdateTodoRequest, UpdateTodoSuccess,

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

  @Effect() deleteTodo$: Observable<TodosActions> = this.actions$.pipe(
    ofType(TodosActionTypes.DELETE_REQUEST),
    mergeMap((action: DeleteTodoRequest) => {
      const todo = action.payload;
      return this.todosService.remove(todo).pipe(
        map(() => new DeleteTodoSuccess(todo.id)),
        catchError((error) => of(new DeleteTodoError(error)))
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

  @Effect() updateTodo$: Observable<TodosActions> = this.actions$.pipe(
    ofType(TodosActionTypes.UPDATE_REQUEST),
    mergeMap((action: UpdateTodoRequest) => {
      return this.todosService.update(action.payload).pipe(
        map((updatedTodo) => normalizeTodos([updatedTodo])),
        map((normalized) => new UpdateTodoSuccess(normalized)),
        catchError((error) => of(new UpdateTodoError(error)))
      );
    })
  );

  constructor(private actions$: Actions,
              private todosService: TodosService) {
  }
}
