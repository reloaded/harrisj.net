import { TestBed } from '@angular/core/testing';

import { StaticSkillsService } from './static-skills.service';

describe('StaticSkillsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticSkillsService = TestBed.get(StaticSkillsService);
    expect(service).toBeTruthy();
  });
});
