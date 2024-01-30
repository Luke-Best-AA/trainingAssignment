import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

/** Interface for Counter */
interface Counter {
  /** Id */
  id: any;
  /** Value */
  value: string;
}

/**
 * `CounterService` is a service that provides Counter functionality.
*/
@Injectable({
  providedIn: 'root'
})

export class CounterService {
  /** Counter Created */
  private counter = new BehaviorSubject<Counter[]>([]);
  /** Counter Observable */
  readonly counter$ = this.counter.asObservable();

  /** Is the counter started? */
  started: boolean = false;
  /** How many times has the counter started? */
  noOfStarts: number = 0;
  /** How many times has the counter paused? */
  noOfPauses: number = 0;
  /** Timer limit of the counter */
  timerLimit: number = 2000;
  /** Orginal timer limit of the counter */
  orginalTimerLimit: number = this.timerLimit;

  /** Variable to contain the countdown setInterval */
  counterInterval: any;

  /** Pause log of the counter */
  pauseLog:number[] = [];
  /** Toggle log of the counter */
  toggleLog:String[][] = [];  

  /** Resets the counter */
  resetCounter() {
    this.pauseLog = [];
    this.toggleLog = [];    
    this.noOfPauses = 0;
    this.noOfStarts = 0;

    this.started = false;

    clearInterval(this.counterInterval);
    this.timerLimit = this.orginalTimerLimit;
  }

  /** Toggles the counter */
  toggleCounter() {
    if (this.started) {
      // pause
      this.started = false;

      this.logToggle(this.started);

      clearInterval(this.counterInterval);
        
      this.pauseLog.push(this.timerLimit);


      this.noOfPauses++;
    }
    else {
      // start
      this.started = true;

      this.logToggle(this.started);

      this.orginalTimerLimit = this.timerLimit;
      this.noOfStarts++;
      this.counterInterval = setInterval(() => {
        this.timerLimit--;
      }, 1000);
    }
  }

  /** Logs the toggle */
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

  /** Creates instance of counter service */
  constructor() { }
}
