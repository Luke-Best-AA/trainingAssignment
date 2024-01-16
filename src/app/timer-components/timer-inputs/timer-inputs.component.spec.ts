import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerInputsComponent } from './timer-inputs.component';

describe('TimerInputsComponent', () => {
  let component: TimerInputsComponent;
  let fixture: ComponentFixture<TimerInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TimerInputsComponent
      ],
      declarations: [
        
      ]
    });
    fixture = TestBed.createComponent(TimerInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit timerToggled and change btn text when toggleTimer called', () => {
    component.started = false;
    spyOn(component.timerToggled, 'emit');
    component.toggleTimer();
    fixture.detectChanges();
    expect(component.btnText).toBe('Pause');    
    expect(component.timerToggled.emit).toHaveBeenCalled();
    component.started = true;
    component.toggleTimer();
    fixture.detectChanges();
    expect(component.btnText).toBe('Start');
  });

  it('should emit resetClicked when resetTimer called', () => {
    spyOn(component.resetClicked, 'emit');
    component.resetTimer();
    fixture.detectChanges();
    expect(component.resetClicked.emit).toHaveBeenCalled();
  });

  it('should emit timerLimitChange when timerChange called', () => {
    spyOn(component.timerLimitChange, 'emit');
    component.timerChange(1000);
    fixture.detectChanges();
    expect(component.timerLimitChange.emit).toHaveBeenCalled();
  });
});
