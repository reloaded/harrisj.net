import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineComponent } from './timeline/timeline.component';
import {TimelineRouterModule} from './timeline.route';
import {TimelineNavbarModule} from '../../domain/timeline-navbar/timeline-navbar.module';
import {ProjectDetailsModule} from '../../domain/project-details/project-details.module';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    TimelineRouterModule,
    TimelineNavbarModule,
    ProjectDetailsModule
  ]
})
export class TimelineModule { }
