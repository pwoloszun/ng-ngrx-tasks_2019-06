import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reduce } from 'lodash';

import { TodoModel } from '../../services/todo.model';
import { TodoFormVm } from '../../services/todo-form-vm';
import { TransiotionMap, TaskManagementState } from '../../store/todos.reducer';
import {
  CreateTodoRequest,
  FetchAllTodosRequest,
} from '../../store/todos.actions';
import {
  selectAllTodos,
  selectListIsFetching,
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
  savingTodosMessages$: Observable<string[]>;

  constructor(private store: Store<TaskManagementState>) {
    this.todos$ = this.store.pipe(
      select(selectAllTodos)
    );
    this.isFetching$ = this.store.pipe(
      select(selectListIsFetching)
    );

    // TODO 1: isDeletingTodos$

    // TODO 2: isEditingTodos$

    // TODO 3: savingTodosMessages$
  }

  ngOnInit() {
    this.store.dispatch(new FetchAllTodosRequest());
  }

  editTodo(todo: TodoModel) {
    // TODO 2a
  }

  cancelEditTodo(todo: TodoModel) {
    // TODO 2a
  }

  deleteTodo(todo: TodoModel) {
    // TODO 1
  }

  updateTodo(todo: TodoModel) {
    // TODO 2b
  }

  createTodo(todoVm: TodoFormVm) {
    this.store.dispatch(new CreateTodoRequest(todoVm));
  }

}
