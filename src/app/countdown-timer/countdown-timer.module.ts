import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownTimerRoutingModule } from './countdown-timer-routing.module';
import { CountdownTimerComponent } from './countdown-timer.component';
import { FormsModule } from '@angular/forms';
import { CountdownModule } from 'ngx-countdown';
import { TimerDisplayComponent } from '../timer-components/timer-display/timer-display.component';
import { TimerInputsComponent } from '../timer-components/timer-inputs/timer-inputs.component';
import { TimerLogComponent } from '../timer-components/timer-log/timer-log.component';
import { TimerButtonLogComponent } from '../timer-components/timer-button-log/timer-button-log.component';


@NgModule({
  declarations: [
    CountdownTimerComponent,
  ],
  imports: [
    CommonModule,
    CountdownTimerRoutingModule,
    FormsModule,
    CountdownModule,
    TimerDisplayComponent,
    TimerInputsComponent,
    TimerLogComponent,
    TimerButtonLogComponent,
  ]
})
export class CountdownTimerModule { }
