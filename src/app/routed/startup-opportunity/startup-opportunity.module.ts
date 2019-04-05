import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StartupContactFormModule} from '../../domain/startup-contact-form/startup-contact-form.module';
import {StartupOpportunityComponent} from './startup-opportunity/startup-opportunity.component';
import {StartupOpportunityRouterModule} from './startup-opportunity.route';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [StartupOpportunityComponent],
  imports: [
    CommonModule,
    StartupContactFormModule,
    StartupOpportunityRouterModule,
    HttpClientModule,
  ]
})
export class StartupOpportunityModule { }
