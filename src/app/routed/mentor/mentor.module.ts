import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor/mentor.component';
import {MentorRouterModule} from './mentor.route';
import { ScheduleComponent } from './schedule/schedule.component';
import {ScheduleMentorSessionModule} from '../../domain/schedule-mentor-session/schedule-mentor-session.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [MentorComponent, ScheduleComponent],
  imports: [
    CommonModule,
    ScheduleMentorSessionModule,
    MentorRouterModule,
    HttpClientModule,
  ]
})
export class MentorModule { }
