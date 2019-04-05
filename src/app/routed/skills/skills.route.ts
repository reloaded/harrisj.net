import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SkillsComponent} from './skills/skills.component';
export const routes: Routes = [
  {
    path: ':category',
    component: SkillsComponent
  },
  {
    path: '**',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SkillsRouterModule { }

