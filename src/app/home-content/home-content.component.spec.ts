import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentComponent } from './home-content.component';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

describe('HomeContentComponent', () => {
  let component: HomeContentComponent;
  let fixture: ComponentFixture<HomeContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterLink,
        RouterLinkActive
      ],
      declarations: [
        HomeContentComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { data: {} } } }
      ]
    });
    fixture = TestBed.createComponent(HomeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
