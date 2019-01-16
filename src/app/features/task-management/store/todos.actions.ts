import { Action } from '@ngrx/store';

import { NormalizedTodos, TodosEntities } from './todos.reducer';
import { TodoModel } from '../services/todo.model';
import { TodoFormVm } from '../services/todo-form-vm';

export enum TodosActionTypes {
  FETCH_ALL_REQUEST = 'task-management/todos/FETCH_ALL_REQUEST',
  FETCH_ALL_SUCCESS = 'task-management/todos/FETCH_ALL_SUCCESS',
  FETCH_ALL_ERROR = 'task-management/todos/FETCH_ALL_ERROR', // TODO

  UPDATE_REQUEST = 'task-management/todos/UPDATE_REQUEST',
  UPDATE_SUCCESS = 'task-management/todos/UPDATE_SUCCESS',
  UPDATE_ERROR = 'task-management/todos/UPDATE_ERROR',

  CREATE_REQUEST = 'task-management/todos/CREATE_REQUEST',
  CREATE_SUCCESS = 'task-management/todos/CREATE_SUCCESS',
  CREATE_ERROR = 'task-management/todos/CREATE_ERROR',


  DELETE_REQUEST = 'task-management/todos/DELETE_REQUEST',
  DELETE_SUCCESS = 'task-management/todos/DELETE_SUCCESS',
  DELETE_ERROR = 'task-management/todos/DELETE_ERROR',

  START_EDITION = 'task-management/todos/START_EDITION',
  CANCEL_EDITION = 'task-management/todos/CANCEL_EDITION',

  // LOCAL_FILTER = 'task-management/todos/LOCAL_FILTER' // TODO
}

export class FetchAllTodosRequest implements Action {
  readonly type = TodosActionTypes.FETCH_ALL_REQUEST;
}

export class FetchAllTodosSuccess implements Action {
  readonly type = TodosActionTypes.FETCH_ALL_SUCCESS;

  constructor(public payload: NormalizedTodos) {
  }
}

export class FetchAllTodosError implements Action {
  readonly type = TodosActionTypes.FETCH_ALL_ERROR;

  constructor(public payload: Error) {
  }
}

export class CreateTodoRequest implements Action {
  readonly type = TodosActionTypes.CREATE_REQUEST;

  constructor(public payload: TodoFormVm) {
  }
}

export class CreateTodoSuccess implements Action {
  readonly type = TodosActionTypes.CREATE_SUCCESS;

  constructor(public payload: NormalizedTodos) {
  }
}

export class CreateTodoError implements Action {
  readonly type = TodosActionTypes.CREATE_ERROR;

  constructor(public payload: Error) {
  }
}

// TODO 1: Delete actions

// TODO 2a: Edit actions

// TODO 2b: Update actions

export type TodosActions = FetchAllTodosRequest
  | FetchAllTodosSuccess
  | FetchAllTodosError
// TODO 1: Delete actions
// TODO 2a: Edit actions
// TODO 2b: Update actions
  | CreateTodoRequest
  | CreateTodoSuccess
  | CreateTodoError;
