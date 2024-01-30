import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * `TimerInputsComponent` is a component that handles the inputs for a timer.
 */
@Component({
  selector: 'app-timer-inputs',
  templateUrl: './timer-inputs.component.html',
  styleUrls: ['./timer-inputs.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class TimerInputsComponent {
  /** The limit of the timer. */
  @Input() timerLimit: number = 2000;

  /** Indicates whether the timer has started. */
  @Input() started: boolean = false;

  /** An array to log the remaining time each time the timer is paused. */
  @Input() pauseLog: number[] = [];

  /** Event emitted when the timer is toggled. */
  @Output() timerToggled = new EventEmitter<void>();

  /** Event emitted when the reset button is clicked. */
  @Output() resetClicked = new EventEmitter<void>();

  /** Event emitted when the timer limit changes. */
  @Output() timerLimitChange = new EventEmitter<number>();

  /** The text displayed on the toggle button. */
  btnText: string = 'Start';

  /** Constructs the Component */
  constructor() { }
  
  /**
   * Toggles the timer on and off.
   */
  toggleTimer() {
    this.timerToggled.emit();
    this.btnText = this.started ? 'Start' : 'Pause'; 
  }

  /**
   * Resets the timer.
   */
  resetTimer() {
    this.resetClicked.emit();
  }

  /**
   * Changes the timer limit.
   * @param {number} value - The new timer limit.
   */
  timerChange(value: number) {
    this.timerLimit = value;
    this.timerLimitChange.emit(value);
  }
}