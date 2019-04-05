import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {ContactRouterModule} from './contact.route';
import {ContactFormModule} from '../../domain/contact-form/contact-form.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactFormModule,
    ContactRouterModule,
    HttpClientModule,
  ]
})
export class ContactModule { }
