import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleMentorSessionComponent } from './schedule-mentor-session/schedule-mentor-session.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';

@NgModule({
  exports: [ScheduleMentorSessionComponent],
  declarations: [ScheduleMentorSessionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class ScheduleMentorSessionModule { }
