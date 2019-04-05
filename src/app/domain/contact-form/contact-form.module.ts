import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule} from '@angular/forms';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class ContactFormModule { }
