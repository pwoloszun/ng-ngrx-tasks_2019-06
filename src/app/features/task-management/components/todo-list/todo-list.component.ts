import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoModel } from '../../services/todo.model';
import { TransiotionMap } from '../../store/todos.reducer';
import { TodoFormVm } from '../../services/todo-form-vm';

@Component({
  selector: 'nts-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() items: TodoModel[];
  @Input() isFetching: boolean;
  @Input() isDeletingItems: TransiotionMap;
  @Input() isEditingItems: TransiotionMap;

  @Output() editItem = new EventEmitter<TodoModel>();
  @Output() deleteItem = new EventEmitter<TodoModel>();
  @Output() updateItem = new EventEmitter<TodoModel>();
  @Output() cancelEditItem = new EventEmitter<TodoModel>();

  editClick(todo: TodoModel) {
    this.editItem.emit(todo);
  }

  removeClick(todo: TodoModel) {
    this.deleteItem.emit(todo);
  }

  updateClick(todo: TodoModel, params: TodoFormVm) {
    const updatedTodo = {...todo, ...params};
    this.updateItem.emit(updatedTodo);
  }

  cancelEditionClick(todo: TodoModel) {
    this.cancelEditItem.emit(todo);
  }

  itemState(item) {
    if (this.isDeletingItems && this.isDeletingItems[item.id]) {
      return 'DELETING';
    } else if (this.isEditingItems && this.isEditingItems[item.id]) {
      return 'EDITING';
    } else {
      return 'SHOW';
    }
  }

}
