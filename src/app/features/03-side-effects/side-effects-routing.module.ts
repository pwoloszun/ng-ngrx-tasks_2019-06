import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsyncCounterComponent } from './pages/async-counter/async-counter.component';

const routes: Routes = [
  {path: '', component: AsyncCounterComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SideEffectsRoutingModule {
}
