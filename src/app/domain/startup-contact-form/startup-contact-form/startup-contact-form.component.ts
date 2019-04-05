import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {requiredBudgetValidator} from '../required-budget-validator.directive';
import {StartupContactFormModule} from '../index';
import StartupOpportunityEmail = StartupContactFormModule.StartupOpportunityEmail;
import StartupContactFormSettings = StartupContactFormModule.StartupContactFormSettings;

@Component({
  selector: 'app-startup-contact-form',
  templateUrl: './startup-contact-form.component.html',
  styleUrls: ['./startup-contact-form.component.scss'],
  exportAs: 'startupContactForm'
})
export class StartupContactFormComponent implements OnInit, OnChanges {
  @Output() startupEmailSubmitted = new EventEmitter<StartupOpportunityEmail>();
  @Input() settings: StartupContactFormSettings;

  startupContactForm: FormGroup;
  requiresBudget: boolean;
  isSubmitDisabled: boolean;
  private _recaptchaToken: string;

  constructor() {
    this.startupContactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      recaptcha: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(30)]),
      interest: new FormControl('', [Validators.required]),
      budget: new FormControl(
        {value: '', disabled: !this.requiresBudget},
        [Validators.required, Validators.min(5000), Validators.max(100000)]
      ),
    }, [requiredBudgetValidator]);
  }

  ngOnInit() {
    this.interestControl().valueChanges.subscribe((interest: string) => {
      const i = interest.toLowerCase();
      this.requiresBudget = i === 'investor' || i === 'consultant';
      if (!this.requiresBudget) {
        this.budgetControl().disable({onlySelf: true});
        this.budgetControl().setValue('');
      } else {
        this.budgetControl().enable({onlySelf: true});
      }
    });

    this.budgetControl().valueChanges.subscribe(budget => {
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.settings && changes.settings.currentValue) {
      const s = changes.settings.currentValue as StartupContactFormSettings;

      if (s.disableSubmit) {
        this.disableSubmit();
      } else {
        this.enableSubmit();
      }
    }
  }

  nameControl(): AbstractControl {
    return this.startupContactForm.get('name');
  }

  emailControl(): AbstractControl {
    return this.startupContactForm.get('email');
  }

  messageControl(): AbstractControl {
    return this.startupContactForm.get('message');
  }

  interestControl(): AbstractControl {
    return this.startupContactForm.get('interest');
  }

  budgetControl(): AbstractControl {
    return this.startupContactForm.get('budget');
  }

  recaptchaControl(): AbstractControl {
    return this.startupContactForm.get('recaptcha') as AbstractControl;
  }

  submitStartupEmail() {
    if (this.startupContactForm.valid) {
      this.startupEmailSubmitted.emit({
        name: this.nameControl().value,
        email: this.emailControl().value,
        message: this.messageControl().value,
        interest: this.interestControl().value,
        budget: this.budgetControl().value,
        recaptcha: this._recaptchaToken
      });
    } else {
      for (const controlName in this.startupContactForm.controls) {
        if (this.startupContactForm.controls.hasOwnProperty(controlName)) {
          const control = this.startupContactForm.get(controlName);
          if (control.invalid && control.untouched) {
            control.markAsTouched();
          }
        }
      }
    }
  }

  recaptchaToken(recaptchaToken: string) {
    this._recaptchaToken = recaptchaToken;
  }

  disableSubmit(): void {
    this.isSubmitDisabled = true;
  }

  enableSubmit(): void {
    this.isSubmitDisabled = false;
  }
}
