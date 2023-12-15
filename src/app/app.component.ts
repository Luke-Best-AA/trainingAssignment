import { Component } from '@angular/core';
import { Router, Event, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('1s ease-out', 
                    style({ opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('1s ease-in', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]  
})
export class AppComponent {
  title = 'trainingAssignment';

  showPage: boolean = true;
  isLoading: boolean = false;  

  constructor(router: Router) {
    // Subscribe to the router events
    router.events.subscribe((event: Event) => {
      // If the event is RouteConfigLoadStart, set the variable to true
      if (event instanceof RouteConfigLoadStart) {
        this.showPage = false;
        this.isLoading = true;
      }
      // If the event is RouteConfigLoadEnd, set the variable to false
      if (event instanceof RouteConfigLoadEnd) {
        setTimeout(() => {
          this.showPage = true;
          this.isLoading = false;
        }, 1000);
      }
    });
  }

}
