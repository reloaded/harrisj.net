import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupOpportunityComponent } from './startup-opportunity.component';

describe('StartupOpportunityComponent', () => {
  let component: StartupOpportunityComponent;
  let fixture: ComponentFixture<StartupOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
