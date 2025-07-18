/**
 * Type definitions for portfolio data models
 */

/**
 * Project data model
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'game' | 'academic' | 'personal' | 'professional';
  featured: boolean;
  technologies: string[];
  gameEngine?: string;
  platforms?: string[];
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  achievements?: string[];
  academicSignificance?: string;
}

/**
 * Education data model
 */
export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  relevantCoursework?: string[];
  achievements?: string[];
  thesis?: {
    title: string;
    description: string;
    url?: string;
  };
}

/**
 * Experience data model
 */
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  responsibilities: string[];
  academicRelevance?: string;
  technologies: string[];
}

/**
 * Skill data model
 */
export interface Skill {
  id: string;
  name: string;
  category: 'programming' | 'gamedev' | 'tools' | 'research' | 'soft';
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  relevance: 'high' | 'medium' | 'low';
  academicApplications?: string[];
  industryApplications?: string[];
}

/**
 * Interest data model
 */
export interface Interest {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  links?: Array<{
    title: string;
    url: string;
  }>;
}