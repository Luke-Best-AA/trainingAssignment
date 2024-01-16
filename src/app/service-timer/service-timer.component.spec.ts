import { TestBed } from '@angular/core/testing';

import { ServiceTimerComponent } from './service-timer.component';
import { TimerDisplayComponent } from '../timer-components/timer-display/timer-display.component';
import { TimerInputsComponent } from '../timer-components/timer-inputs/timer-inputs.component';
import { TimerLogComponent } from '../timer-components/timer-log/timer-log.component';
import { TimerButtonLogComponent } from '../timer-components/timer-button-log/timer-button-log.component';
import { CounterService } from '../shared/services/counter.service';

describe('ServiceTimerComponent', () => {
  let component: ServiceTimerComponent;

  let counterService: jasmine.SpyObj<CounterService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TimerDisplayComponent,
        TimerInputsComponent,
        TimerLogComponent,
        TimerButtonLogComponent,
      ],
      declarations: [
        ServiceTimerComponent
      ]
    });
  });

  beforeEach(() => {
    counterService = jasmine.createSpyObj('CounterService', ['toggleCounter', 'resetCounter']);
    component = new ServiceTimerComponent(counterService);
  });  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#toggleTimer should call toggleCounter on CounterService', () => {
    // Act
    component.toggleTimer();

    // Assert
    expect(counterService.toggleCounter).toHaveBeenCalled();
  });

  it('#resetTimer should call resetCounter on CounterService', () => {
    // Act
    component.resetTimer();

    // Assert
    expect(counterService.resetCounter).toHaveBeenCalled();
  });
});
