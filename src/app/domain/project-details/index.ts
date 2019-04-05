import * as moment from 'moment';

export namespace ProjectDetailsModule {

  export interface Project {
    sequenceNumber: number;
    startDate: moment.Moment;
    endDate?: moment.Moment;
    slug: string;
    name: string;
    location: string;
    description: string;
    role: string;
    responsibilities: string[];
    achievements?: string[];
    skills: string[];
  }

}
