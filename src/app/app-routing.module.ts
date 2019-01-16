import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashboardModule } from './features/dashboard/dashboard.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: function () {
      return DashboardModule;
    },
  },
  {
    path: 'store-basics',
    loadChildren: './features/02-basics/basics.module#BasicsModule',
  },
  {
    path: 'side-effects',
    loadChildren: './features/03-side-effects/side-effects.module#SideEffectsModule',
  },
  {
    path: 'task-management',
    loadChildren: './features/task-management/task-management.module#TaskManagementModule',
  },
  // {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only,
        // preloadingStrategy: PreloadAllModules,
      }
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
