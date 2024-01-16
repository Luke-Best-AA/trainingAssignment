import { Component } from '@angular/core';

import { CounterService } from '../shared/services/counter.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent {
  constructor(public counterService: CounterService) {}
}
