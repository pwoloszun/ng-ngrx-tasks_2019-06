import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TodosEffects } from './store/todos.effects';
import { featureName, todosReducer } from './store/todos.reducer';
import { TodosService } from './services/todos.service';
import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskManagementComponent } from './pages/task-management/task-management.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, todosReducer),
    EffectsModule.forFeature([TodosEffects]),
    TaskManagementRoutingModule,
    SharedModule,
  ],
  declarations: [
    TaskManagementComponent,
    TodoListComponent,
    CreateTodoComponent,
    EditTodoComponent,
  ],

  providers: [
    TodosService,
  ],
})
export class TaskManagementModule {
}
