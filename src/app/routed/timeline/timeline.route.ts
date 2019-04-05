import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TimelineComponent} from './timeline/timeline.component';
export const routes: Routes = [
  {
    path: ':project',
    component: TimelineComponent
  },
  {
    path: '**',
    component: TimelineComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TimelineRouterModule { }

