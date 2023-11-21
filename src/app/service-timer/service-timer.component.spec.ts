import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTimerComponent } from './service-timer.component';

describe('ServiceTimerComponent', () => {
  let component: ServiceTimerComponent;
  let fixture: ComponentFixture<ServiceTimerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceTimerComponent]
    });
    fixture = TestBed.createComponent(ServiceTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
