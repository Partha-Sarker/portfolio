import { Skill } from './types';

/**
 * Skills data
 * Contains information about technical and soft skills
 */
const skills: Skill[] = [
  // Programming Languages
  {
    id: "python",
    name: "Python",
    category: "programming",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Data analysis", "Machine learning", "Computer vision research"],
    industryApplications: ["Backend development", "Data processing", "Automation"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "programming",
    proficiency: "expert",
    relevance: "medium",
    academicApplications: ["Web-based research tools", "Interactive visualizations"],
    industryApplications: ["Web development", "Full-stack applications"]
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "programming",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Type-safe research applications"],
    industryApplications: ["Enterprise applications", "Large-scale web projects"]
  },
  {
    id: "java",
    name: "Java",
    category: "programming",
    proficiency: "intermediate",
    relevance: "medium",
    academicApplications: ["Algorithm implementation", "Desktop applications"],
    industryApplications: ["Enterprise software", "Android development"]
  },
  
  // Frameworks
  {
    id: "react",
    name: "React",
    category: "frameworks",
    proficiency: "expert",
    relevance: "medium",
    academicApplications: ["Research dashboards", "Interactive data visualizations"],
    industryApplications: ["Single-page applications", "Progressive web apps"]
  },
  {
    id: "node",
    name: "Node.js",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["API development for research tools"],
    industryApplications: ["Backend services", "RESTful APIs"]
  },
  {
    id: "express",
    name: "Express.js",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "low",
    industryApplications: ["Web servers", "API development"]
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "frameworks",
    proficiency: "intermediate",
    relevance: "high",
    academicApplications: ["Deep learning research", "Neural network implementation"],
    industryApplications: ["AI solutions", "Predictive modeling"]
  },
  {
    id: "opencv",
    name: "OpenCV",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Computer vision research", "Document analysis", "Image processing"],
    industryApplications: ["Image recognition systems", "Video analysis"]
  },
  
  // Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Research code versioning", "Collaborative projects"],
    industryApplications: ["Version control", "Team collaboration"]
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    proficiency: "intermediate",
    relevance: "medium",
    academicApplications: ["Reproducible research environments"],
    industryApplications: ["Containerization", "Deployment automation"]
  },
  {
    id: "jupyter",
    name: "Jupyter Notebooks",
    category: "tools",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Data analysis", "Research documentation", "Algorithm prototyping"],
    industryApplications: ["Data science workflows", "Exploratory data analysis"]
  },
  
  // Research Skills
  {
    id: "machine-learning",
    name: "Machine Learning",
    category: "research",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Pattern recognition", "Predictive modeling", "Data classification"],
    industryApplications: ["Recommendation systems", "Predictive analytics"]
  },
  {
    id: "computer-vision",
    name: "Computer Vision",
    category: "research",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Document analysis", "Image segmentation", "Feature extraction"],
    industryApplications: ["Object detection", "Image recognition systems"]
  },
  {
    id: "data-analysis",
    name: "Data Analysis",
    category: "research",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Research data processing", "Statistical analysis", "Results interpretation"],
    industryApplications: ["Business intelligence", "Performance analytics"]
  },
  {
    id: "hci",
    name: "Human-Computer Interaction",
    category: "research",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["User interface research", "Usability studies", "Educational technology"],
    industryApplications: ["UX design", "Accessibility implementation"]
  },
  
  // Soft Skills
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "soft",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Research methodology", "Algorithm design"],
    industryApplications: ["Technical challenges", "System architecture"]
  },
  {
    id: "communication",
    name: "Communication",
    category: "soft",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Research presentations", "Academic writing"],
    industryApplications: ["Team collaboration", "Client interactions"]
  },
  {
    id: "teamwork",
    name: "Teamwork",
    category: "soft",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Collaborative research", "Group projects"],
    industryApplications: ["Agile teams", "Cross-functional collaboration"]
  }
];

export default skills;