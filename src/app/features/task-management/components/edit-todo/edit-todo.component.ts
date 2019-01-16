import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TodoFormVm } from '../../services/todo-form-vm';
import { TodoModel } from '../../services/todo.model';

@Component({
  selector: 'nts-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnChanges {

  @Input() item: TodoModel;
  @Output() saveEdition = new EventEmitter<TodoFormVm>();
  @Output() cancelEdition = new EventEmitter<void>();

  form: FormGroup;
  title = new FormControl('', Validators.required);
  description = new FormControl('');

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'title': this.title,
      'description': this.description,
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.item && this.item) {
      this.title.setValue(this.item.title);
      this.description.setValue(this.item.description);
    }
  }

  saveClick() {
    this.saveEdition.emit({
      title: this.title.value,
      description: this.description.value
    });
  }

  cancelClick() {
    this.cancelEdition.emit();
  }

}
