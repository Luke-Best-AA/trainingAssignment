import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Counter, CounterService } from './counter.service';

@Component({
  selector: 'app-service-timer',
  templateUrl: './service-timer.component.html',
  styleUrls: ['./service-timer.component.scss']
})

export class ServiceTimerComponent {
  counter$!: Observable<Counter[]>;
  constructor(public counterService: CounterService) {}

  ngOnInit() {
    this.counter$ = this.counterService.counter$;
  }

  toggleTimer() {
    this.counterService.toggleCounter();
  }

  resetTimer() {
    this.counterService.resetCounter();
  }
  
}
