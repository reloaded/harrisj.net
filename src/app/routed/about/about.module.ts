import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import {AboutRouterModule} from './about.route';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRouterModule
  ]
})
export class AboutModule { }
