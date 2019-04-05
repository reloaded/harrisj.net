import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineNavbarComponent } from './timeline-navbar/timeline-navbar.component';
import { TooltipModule} from 'ngx-bootstrap';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

@NgModule({
  declarations: [TimelineNavbarComponent],
  exports: [TimelineNavbarComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    PerfectScrollbarModule
  ]
})
export class TimelineNavbarModule { }
