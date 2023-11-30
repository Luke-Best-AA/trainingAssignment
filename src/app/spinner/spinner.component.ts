import { Component } from '@angular/core';
import { Router, Event, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})

export class SpinnerComponent {
  isLoading: boolean = false;

  constructor(router: Router) {
    // Subscribe to the router events
    router.events.subscribe((event: Event) => {
      // If the event is RouteConfigLoadStart, set the variable to true
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      }
      // If the event is RouteConfigLoadEnd, set the variable to false
      if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      }
    });
  }  
}

