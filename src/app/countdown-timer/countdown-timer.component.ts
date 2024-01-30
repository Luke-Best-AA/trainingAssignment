import { Component } from '@angular/core';

/**
 * `CountdownTimerComponent` is a component that provides a countdown timer functionality.
*/

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})

export class CountdownTimerComponent {
  /** Indicates whether the timer has started. */
  started: boolean = false;
  /** The number of times the timer has started. */
  noOfStarts: number = 0;
  /** The number of times the timer has been paused. */
  noOfPauses: number = 0;
  /** The limit of the timer in milliseconds. */
  timerLimit: number = 1000;
  /** The original limit of the timer in milliseconds. */
  orginalTimerLimit: number = this.timerLimit;
  /** The counter for the timer. */
  counter: any;
  /** An array to log the remaining time each time the timer is paused. */
  pauseLog:number[] = [];
  /** An array to log the state of the timer each time it is toggled. */
  toggleLog:String[][] = [];

  /**
   * Toggles the timer on and off.
   */
  toggleTimer() {
    if (this.started) {
      // pause
      this.started = false;

      this.logToggle(this.started);

      clearInterval(this.counter);

      this.pauseLog.push(this.timerLimit);

      this.noOfPauses++;

    }
    else
    {
      // start
      this.started = true;

      this.logToggle(this.started);

      this.orginalTimerLimit = this.timerLimit;
      this.noOfStarts++;

      this.counter = setInterval(() => {
        this.timerLimit--;
        if (this.timerLimit == -1) {
          clearInterval(this.counter);
          this.started = false;
          this.timerLimit = this.orginalTimerLimit;
          alert("Time's up!")
          this.resetTimer();
        }
      }, 1000);
    }
  }

  /**
   * Resets the timer.
   */

  resetTimer() {
    this.pauseLog = [];
    this.toggleLog = [];
    this.noOfPauses = 0;
    this.noOfStarts = 0;

    this.started = false;

    clearInterval(this.counter);
    this.timerLimit = this.orginalTimerLimit;
  }

  /**
   * Logs the state of the timer each time it is toggled.
   * @param status The state of the timer.
   */

  logToggle(status: boolean) {
    let statusMsg = "";
    
    if (status){
      statusMsg = "Started";
    }
    else {
      statusMsg = "Paused";
    }

    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();

    var formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year} ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`;

    this.toggleLog.unshift([statusMsg, formattedDate, this.timerLimit.toString()]);
  }
}