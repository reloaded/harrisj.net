import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartupOpportunityComponent} from './startup-opportunity/startup-opportunity.component';

export const routes: Routes = [
  {
    path: '',
    component: StartupOpportunityComponent
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
export class StartupOpportunityRouterModule { }

