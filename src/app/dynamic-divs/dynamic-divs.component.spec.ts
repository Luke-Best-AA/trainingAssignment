import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivsComponent } from './dynamic-divs.component';

describe('DynamicDivsComponent', () => {
  let component: DynamicDivsComponent;
  let fixture: ComponentFixture<DynamicDivsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicDivsComponent]
    });
    fixture = TestBed.createComponent(DynamicDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
