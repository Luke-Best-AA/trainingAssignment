import { Directive, HostListener, EventEmitter, Output } from '@angular/core';

/**
 * `DetectBottomDirective` is a dirtective that emits scrolledtoBottom when the bottom of the element is detected.
*/
@Directive({
  selector: '[appDetectBottom]',
  standalone: true
})
export class DetectBottomDirective {
  /** Event emitter for scrolled to bottom */
  @Output() scrolledToBottom = new EventEmitter<void>();

  /** Creates a hostlistener for scroll event */
  @HostListener('scroll', ['$event.target'])
  onScroll(target: HTMLElement): void {
    if (target.scrollHeight - target.scrollTop <= target.clientHeight + 1) {
      // Emit an event when the bottom is reached
      this.scrolledToBottom.emit();
    }
  }
}

