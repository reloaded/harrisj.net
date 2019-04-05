import {Component, OnInit, ViewChild} from '@angular/core';
import {PageService} from '../../../services/page-service/page.service';
import {ContactFormModule} from '../../../domain/contact-form';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ContactFormComponent} from '../../../domain/contact-form/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  showEmailForm: boolean;
  showEmailConfirmation: boolean;

  @ViewChild('contactForm') contactForm: ContactFormComponent;

  constructor(public page: PageService, private http: HttpClient, private router: Router) {
    this.page.updateTitle('Let\'s Connect');
    this.page.allowWebCrawlerIndexing();
  }

  ngOnInit() {
    this.defaultPageState();
  }

  onEmailSubmitted(email: ContactFormModule.EmailMessage) {
    this.contactForm.disableSubmit();
    const bgTaskTimeout = setTimeout(() => this.page.hasBackgroundTasks(), 200);

    this.http.post<{message: string, status: number, element?: string}>(
      `http://api.harrisj.net/contact.php`,
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
