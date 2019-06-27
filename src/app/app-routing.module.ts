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
    path: 'rxjs-ui-tasks',
    loadChildren: () => import('./features/01-rxjs-ui-tasks/rxjs-ui-tasks.module').then(m => m.RxjsUiTasksModule),
  },
  {
    path: 'store-basics',
    loadChildren: () => import('./features/02-basics/basics.module').then(m => m.BasicsModule),
  },
  {
    path: 'side-effects',
    loadChildren: () => import('./features/03-side-effects/side-effects.module').then(m => m.SideEffectsModule),
  },
  {
    path: 'task-management',
    loadChildren: () => import('./features/task-management/task-management.module').then(m => m.TaskManagementModule),
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
