import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MentorComponent} from './mentor/mentor.component';
import {ScheduleComponent} from './schedule/schedule.component';
export const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: '',
    component: MentorComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MentorRouterModule { }

