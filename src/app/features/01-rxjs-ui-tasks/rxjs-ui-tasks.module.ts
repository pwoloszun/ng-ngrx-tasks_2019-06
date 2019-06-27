import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RxjsUiTasksRoutingModule } from './rxjs-ui-tasks-routing.module';
import { RegistrationService } from './services/registration.service';
import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { ComplexTaskComponent } from './pages/complex-task/complex-task.component';
import { ApiCallService } from './services/api-call.service';
import { SearchTaskComponent } from './pages/search-task/search-task.component';
import { SearchService } from './services/search.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxjsUiTasksRoutingModule,
  ],
  declarations: [
    RegistrationFormComponent,
    ComplexTaskComponent,
    SearchTaskComponent,
  ],
  providers: [
    RegistrationService,
    ApiCallService,
    SearchService,
  ],
})
export class RxjsUiTasksModule {
}
