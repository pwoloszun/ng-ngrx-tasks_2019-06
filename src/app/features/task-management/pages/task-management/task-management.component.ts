import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reduce } from 'lodash';

import { TodoModel } from '../../services/todo.model';
import { TodoFormVm } from '../../services/todo-form-vm';
import { TransiotionMap, TaskManagementState } from '../../store/todos.reducer';
import {
  CreateTodoRequest,
  DeleteTodoRequest,
  StartTodoEdition,
  FetchAllTodosRequest,
  CancelTodoEdition,
  UpdateTodoRequest,
} from '../../store/todos.actions';
import {
  selectAllTodos,
  selectIsDeletingTodos,
  selectIsEditingTodos, selectIsSavingTodos,
  selectListIsFetching, selectSavingTodos,
} from '../../store/todos.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nts-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {

  todos$: Observable<TodoModel[]>;
  isFetching$: Observable<boolean>;
  isDeletingTodos$: Observable<TransiotionMap>;
  isEditingTodos$: Observable<TransiotionMap>;
  isSavingTodos$: Observable<TransiotionMap>;
  savingTodosMessages$: Observable<string[]>;

  constructor(private store: Store<TaskManagementState>) {
    this.todos$ = this.store.pipe(
      select(selectAllTodos)
    );
    this.isFetching$ = this.store.pipe(
      select(selectListIsFetching)
    );
    this.isDeletingTodos$ = this.store.pipe(
      select(selectIsDeletingTodos)
    );
    this.isEditingTodos$ = this.store.pipe(
      select(selectIsEditingTodos)
    );
    this.isSavingTodos$ = this.store.pipe(
      select(selectIsSavingTodos)
    );
    this.savingTodosMessages$ = this.store.pipe(
      select(selectSavingTodos),
      map((todos: TodoModel[]) => {
        return todos.map((todo) => `Saving ${todo.title}...`);
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(new FetchAllTodosRequest());
  }

  editTodo(todo: TodoModel) {
    this.store.dispatch(new StartTodoEdition(todo));
  }

  cancelEditTodo(todo: TodoModel) {
    this.store.dispatch(new CancelTodoEdition(todo));
  }

  deleteTodo(todo: TodoModel) {
    this.store.dispatch(new DeleteTodoRequest(todo));
  }

  updateTodo(todo: TodoModel) {
    this.store.dispatch(new UpdateTodoRequest(todo));
  }

  createTodo(todoVm: TodoFormVm) {
    this.store.dispatch(new CreateTodoRequest(todoVm));
  }

}
