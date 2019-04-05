import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [ProjectDetailsComponent],
  exports: [ProjectDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class ProjectDetailsModule { }
