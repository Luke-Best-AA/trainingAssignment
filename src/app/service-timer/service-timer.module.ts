import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceTimerRoutingModule } from './service-timer-routing.module';
import { ServiceTimerComponent } from './service-timer.component';
import { TimerDisplayComponent } from '../timer-components/timer-display/timer-display.component';
import { TimerInputsComponent } from '../timer-components/timer-inputs/timer-inputs.component';
import { TimerLogComponent } from '../timer-components/timer-log/timer-log.component';
import { TimerButtonLogComponent } from '../timer-components/timer-button-log/timer-button-log.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServiceTimerComponent
  ],
  imports: [
    CommonModule,
    ServiceTimerRoutingModule,
    FormsModule,
    TimerDisplayComponent,
    TimerInputsComponent,
    TimerLogComponent,
    TimerButtonLogComponent,    
  ]
})
export class ServiceTimerModule { }
