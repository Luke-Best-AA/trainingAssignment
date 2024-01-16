import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer-inputs',
  templateUrl: './timer-inputs.component.html',
  styleUrls: ['./timer-inputs.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class TimerInputsComponent {
  @Input() timerLimit: number = 2000;
  @Input() started: boolean = false;
  @Input() pauseLog: number[] = [];
  @Output() timerToggled = new EventEmitter<void>();
  @Output() resetClicked = new EventEmitter<void>();
  @Output() timerLimitChange = new EventEmitter<number>();

  btnText: string = 'Start';

  constructor() { }
  
  toggleTimer() {
    this.timerToggled.emit();
    this.btnText = this.started ? 'Start' : 'Pause'; 
  }

  resetTimer() {
    this.resetClicked.emit();
  }

  timerChange(value: number) {
    this.timerLimit = value;
    this.timerLimitChange.emit(value);
  }
}
