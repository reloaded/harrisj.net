import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupContactFormComponent } from './startup-contact-form.component';

describe('StartupContactFormComponent', () => {
  let component: StartupContactFormComponent;
  let fixture: ComponentFixture<StartupContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
