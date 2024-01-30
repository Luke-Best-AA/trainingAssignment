import { Component } from '@angular/core';
import { Router, Event, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

/**
 * `AppComponent` is a component that provides the app.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
  /** Title of the App */
  title = 'trainingAssignment';
  /** Boolean to show or hide the page based on loading */
  isLoading: boolean = false;  

  /**
   * Creates an instance of `AppComponent`.
   * @param router Router to subscribe to the router events
  */
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
