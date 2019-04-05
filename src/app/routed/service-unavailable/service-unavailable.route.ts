import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServiceUnavailableComponent} from './service-unavailable/service-unavailable.component';

export const routes: Routes = [
  {
    path: '',
    component: ServiceUnavailableComponent
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
export class ServiceUnavailableRouterModule { }

