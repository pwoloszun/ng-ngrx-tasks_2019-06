import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nts-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {

  mainMenuLinks = [
    { text: 'Dashboard', url: '/' },
    { text: 'RxJS UI: Form', url: '/rxjs-ui-tasks/registration-form' },
    { text: 'RxJS UI: Complex', url: '/rxjs-ui-tasks/complex' },
    { text: 'Store Basics', url: '/store-basics' },
    { text: 'Side Effects', url: '/side-effects' },
    { text: 'Task Management', url: '/task-management' },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

}
