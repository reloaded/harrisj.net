import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page-service/page.service';
import {ScheduleMentorSessionModule} from '../../../domain/schedule-mentor-session';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {
  ScheduleMentorSessionComponent
} from '../../../domain/schedule-mentor-session/schedule-mentor-session/schedule-mentor-session.component';
import {timer} from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  showEmailForm: boolean;
  showEmailConfirmation: boolean;

  @ViewChild('contactForm') contactForm: ScheduleMentorSessionComponent;

  constructor(public page: PageService, private http: HttpClient, private router: Router) {
    this.page.updateTitle('Interested in Mentorship?');
    this.page.allowWebCrawlerIndexing();
  }

  ngOnInit() {
    this.defaultPageState();
  }


  sessionScheduled(scheduledSession: ScheduleMentorSessionModule.ScheduledMentorshipSession) {
    this.contactForm.disableSubmit();
    const bgTaskTimeout = setTimeout(() => this.page.hasBackgroundTasks(), 200);

    this.http.post<{message: string, status: number, element?: string}>(
      `http://api.harrisj.net/schedule-mentorship.php`,
      scheduledSession
    ).subscribe((r: {message: string, status: number, element?: string}) => {
      if (r.status === 201) {
        this.emailSent();
      } else if (r.status === 503) {
        this.serviceUnavailable();
      }
      this.contactForm.enableSubmit();
      clearTimeout(bgTaskTimeout);
      this.page.hasBackgroundTasks(true);
    });
  }

  private defaultPageState() {
    this.showEmailForm = true;
    this.showEmailConfirmation = false;
  }

  private emailSent() {
    this.showEmailForm = false;
    this.showEmailConfirmation = true;
  }

  private serviceUnavailable() {
    this.router.navigate(['/service-unavailable']);
  }
}
