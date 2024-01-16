import { ComponentFixture, TestBed, discardPeriodicTasks, tick, fakeAsync } from '@angular/core/testing';

import { CountdownTimerComponent } from './countdown-timer.component';
import { TimerDisplayComponent } from '../timer-components/timer-display/timer-display.component';
import { TimerInputsComponent } from '../timer-components/timer-inputs/timer-inputs.component';
import { TimerLogComponent } from '../timer-components/timer-log/timer-log.component';
import { TimerButtonLogComponent } from '../timer-components/timer-button-log/timer-button-log.component';


describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TimerDisplayComponent,
        TimerInputsComponent,
        TimerLogComponent,
        TimerButtonLogComponent,
      ],
      declarations: [
        CountdownTimerComponent,
      ]
    });
    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should reset all properties to their initial values", () => {
    // Arrange
    component.pauseLog = [1000];
    component.toggleLog = [["Status", "Datetime", "1000"]];
    component.noOfPauses = 1;
    component.noOfStarts = 1;
    component.started = true;
    component.timerLimit = 0;
    component.orginalTimerLimit = 10;
    spyOn(window, "clearInterval");

    // Act
    component.resetTimer();

    // Assert
    expect(component.pauseLog).toEqual([]);
    expect(component.toggleLog).toEqual([]);
    expect(component.noOfPauses).toEqual(0);
    expect(component.noOfStarts).toEqual(0);
    expect(component.started).toEqual(false);
    expect(component.timerLimit).toEqual(component.orginalTimerLimit);
    expect(window.clearInterval).toHaveBeenCalled();
  });

  it("should pause the counter", () => {
    // Arrange
    component.started = true;
    component.counter = 1;
    spyOn(window, "clearInterval");

    // Act
    component.toggleTimer();

    // Assert
    expect(component.started).toEqual(false);
    expect(window.clearInterval).toHaveBeenCalled();
  });

  it("should start the counter and reduce timerLimit by 1 each second", fakeAsync(() => {
    // Arrange
    component.started = false;
    component.timerLimit = 10;
    component.counter = null;
    spyOn(window, "setInterval").and.callThrough();

    // Act
    component.toggleTimer();
    tick(1000); // Simulate a 1 second delay

    // Assert
    expect(component.started).toEqual(true);
    expect(component.timerLimit).toEqual(9);
    expect(window.setInterval).toHaveBeenCalled();

    discardPeriodicTasks();
  }));

  it("should alert the user when the timer reaches 0 and then reset the timer", fakeAsync(() => {
    // Arrange
    component.started = false;
    component.timerLimit = 0;
    component.counter = null;
    spyOn(window, "alert");
    spyOn(component, "resetTimer");

    // Act
    component.toggleTimer();
    tick(1000); // Simulate a 1 second delay

    // Assert
    expect(window.alert).toHaveBeenCalled();
    expect(component.resetTimer).toHaveBeenCalled();

    discardPeriodicTasks();
  }));
});
