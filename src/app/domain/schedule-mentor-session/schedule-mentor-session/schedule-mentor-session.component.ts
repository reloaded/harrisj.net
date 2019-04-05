import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ScheduleMentorSessionModule} from '../index';
import ScheduledMentorshipSession = ScheduleMentorSessionModule.ScheduledMentorshipSession;
import ScheduleMentorshipFormSettings = ScheduleMentorSessionModule.ScheduleMentorshipFormSettings;

@Component({
  selector: 'app-schedule-mentor-session',
  templateUrl: './schedule-mentor-session.component.html',
  styleUrls: ['./schedule-mentor-session.component.scss'],
  exportAs: 'scheduleMentorship'
})
export class ScheduleMentorSessionComponent implements OnInit, OnChanges {
  @Output() sessionScheduled = new EventEmitter<ScheduledMentorshipSession>();
  @Input() settings: ScheduleMentorshipFormSettings;
  mentorSchedulingForm: FormGroup;
  isSubmitDisabled: boolean;
  private _recaptchaToken: string;

  constructor() {
    this.mentorSchedulingForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      recaptcha: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(30)]),
      outcome: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.settings && changes.settings.currentValue) {
      const s = changes.settings.currentValue as ScheduleMentorshipFormSettings;

      if (s.disableSubmit) {
        this.disableSubmit();
      } else {
        this.enableSubmit();
      }
    }
  }

  nameControl(): AbstractControl {
    return this.mentorSchedulingForm.get('name');
  }

  emailControl(): AbstractControl {
    return this.mentorSchedulingForm.get('email');
  }

  messageControl(): AbstractControl {
    return this.mentorSchedulingForm.get('message');
  }

  outcomeControl(): AbstractControl {
    return this.mentorSchedulingForm.get('outcome');
  }

  programTypeControl(): AbstractControl {
    return this.mentorSchedulingForm.get('type');
  }

  recaptchaControl(): AbstractControl {
    return this.mentorSchedulingForm.get('recaptcha') as AbstractControl;
  }

  scheduleMentorSession() {
    if (this.mentorSchedulingForm.valid) {
      this.sessionScheduled.emit({
        name: this.nameControl().value,
        email: this.emailControl().value,
        message: this.messageControl().value,
        desiredOutcome: this.outcomeControl().value,
        programType: this.programTypeControl().value,
        recaptcha: this._recaptchaToken
      });
    } else {
      for (const controlName in this.mentorSchedulingForm.controls) {
        if (this.mentorSchedulingForm.controls.hasOwnProperty(controlName)) {
          const control = this.mentorSchedulingForm.get(controlName);
          if (control.invalid && control.untouched) {
            control.markAsTouched();
          }
        }
      }
    }
  }

  recaptchaToken(recaptchaToken: string) {
    this._recaptchaToken = recaptchaToken;
  }

  disableSubmit(): void {
    this.isSubmitDisabled = true;
  }

  enableSubmit(): void {
    this.isSubmitDisabled = false;
  }
}
