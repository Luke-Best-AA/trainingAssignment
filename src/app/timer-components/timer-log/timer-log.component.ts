import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class TimerLogComponent {
  @Input() toggleLog: String[][] = [];

  constructor() { }
}
