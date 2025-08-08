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
  type: "research" | "academic" | "personal" | "professional";
  featured: boolean;
  technologies: string[];
  tags: string[];
  researchAreas?: string[];
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  achievements?: string[];
  methodology?: string;
  results?: string;
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
  startDate?: string;
  endDate?: string;
  date?: string;
  gpa?: string;
  relevantCoursework?: string[];
  achievements?: string[];
  url?: string;
  thesis?: {
    title: string;
    description: string;
    url?: string;
  };
}

/**
 * Experience project/subsection data model
 */
export interface ExperienceProject {
  id: string;
  name: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
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
  endDate: string | "Present";
  description: string;
  responsibilities?: string[];
  projects?: ExperienceProject[];
  technologies: string[];
}

/**
 * Skill data model
 */
export interface Skill {
  id: string;
  name: string;
  category:
    | "programming"
    | "frameworks"
    | "cloud"
    | "databases"
    | "tools"
    | "design"
    | "research"
    | "soft"
    | "ml";
  proficiency: "beginner" | "intermediate" | "advanced" | "expert";
  relevance: "high" | "medium" | "low";
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

/**
 * Contact information data model
 */
export interface ContactInfo {
  name: string;
  location: string;
  email: string;
  phone: string;
  socialLinks: {
    linkedin: string;
    github: string;
    portfolio: string;
  };
  academicProfiles?: {
    googleScholar?: string;
    researchGate?: string;
    orcid?: string;
  };
}
