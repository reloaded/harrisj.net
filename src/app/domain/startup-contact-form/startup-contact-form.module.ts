import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartupContactFormComponent } from './startup-contact-form/startup-contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {RecaptchaModule} from 'ng-recaptcha';

@NgModule({
  exports: [StartupContactFormComponent],
  declarations: [StartupContactFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ]
})
export class StartupContactFormModule { }
