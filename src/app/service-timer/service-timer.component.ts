import { Component } from '@angular/core';

import { CounterService } from '../shared/services/counter.service';

/**
 * `ServiceTimerComponent` is a component that provides a timer thant makes use of the counter service.
*/
@Component({
  selector: 'app-service-timer',
  templateUrl: './service-timer.component.html',
  styleUrls: ['./service-timer.component.scss']
})

export class ServiceTimerComponent {
  /** Sets up the counter service */
  constructor(private counterService: CounterService) {}

  /** Gets the current time from the counter service */
  get timerLimit() {
    return this.counterService.timerLimit;
  }

  /** Sets the current time from the counter service */
  set timerLimit(value: number) {
    this.counterService.timerLimit = value;
  }

  /** Gets the boolean started from the counter service */
  get started() {
    return this.counterService.started;
  }

  /** Gets the pauseLog from the counter service */
  get pauseLog() {
    return this.counterService.pauseLog;
  }

  /** Gets the toggleLog from the counter service */
  get toggleLog() {
    return this.counterService.toggleLog;
  }

  /** Gets the noOfStarts from the counter service */
  get noOfStarts() {
    return this.counterService.noOfStarts;
  }

  /** Gets the noOfPauses from the counter service */
  get noOfPauses() {
    return this.counterService.noOfPauses;
  }

  /** Toggles the timer using the counter service */
  toggleTimer() {
    this.counterService.toggleCounter();
  }

  /** Resets the timer using the counter service */
  resetTimer() {
    this.counterService.resetCounter();
  }
  
}
