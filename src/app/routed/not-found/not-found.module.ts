import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import {NotFoundRouterModule} from './not-found.route';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRouterModule
  ]
})
export class NotFoundModule { }
