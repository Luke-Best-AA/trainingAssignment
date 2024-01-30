import { Component } from '@angular/core';

import { CounterService } from '../shared/services/counter.service';

/**
 * `HomeContent` is a component that provides the Home Page
*/
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {
  /** Sets up the counter service */
  constructor(private counterService: CounterService) {}

  /** Gets the current time from the counter service */
  get timerLimit() {
    return this.counterService.timerLimit;
  }
}
