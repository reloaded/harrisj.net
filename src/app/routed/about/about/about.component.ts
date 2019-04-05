import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page-service/page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public page: PageService) {
    this.page.updateTitle('Software Architect, Full Stack Developer');
    this.page.allowWebCrawlerIndexing();
  }

  ngOnInit() {
  }

}
