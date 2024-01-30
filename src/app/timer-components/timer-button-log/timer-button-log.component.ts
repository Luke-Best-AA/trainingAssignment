import { Component, Input } from '@angular/core';

/**
 * `TimerButtonLogComponent` is a component that displays the number of starts and pauses of a timer.
 */
@Component({
  selector: 'app-timer-button-log',
  templateUrl: './timer-button-log.component.html',
  styleUrls: ['./timer-button-log.component.scss'],
  standalone: true,
})
export class TimerButtonLogComponent {
  /** The number of times the timer has started. */
  @Input() noOfStarts: number = 0;

  /** The number of times the timer has been paused. */
  @Input() noOfPauses: number = 0;
}