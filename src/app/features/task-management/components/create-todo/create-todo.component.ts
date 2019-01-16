import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TodoFormVm } from '../../services/todo-form-vm';

@Component({
  selector: 'nts-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  @Output() createItem = new EventEmitter<TodoFormVm>();

  form: FormGroup;
  title = new FormControl('', Validators.required);
  description = new FormControl('');

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      'title': this.title,
      'description': this.description,
    });
  }

  onSubmit() {
    this.createItem.emit({
      title: this.title.value,
      description: this.description.value
    });
    this.title.setValue('');
    this.description.setValue('');
  }

  ngOnInit() {
  }
}
