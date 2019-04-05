export namespace StartupContactFormModule {
  export interface StartupOpportunityEmail {
    name: string;
    email: string;
    message: string;
    interest: string;
    budget: string;
    recaptcha: string;
  }

  export interface StartupContactFormSettings {
    disableSubmit: boolean;
  }
}
