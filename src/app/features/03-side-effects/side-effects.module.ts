import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SideEffectsRoutingModule } from './side-effects-routing.module';
import {
  counterReducer,
  featureName,
} from './store/async-counter.reducer';
import { AsyncCounterEffects } from './store/async-counter.effects';
import { AsyncCounterComponent } from './pages/async-counter/async-counter.component';
import { AsyncCounterService } from './services/async-counter.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(featureName, counterReducer),
    EffectsModule.forFeature([AsyncCounterEffects]),
    SideEffectsRoutingModule,
  ],
  declarations: [
    AsyncCounterComponent,
  ],
  providers: [
    AsyncCounterService,
  ],
})
export class SideEffectsModule {
}
