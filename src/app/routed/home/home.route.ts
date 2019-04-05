import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
export class HomeRouterModule { }

