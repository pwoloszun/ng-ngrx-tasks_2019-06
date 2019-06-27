import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationFormComponent } from './pages/registration-form/registration-form.component';
import { ComplexTaskComponent } from './pages/complex-task/complex-task.component';
import { SearchTaskComponent } from './pages/search-task/search-task.component';

const routes: Routes = [
  { path: 'search-task', component: SearchTaskComponent },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'complex', component: ComplexTaskComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RxjsUiTasksRoutingModule {
}
