import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import {
  counterReducer,
  featureName,
} from './store/counter.reducer';
import { CounterComponent } from './pages/counter/counter.component';
import { BasicsRoutingModule } from './basics-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, counterReducer),
    BasicsRoutingModule,
  ],
  declarations: [
    CounterComponent,
  ]
})
export class BasicsModule {
}
