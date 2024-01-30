import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * `TimerLogComponent` is a component that logs the state of a timer.
 */
@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class TimerLogComponent {
  /** An array to log the state of the timer each time it is toggled. */  
  @Input() toggleLog: String[][] = [];

  /** Constructs the Component */
  constructor() { }
}
