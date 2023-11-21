import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceTimerRoutingModule } from './service-timer-routing.module';
import { ServiceTimerComponent } from './service-timer.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServiceTimerComponent
  ],
  imports: [
    CommonModule,
    ServiceTimerRoutingModule,
    FormsModule
  ]
})
export class ServiceTimerModule { }
