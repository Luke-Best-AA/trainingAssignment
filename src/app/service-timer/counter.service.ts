import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


export interface Counter {
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

  pauseLog: string = "";

  resetCounter() {
    this.pauseLog = "";
    this.noOfPauses = 0;
    this.noOfStarts = 0;

    let log = document.getElementById("timeLog");

    log!.innerHTML = "";

    let heading = document.createElement("h3");
    heading.style.margin = "5px";

    heading.innerText = "Log";

    log?.append(heading);

    clearInterval(this.counterInterval);
    this.timerLimit = this.orginalTimerLimit;
  }

  toggleCounter() {
    if (this.started) {
      // pause
      this.started = false;

      this.logToggle("pause");

      clearInterval(this.counterInterval);

      if (this.noOfPauses == 0)
      {
        this.pauseLog += this.timerLimit;
      }
      else {
        this.pauseLog += ", " + this.timerLimit;
      }

      this.noOfPauses++;
    }
    else {
      // start
      this.started = true;

      this.logToggle("start");

      this.orginalTimerLimit = this.timerLimit;
      this.noOfStarts++;
      this.counterInterval = setInterval(() => {
        this.timerLimit--;
      }, 1000);
    }
  }

  logToggle(status: string) {
    let log = document.getElementById("timeLog");

    let logItem = document.createElement("div");

    let statusMsg = "";
    
    if (status == "start"){
      statusMsg = "Started";
    }
    else if (status == "pause"){
      statusMsg = "Paused";
    }

    let time = new Date();
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let dayString: string = day.toString();
    let monthString: string = month.toString();
    let hourString: string = hour.toString();
    let minuteString: string = minute.toString();
    let secondString: string = second.toString();

    if (day < 10) { 
      dayString = "0" + dayString;
    }

    if (month < 10) { 
      monthString = "0" + monthString;
    }
    
    if (hour < 10) { 
      hourString = "0" + hourString;
    }

    if (minute < 10) {
      minuteString = "0" + minuteString; 
    }

    if (second < 10) {
      secondString = "0" + minuteString;
    }

    let timeString: string = dayString + "/" + monthString + "/" + year + " " + hourString + ":" + minuteString + ":" + secondString;

    logItem.innerHTML = "<p class='logItem'><b>" + statusMsg + " at:</b> " + timeString + "</p><br>";

    log?.append(logItem);
  }

  constructor() { }
}
