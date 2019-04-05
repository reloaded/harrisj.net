import {Skill, SkillCategory} from '../../services/static-skills-service';

export namespace SkillTreeModule {

  export interface SkillTreeConfig {
    skills: Skill[];
    defaultSelectedCategory?: SkillCategory;
  }

  // export interface SkillCategory {
  //   id: string;
  //   name: string;
  //   keywords?: string[];
  // }
  //
  // export interface Skill {
  //   id: string;
  //   name: string;
  //   keywords?: string[];
  //   category: SkillCategory;
  //   preferred?: boolean;
  // }
  //
  // export interface CategorizedSkills {
  //   category: SkillCategory;
  //   skills: Skill[];
  // }

  // export interface SkillsService {
  //   allSkills(): CategorizedSkills[];
  // }
}
