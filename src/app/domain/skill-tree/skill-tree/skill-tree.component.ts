import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {CategorizedSkills, Skill, SkillCategory} from '../../../services/static-skills-service';
import {SkillTreeModule} from '../index';
import SkillTreeConfig = SkillTreeModule.SkillTreeConfig;

@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  styleUrls: ['./skill-tree.component.scss']
})
export class SkillTreeComponent implements OnInit, OnChanges {

  @Input() config: SkillTreeConfig;

  @Output() categoryClicked = new EventEmitter<SkillCategory>();

  @Output() categorySelected = new EventEmitter<SkillCategory>();

  skills: Skill[] = [];
  selectedCategory: CategorizedSkills = null;
  categorizedSkills: CategorizedSkills[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.config && changes.config.currentValue) {
      const config = changes.config.currentValue as SkillTreeConfig;

      if (config.skills) {
        this.skills = config.skills as Skill[];
        this.categorizedSkills = this._filterSkills();
      }

      if (config.defaultSelectedCategory) {
        const category = this.categorizedSkills
          .find(c => c.category.id.toLowerCase() === config.defaultSelectedCategory.id.toLowerCase());
        this.selectCategory(category);
      }
    }
  }

  ngOnInit() {
  }

  onCategoryClicked(categorizedSkills?: CategorizedSkills) {
    this.categoryClicked.emit(categorizedSkills ? categorizedSkills.category : null);
    this.selectCategory(categorizedSkills);
  }

  selectCategory(categorizedSkills?: CategorizedSkills) {
    this.selectedCategory = categorizedSkills;
    this.categorySelected.emit(categorizedSkills ? categorizedSkills.category : null);
  }

  searchSkills(keywords?: string[]): void {
    this.categorizedSkills = this._filterSkills(keywords);
  }

  private _filterSkills(keywords?: string[]): CategorizedSkills[] {
    if (!keywords) {
      keywords = [];
    }

    this.selectedCategory = null;

    const finalList: CategorizedSkills[] = [];

    const skills = JSON.parse(JSON.stringify(this.skills)) as Skill[];

    if (!skills) {
      return [];
    }

    const filteredSkills = skills.filter(s => {
      const isFilteringOnKeywords = keywords && keywords.length > 0;

      const hasKeywordMatch = s.keywords.some(alias => keywords.some(keyword => alias.toLowerCase().startsWith(keyword.toLowerCase())));

      return !isFilteringOnKeywords || isFilteringOnKeywords && hasKeywordMatch;
    });

    const uniqueCategories: SkillCategory[] = [];

    filteredSkills.forEach(s => {
      if (!uniqueCategories.some(c => s.category.name.toLowerCase() === c.name.toLowerCase())) {
        uniqueCategories.push(s.category);
      }
    });

    uniqueCategories.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }

      return 0;
    });

    uniqueCategories.forEach(c => {
      finalList.push(
        {
          category: c,
          skills: filteredSkills.filter(s => {
              return s.category && s.category.name.toLowerCase() === c.name.toLowerCase();
          })
        }
      );
    });

    return finalList;
  }
}
