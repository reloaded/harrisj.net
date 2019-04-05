import {NgModule} from '@angular/core';

import {AppRouterModule} from './app.route';
import {AppComponent} from './app.component';
import {PageServiceModule} from './services/page-service/page-service.module';
import {CommonModule} from '@angular/common';
import {environment} from '../environments/environment';
import {RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoggingService} from './services/logging-service/logging.service';
import {LoggingServiceModule} from './services/logging-service/logging-service.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRouterModule,
    PageServiceModule,
    LoggingServiceModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: { siteKey: environment.recaptcha.siteKey } as RecaptchaSettings,
    },
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
