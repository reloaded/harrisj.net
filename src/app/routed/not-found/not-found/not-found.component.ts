import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page-service/page.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(public page: PageService) {
    this.page.updateTitle('Nothing to see here...');
    this.page.disallowWebCrawlerIndexing();
  }

  ngOnInit() {
  }

}
