import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


interface Counter {
  id: any;
  value: string;
}

@Injectable({
  providedIn: 'root'
})

export class CounterService {

  private counter = new BehaviorSubject<Counter[]>([]);
  readonly counter$ = this.counter.asObservable();

  started: boolean = false;
  noOfStarts: number = 0;
  noOfPauses: number = 0;

  timerLimit: number = 2000;

  orginalTimerLimit: number = this.timerLimit;


  counterInterval: any;

  pauseLog:number[] = [];
  toggleLog:String[][] = [];  

  resetCounter() {
    this.pauseLog = [];
    this.toggleLog = [];    
    this.noOfPauses = 0;
    this.noOfStarts = 0;

    this.started = false;

    clearInterval(this.counterInterval);
    this.timerLimit = this.orginalTimerLimit;
  }

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

  constructor() { }
}
