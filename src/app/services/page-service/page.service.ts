import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Meta} from '@angular/platform-browser';
import {LoggingService} from '../logging-service/logging.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  title: Observable<string>;
  activeBackgroundTasks: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _title = new BehaviorSubject<string>('');

  constructor(private metaService: Meta, private logger: LoggingService) {
    this.title = this._title.asObservable();
  }

  updateTitle(title: string) {
    this._title.next(title);
  }

  setMetaDescription(description: string, force?: boolean) {
    if (!description) {
      this.logger.warn('An empty meta description was set');

      if (!force) {
        return;
      }
    }

    if (description.length > 155) {
      this.logger.warn(`Meta descriptions shouldn't be more than 155 characters and this one has ${description.length} characters.`);
      this.logger.warn(`> ${description}`);
    }

    this.metaService.updateTag({name: 'description', content: description}, 'name="description"');
  }

  /**
   * Tell search engine crawlers to index this page.
   */
  allowWebCrawlerIndexing(): void {
    this.metaService.removeTag('name="robots"');
  }

  /**
   * Tell search engine crawlers to not index this page.
   */
  disallowWebCrawlerIndexing(): void {
    this.metaService.addTag({ name: 'robots', content: 'noindex' });
  }

  hasBackgroundTasks(allBackgroundTasksDone?: boolean): void {
    this.activeBackgroundTasks.next(!allBackgroundTasksDone);
  }

  /**
   * @TODO migrate `scrollTop()`
   */
  scrollTop() {
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
  }
}
