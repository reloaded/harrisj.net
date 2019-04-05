import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceUnavailableComponent } from './service-unavailable/service-unavailable.component';
import {ServiceUnavailableRouterModule} from './service-unavailable.route';

@NgModule({
  declarations: [ServiceUnavailableComponent],
  imports: [
    CommonModule,
    ServiceUnavailableRouterModule
  ]
})
export class ServiceUnavailableModule { }
