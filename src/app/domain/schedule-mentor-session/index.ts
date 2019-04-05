export namespace ScheduleMentorSessionModule {

  export interface ScheduledMentorshipSession {
    name: string;
    email: string;
    message: string;
    desiredOutcome: string;
    programType: string;
    recaptcha: string;
  }

  export interface ScheduleMentorshipFormSettings {
    disableSubmit: boolean;
  }

}
