import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-timer-button-log',
  templateUrl: './timer-button-log.component.html',
  styleUrls: ['./timer-button-log.component.scss'],
  standalone: true,
})
export class TimerButtonLogComponent {
  @Input() noOfStarts: number = 0;
  @Input() noOfPauses: number = 0;
}
