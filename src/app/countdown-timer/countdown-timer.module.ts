import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';
import { CountdownTimerComponent } from './countdown-timer.component';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';


@NgModule({
  declarations: [
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    CountdownTimerRoutingModule,
    FormsModule,
    CountdownModule,
  ]
})
export class CountdownTimerModule { }
