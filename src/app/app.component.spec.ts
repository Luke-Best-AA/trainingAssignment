import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { fakeAsync, tick } from '@angular/core/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let router: Partial<Router>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      SpinnerComponent,
    ],
    declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      TimerDisplayComponent
    ]
  }));

  beforeEach(() => {
    router = {
      get events() {
        return of(new RouteConfigLoadStart({} as any), new RouteConfigLoadEnd({} as any));
      }
    };
    component = new AppComponent(router as Router);
  });  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'trainingAssignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('trainingAssignment');
  });

  it('should set isLoading to true on RouteConfigLoadStart and to false on RouteConfigLoadEnd', fakeAsync(() => {
    // Act
    component = new AppComponent(router as Router);

    // Assert
    expect(component.isLoading).toBe(true);

    tick(1000);

    expect(component.isLoading).toBe(false);
  }));  
});
