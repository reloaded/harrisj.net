import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactFormModule} from '../index';
import EmailMessage = ContactFormModule.EmailMessage;
import ContactFormSettings = ContactFormModule.ContactFormSettings;

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  exportAs: 'generalContactForm'
})
export class ContactFormComponent implements OnInit, OnChanges {
  @Output() emailSubmitted = new EventEmitter<EmailMessage>();
  @Input() settings: ContactFormSettings;

  contactForm: FormGroup;
  isSubmitDisabled: boolean;
  private _recaptchaToken: string;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      recaptcha: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(30)])
    });
  }

  messageControl(): AbstractControl {
    return this.contactForm.get('message') as AbstractControl;
  }

  emailControl(): AbstractControl {
    return this.contactForm.get('email') as AbstractControl;
  }

  nameControl(): AbstractControl {
    return this.contactForm.get('name') as AbstractControl;
  }

  recaptchaControl(): AbstractControl {
    return this.contactForm.get('recaptcha') as AbstractControl;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.settings && changes.settings.currentValue) {
      const s = changes.settings.currentValue as ContactFormSettings;

      if (s.disableSubmit) {
        this.disableSubmit();
      } else {
        this.enableSubmit();
      }
    }
  }

  submitContactForm() {
    if (this.contactForm.valid) {
      this.emailSubmitted.emit({
        name: this.nameControl().value,
        email: this.emailControl().value,
        message: this.messageControl().value,
        recaptcha: this._recaptchaToken
      });
    } else {
      for (const controlName in this.contactForm.controls) {
        if (this.contactForm.controls.hasOwnProperty(controlName)) {
          const control = this.contactForm.get(controlName);
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
