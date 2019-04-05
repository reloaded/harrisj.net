import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {HomeRouterModule} from './home.route';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRouterModule
  ]
})
export class HomeModule { }
