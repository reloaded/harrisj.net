import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page-service/page.service';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {

  constructor(public page: PageService) {
    this.page.updateTitle('What I Offer');
    this.page.allowWebCrawlerIndexing();
  }

  ngOnInit() {
  }

}
