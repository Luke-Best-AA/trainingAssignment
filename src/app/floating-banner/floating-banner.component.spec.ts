import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBannerComponent } from './floating-banner.component';

describe('FloatingBannerComponent', () => {
  let component: FloatingBannerComponent;
  let fixture: ComponentFixture<FloatingBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatingBannerComponent]
    });
    fixture = TestBed.createComponent(FloatingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
