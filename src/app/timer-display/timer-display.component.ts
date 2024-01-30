import { Component } from '@angular/core';
import { CounterService } from '../shared/services/counter.service';

/**
 * `TimerDisplayComponent` is a component that displays the timer limit.
 * It uses the `CounterService` to get the timer limit.
 */
@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss'],
})
export class TimerDisplayComponent {
  /**
   * Constructs the component and injects the CounterService service.
   * @param {CounterService} counterService - The injected CounterService service.
   */
  constructor(private counterService: CounterService) { }

  /** Gets the TimerLimit from the Counter Service */
  get timerLimit() {
    return this.counterService.timerLimit;
  }
}