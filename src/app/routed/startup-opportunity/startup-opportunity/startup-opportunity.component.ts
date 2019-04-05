import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page-service/page.service';
import {StartupContactFormModule} from '../../../domain/startup-contact-form';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {StartupContactFormComponent} from '../../../domain/startup-contact-form/startup-contact-form/startup-contact-form.component';
import {timer} from 'rxjs';

@Component({
  selector: 'app-startup-contact',
  templateUrl: './startup-opportunity.component.html',
  styleUrls: ['./startup-opportunity.component.scss']
})
export class StartupOpportunityComponent implements OnInit {
  showEmailForm: boolean;
  showEmailConfirmation: boolean;

  @ViewChild('contactForm') contactForm: StartupContactFormComponent;

  constructor(public page: PageService, private http: HttpClient, private router: Router) {
    this.page.updateTitle('Let\'s Collaborate');
    this.page.allowWebCrawlerIndexing();
  }

  ngOnInit() {
    this.defaultPageState();
  }


  startupEmailSubmitted(email: StartupContactFormModule.StartupOpportunityEmail) {
    this.contactForm.disableSubmit();
    const bgTaskTimeout = setTimeout(() => this.page.hasBackgroundTasks(), 200);

    this.http.post<{message: string, status: number, element?: string}>(
      `http://api.harrisj.net/startup-inquiry.php`,
      email
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
