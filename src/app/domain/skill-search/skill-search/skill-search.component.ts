import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-skill-search',
  templateUrl: './skill-search.component.html',
  styleUrls: ['./skill-search.component.scss']
})
export class SkillSearchComponent implements OnInit {

  private searchRegex: RegExp = /(?:[.|\s,])*([a-zA-Z0-9]+[.\-]*[a-zA-Z0-9]*)(?:[|\s,])*/gi;

  searchForm: FormGroup;

  @Output() keywordsSearched = new EventEmitter<string[]>();

  constructor() {
    this.searchForm = new FormGroup({
      keywords: new FormControl()
    });
  }

  keywordsControl(): AbstractControl {
    return this.searchForm.get('keywords');
  }

  ngOnInit() {
    this.keywordsControl().valueChanges.forEach((keywordSearch: string) => {
      const keywords = [];

      let match = this.searchRegex.exec(keywordSearch);
      if (match !== null && match[1]) {
        keywords.push(match[1]);

        while (match !== null) {
          match = this.searchRegex.exec(keywordSearch);
          if (match !== null && match[1]) {
            keywords.push(match[1]);
          }
        }
      }

      this.keywordsSearched.emit(keywords);

      if (!keywordSearch) {
        this.keywordsControl().markAsPristine();
      }
    });
  }

  clearSearch() {
    this.keywordsControl().setValue('');
  }
}
