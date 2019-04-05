import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillSearchComponent } from './skill-search/skill-search.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [SkillSearchComponent],
  exports: [SkillSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SkillSearchModule { }
