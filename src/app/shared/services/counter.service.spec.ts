import { TestBed, discardPeriodicTasks } from '@angular/core/testing';
import { fakeAsync, tick } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reset all properties to their initial values', () => {
    // Arrange
    service.pauseLog = [1000];
    service.toggleLog = [["Status", "Datetime", "1000"]];
    service.noOfPauses = 1;
    service.noOfStarts = 1;
    service.started = true;
    service.timerLimit = 0;
    service.orginalTimerLimit = 10;
    spyOn(window, 'clearInterval');

    // Act
    service.resetCounter();

    // Assert
    expect(service.pauseLog).toEqual([]);
    expect(service.toggleLog).toEqual([]);
    expect(service.noOfPauses).toEqual(0);
    expect(service.noOfStarts).toEqual(0);
    expect(service.started).toEqual(false);
    expect(service.timerLimit).toEqual(service.orginalTimerLimit);
    expect(window.clearInterval).toHaveBeenCalled();
  });
  
  it('should pause the counter', () => {
    // Arrange
    service.started = true;
    service.counterInterval = 1;
    spyOn(window, 'clearInterval');

    // Act
    service.toggleCounter();

    // Assert
    expect(service.started).toEqual(false);
    expect(window.clearInterval).toHaveBeenCalled();
  });

  it('should start the counter and reduce timerLimit by 1 each second', fakeAsync(() => {
    // Arrange
    service.started = false;
    service.timerLimit = 10;
    service.counterInterval = null;
    spyOn(window, 'setInterval').and.callThrough();
  
    // Act
    service.toggleCounter();
    tick(1000); // Simulate a 1 second delay
  
    // Assert
    expect(service.started).toEqual(true);
    expect(service.timerLimit).toEqual(9);
    expect(window.setInterval).toHaveBeenCalled();

    discardPeriodicTasks();
  }));
});
