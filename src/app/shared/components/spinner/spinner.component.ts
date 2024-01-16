import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
})

export class SpinnerComponent {
  @Input() color = 'primary';
  @Input() diameter = "100";
  @Input() width = "10";
}

