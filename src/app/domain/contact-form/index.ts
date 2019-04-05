export namespace ContactFormModule {
  export interface EmailMessage {
    name: string;
    message: string;
    email: string;
    recaptcha: string;
  }

  export interface ContactFormSettings {
    disableSubmit: boolean;
  }
}
