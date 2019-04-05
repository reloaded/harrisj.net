import { Component, OnInit } from '@angular/core';
import {StaticSkillsService} from '../../../services/static-skills-service/static-skills.service';
import {PageService} from '../../../services/page-service/page.service';
import {SkillTreeModule} from '../../../domain/skill-tree';
import SkillTreeConfig = SkillTreeModule.SkillTreeConfig;
import {SkillCategory} from '../../../services/static-skills-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillTreeConfig: SkillTreeConfig;

  constructor(
    public page: PageService,
    private skillsService: StaticSkillsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.page.updateTitle('What I Speak');
    this.page.allowWebCrawlerIndexing();
  }

  ngOnInit() {
    this.skillTreeConfig = {
      skills: this.skillsService.allSkills()
    };

    this.route.paramMap.subscribe(params => {
      if (params.has('category')) {
        this.skillTreeConfig.defaultSelectedCategory = this.skillTreeConfig.skills
          .find(s => s.category.id.toLowerCase() === params.get('category').toLowerCase())
          .category;
      }
    });
  }

  onCategoryClicked(skillCategory: SkillCategory) {
    const path = ['skills'];

    if (skillCategory) {
      path.push(skillCategory.id);
    }

    this.router.navigate(path);
  }
}
