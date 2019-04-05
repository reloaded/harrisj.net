import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleMentorSessionComponent } from './schedule-mentor-session.component';

describe('ScheduleMentorSessionComponent', () => {
  let component: ScheduleMentorSessionComponent;
  let fixture: ComponentFixture<ScheduleMentorSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleMentorSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleMentorSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
