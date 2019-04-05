import * as moment from 'moment';

export namespace TimelineNavBarModule {

  export interface TimelineEvent {
    sequenceNumber: number;
    startDate: moment.Moment;
    endDate: moment.Moment;
    duration: number;
    name: string;
    width: number;
  }

}
