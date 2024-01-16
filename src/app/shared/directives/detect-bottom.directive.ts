import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDetectBottom]',
  standalone: true
})
export class DetectBottomDirective {
  @Output() scrolledToBottom = new EventEmitter<void>();

  @HostListener('scroll', ['$event.target'])
  onScroll(target: HTMLElement): void {
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 1) {
      // Emit an event when the bottom is reached
      this.scrolledToBottom.emit();
    }
  }
}

