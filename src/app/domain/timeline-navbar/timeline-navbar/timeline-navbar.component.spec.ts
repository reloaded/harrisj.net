import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineNavbarComponent } from './timeline-navbar.component';

describe('TimelineNavbarComponent', () => {
  let component: TimelineNavbarComponent;
  let fixture: ComponentFixture<TimelineNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
