import { Component } from '@angular/core';

import { CounterService } from '../shared/services/counter.service';

@Component({
  selector: 'app-service-timer',
  templateUrl: './service-timer.component.html',
  styleUrls: ['./service-timer.component.scss']
})

export class ServiceTimerComponent {
  constructor(public counterService: CounterService) {}

  toggleTimer() {
    this.counterService.toggleCounter();
  }

  resetTimer() {
    this.counterService.resetCounter();
  }
  
}
