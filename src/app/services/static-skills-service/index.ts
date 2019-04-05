export interface SkillCategory {
  id: string;
  name: string;
  keywords?: string[];
}

export interface Skill {
  id: string;
  name: string;
  keywords?: string[];
  category: SkillCategory;
  preferred?: boolean;
}

export interface CategorizedSkills {
  category: SkillCategory;
  skills: Skill[];
}
