import { Component, OnInit } from '@angular/core';
import {PageService} from '../../../services/page-service/page.service';
import {StaticSkillsService} from '../../../services/static-skills-service/static-skills.service';
import {Skill} from '../../../services/static-skills-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  preferredSkills: Skill[] = [];

  constructor(public page: PageService, private skillsService: StaticSkillsService) {
    this.page.updateTitle('Hello, friend.');
    this.page.allowWebCrawlerIndexing();
  }

  ngOnInit() {
    this.preferredSkills = this.skillsService.allSkills().filter(s => s.preferred);
  }

}
