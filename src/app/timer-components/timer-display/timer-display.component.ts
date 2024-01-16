import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss'],
  standalone: true,
})
export class TimerDisplayComponent {
  @Input() timerLimit: number = 0;
}
