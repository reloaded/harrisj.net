import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillTreeComponent } from './skill-tree/skill-tree.component';
import {TabsModule, TooltipModule} from 'ngx-bootstrap';
import {SkillSearchModule} from '../skill-search/skill-search.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SkillTreeComponent],
  exports: [SkillTreeComponent],
  imports: [
    CommonModule,
    SkillSearchModule,
    FormsModule,
    TabsModule.forRoot(),
    TooltipModule.forRoot()
  ]
})
export class SkillTreeModule { }
