import { Component } from '@angular/core';
import { Router, Event, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trainingAssignment';

  showPage: boolean = true;

  constructor(router: Router) {
    // Subscribe to the router events
    router.events.subscribe((event: Event) => {
      // If the event is RouteConfigLoadStart, set the variable to true
      if (event instanceof RouteConfigLoadStart) {
        this.showPage = false;
      }
      // If the event is RouteConfigLoadEnd, set the variable to false
      if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.showPage = true;
        }, 1000);
      }
    });
  }   
}