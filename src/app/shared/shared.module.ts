import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StatusModalComponent } from './status-modal/status-modal.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CustomMaterialModule } from './custom-material/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
  ],
  declarations: [
    PageNotFoundComponent,
    StatusModalComponent,
    MainNavComponent,
  ],
  exports: [
    CustomMaterialModule,
    PageNotFoundComponent,
    StatusModalComponent,
    MainNavComponent,
  ],
})
export class SharedModule {
}
