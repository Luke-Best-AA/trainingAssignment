import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerButtonLogComponent } from './timer-button-log.component';

describe('TimerButtonLogComponent', () => {
  let component: TimerButtonLogComponent;
  let fixture: ComponentFixture<TimerButtonLogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TimerButtonLogComponent
      ],
      declarations: [
        
      ]
    });
    fixture = TestBed.createComponent(TimerButtonLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
