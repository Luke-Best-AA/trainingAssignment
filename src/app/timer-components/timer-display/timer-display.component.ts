import { Component, Input } from '@angular/core';

/**
 * `TimerDisplayComponent` is a component that displays the timer limit.
 */
@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss'],
  standalone: true,
})
export class TimerDisplayComponent {
  /** The limit of the timer. */
  @Input() timerLimit: number = 0;
}