import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page-service/page.service';

@Component({
  selector: 'app-service-unavailable',
  templateUrl: './service-unavailable.component.html',
  styleUrls: ['./service-unavailable.component.scss']
})
export class ServiceUnavailableComponent implements OnInit {

  constructor(public page: PageService) {
    this.page.updateTitle('Service Unavailable');
    this.page.disallowWebCrawlerIndexing();
  }

  ngOnInit() {
  }

}
