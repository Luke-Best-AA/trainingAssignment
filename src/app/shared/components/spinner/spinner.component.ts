import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * `SpinnerComponent` is a component that provides the loading spinner.
*/
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
  /** Color of the spinner */
  @Input() color = 'primary';
  /** Diameter of the spinner */
  @Input() diameter = "100";
  /** Width of the spinner */
  @Input() width = "10";
}

