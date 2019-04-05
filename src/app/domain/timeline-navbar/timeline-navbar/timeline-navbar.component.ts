import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {TimelineNavBarModule} from '../index';
import TimelineEvent = TimelineNavBarModule.TimelineEvent;

@Component({
  selector: 'app-timeline-navbar',
  templateUrl: './timeline-navbar.component.html',
  styleUrls: ['./timeline-navbar.component.scss']
})
export class TimelineNavbarComponent implements OnInit {
  @Input() vertical = false;

  @Input() defaultSequenceNumber: number;

  @Input() set events(events: {
    sequenceNumber: number;
    startDate: moment.Moment;
    endDate: moment.Moment;
    name: string
  }[]) {
    this.timelineEvents.length = 0;

    if (events.length) {

      this.timelineEvents = events.map(e => {
        return {
          name: e.name,
          sequenceNumber: e.sequenceNumber,
          startDate: e.startDate,
          endDate: e.endDate,
          duration: e.endDate.diff(e.startDate, 'days'),
          width: 0,
        };
      });

      this.timelineEvents.sort((a, b) => {
        if (a.sequenceNumber < b.sequenceNumber) {
          return -1;
        }
        if (a.sequenceNumber === b.sequenceNumber) {
          return 0;
        }
        if (a.sequenceNumber > b.sequenceNumber) {
          return 1;
        }
      });

      const nowTimestamp = moment().unix();
      const firstEventTimestamp = this.timelineEvents[0].startDate.unix();
      const totalTimeSpent = nowTimestamp - firstEventTimestamp;
      let totalTimelineWidth = 0;

      let longestEvent: {sequenceNumber: number, duration: number} = null;

      this.timelineEvents.forEach((e) => {
        const eventWidth = Math.round(((e.endDate.unix() - e.startDate.unix()) / totalTimeSpent) * 100);
        totalTimelineWidth += eventWidth;

        e.width = eventWidth;

        if (!longestEvent || longestEvent.duration < e.duration) {
          longestEvent = {
            sequenceNumber: e.sequenceNumber,
            duration: e.duration
          };
        }
      });

      if (totalTimelineWidth < 100) {
        const event = this.timelineEvents.find((e) => e.sequenceNumber === longestEvent.sequenceNumber);
        event.width += 100 - totalTimelineWidth;
      }

      this.selectEvent(this.timelineEvents[0]);
    }
  }

  @Output() eventSelected = new EventEmitter<number>();

  @Output() eventClicked = new EventEmitter<number>();

  timelineEvents: TimelineEvent[] = [];
  selectedEvent: TimelineEvent;
  scrollConfig: PerfectScrollbarConfigInterface = {
    useBothWheelAxes: true,
    suppressScrollY: true
  };

  constructor() { }

  ngOnInit() {
    if (this.defaultSequenceNumber) {
      this.selectEvent(this.timelineEvents.find(e => e.sequenceNumber === this.defaultSequenceNumber));
    }
  }

  selectEvent(event: TimelineEvent): void {
    if (event) {
      this.selectedEvent = event;
      this.eventSelected.emit(event.sequenceNumber);
    }
  }

  onEventClicked(event: TimelineEvent) {
    if (event) {
      this.eventClicked.emit(event.sequenceNumber);
      this.selectEvent(event);
    }
  }

}
