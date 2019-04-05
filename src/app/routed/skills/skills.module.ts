import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import {SkillsRouterModule} from './skills.route';
import {SkillTreeModule} from '../../domain/skill-tree/skill-tree.module';

@NgModule({
  declarations: [SkillsComponent],
  imports: [
    CommonModule,
    SkillsRouterModule,
    SkillTreeModule,
  ]
})
export class SkillsModule { }
