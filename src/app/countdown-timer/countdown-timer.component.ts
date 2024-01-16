import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent {

  started: boolean = false;

  noOfStarts: number = 0;
  noOfPauses: number = 0;

  timerLimit: number = 1000;

  orginalTimerLimit: number = this.timerLimit;

  counter: any;

  pauseLog:number[] = [];

  toggleLog:String[][] = [];



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

  resetTimer() {
    this.pauseLog = [];
    this.toggleLog = [];
    this.noOfPauses = 0;
    this.noOfStarts = 0;

    this.started = false;

    clearInterval(this.counter);
    this.timerLimit = this.orginalTimerLimit;
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
}