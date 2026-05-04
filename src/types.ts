export interface Project {
  id: string;
  title: string;
  category: 'Artificial Intelligence' | 'Frontend Development' | 'Augmented Reality';
  tagline: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  features: string[];
  problem: string;
  solution: string;
  githubUrl?: string;
  liveUrl?: string;
  demoVideo?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  details: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
