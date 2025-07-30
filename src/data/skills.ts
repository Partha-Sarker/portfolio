import { Skill } from './types';

/**
 * Skills data
 * Contains information about technical and soft skills organized by category
 */
const skills: Skill[] = [
  // Programming Languages
  {
    id: "java",
    name: "Java",
    category: "programming",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Algorithm implementation", "Desktop applications", "Data structures"],
    industryApplications: ["Enterprise software", "Spring Boot applications", "Microservices"]
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "programming",
    proficiency: "expert",
    relevance: "medium",
    academicApplications: ["Interactive web applications", "Research tools"],
    industryApplications: ["Frontend development", "API integration", "Automation scripts"]
  },
  {
    id: "python",
    name: "Python",
    category: "programming",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Computer vision research", "Machine learning", "Document analysis"],
    industryApplications: ["Data processing", "Automation", "Web scraping"]
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "programming",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Type-safe research applications", "Research dashboards"],
    industryApplications: ["Large-scale applications", "Enterprise projects"]
  },
  {
    id: "csharp",
    name: "C#",
    category: "programming",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Unity game development", "Desktop tools"],
    industryApplications: ["Client projects", "Mathematical applications"]
  },
  {
    id: "php",
    name: "PHP",
    category: "programming",
    proficiency: "advanced",
    relevance: "low",
    academicApplications: ["Web projects", "Volunteer management systems"],
    industryApplications: ["Government systems", "Web applications"]
  },
  {
    id: "sql",
    name: "SQL",
    category: "programming",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Research data management"],
    industryApplications: ["Database design", "Query optimization", "Performance tuning"]
  },
  {
    id: "cpp",
    name: "C++",
    category: "programming",
    proficiency: "intermediate",
    relevance: "medium",
    academicApplications: ["Computer graphics", "Algorithm implementation"],
    industryApplications: ["System programming", "Performance-critical applications"]
  },

  // Frameworks & Libraries
  {
    id: "react",
    name: "React",
    category: "frameworks",
    proficiency: "expert",
    relevance: "medium",
    academicApplications: ["Research dashboards", "Interactive data visualizations"],
    industryApplications: ["Single-page applications", "Dashboard development"]
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    category: "frameworks",
    proficiency: "expert",
    relevance: "medium",
    academicApplications: ["Research API development"],
    industryApplications: ["Microservices", "REST APIs", "Enterprise systems"]
  },
  {
    id: "unity",
    name: "Unity",
    category: "frameworks",
    proficiency: "expert",
    relevance: "medium",
    academicApplications: ["Game development", "AR applications"],
    industryApplications: ["Client projects", "Mathematical simulations"]
  },
  {
    id: "ar-development",
    name: "AR Development",
    category: "frameworks",
    proficiency: "intermediate",
    relevance: "medium",
    academicApplications: ["Augmented reality applications", "Interactive experiences"],
    industryApplications: ["AR applications", "Mobile AR"]
  },
  {
    id: "unreal-engine",
    name: "Unreal Engine",
    category: "frameworks",
    proficiency: "intermediate",
    relevance: "low",
    academicApplications: ["3D game development", "Realistic graphics"],
    industryApplications: ["Game prototyping", "Interactive experiences"]
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Research web applications"],
    industryApplications: ["Server-side rendering", "Modern web applications"]
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Web scraping", "Research tools"],
    industryApplications: ["API development", "Automation tools"]
  },
  {
    id: "opencv",
    name: "OpenCV",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Document analysis", "Image segmentation", "Pattern recognition"],
    industryApplications: ["Image recognition systems", "Video analysis"]
  },
  {
    id: "laravel",
    name: "Laravel",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "low",
    academicApplications: ["Web development projects"],
    industryApplications: ["Government systems", "Web applications"]
  },
  {
    id: "angularjs",
    name: "AngularJS",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "low",
    academicApplications: [],
    industryApplications: ["Legacy system maintenance", "Web applications"]
  },
  {
    id: "material-ui",
    name: "Material-UI",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Modern UI development", "Responsive design"],
    industryApplications: ["React component library", "UI development"]
  },

  {
    id: "jquery",
    name: "jQuery",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "low",
    academicApplications: ["Web development", "Interactive applications"],
    industryApplications: ["Legacy web applications", "DOM manipulation"]
  },
  {
    id: "vexflow",
    name: "VexFlow",
    category: "frameworks",
    proficiency: "intermediate",
    relevance: "low",
    academicApplications: ["Musical applications", "Notation display"],
    industryApplications: ["Music notation rendering", "Educational tools"]
  },
  {
    id: "javafx",
    name: "JavaFX",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["GUI development", "Multimedia applications"],
    industryApplications: ["Desktop applications", "Rich client applications"]
  },
  {
    id: "opengl",
    name: "OpenGL/GLUT",
    category: "frameworks",
    proficiency: "intermediate",
    relevance: "medium",
    academicApplications: ["Graphics programming", "Geometric transformations"],
    industryApplications: ["Computer graphics", "3D rendering"]
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "low",
    academicApplications: ["Responsive web design"],
    industryApplications: ["CSS framework", "Rapid prototyping"]
  },
  {
    id: "beautifulsoup",
    name: "BeautifulSoup",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Web scraping", "Data extraction"],
    industryApplications: ["Data mining", "Content extraction"]
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Modern styling", "Responsive design"],
    industryApplications: ["Utility-first CSS", "Rapid development"]
  },

  // ml Frameworks & Libraries
  {
    id: "pytorch",
    name: "PyTorch",
    category: "ml",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Deep learning research", "Neural network implementation", "Computer vision"],
    industryApplications: ["Machine learning models", "AI applications"]
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    category: "ml",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Machine learning research", "Deep learning models"],
    industryApplications: ["Production ML models", "AI systems"]
  },
  {
    id: "keras",
    name: "Keras",
    category: "ml",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Neural network prototyping", "Deep learning experiments"],
    industryApplications: ["Rapid ML development", "Model prototyping"]
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    category: "ml",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Machine learning algorithms", "Data analysis", "Statistical modeling"],
    industryApplications: ["Predictive analytics", "Data science workflows"]
  },
  {
    id: "numpy",
    name: "NumPy",
    category: "ml",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Numerical computing", "Scientific computing", "Data analysis"],
    industryApplications: ["Data processing", "Mathematical computations"]
  },
  {
    id: "pandas",
    name: "Pandas",
    category: "ml",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Data manipulation", "Statistical analysis", "Research data processing"],
    industryApplications: ["Data analysis", "ETL processes"]
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    category: "ml",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Data visualization", "Research plots", "Statistical charts"],
    industryApplications: ["Data visualization", "Reporting dashboards"]
  },

  // Cloud & DevOps
  {
    id: "aws",
    name: "AWS",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Research infrastructure", "Data storage"],
    industryApplications: ["Real-time monitoring", "Serverless computing", "Data storage"]
  },
  {
    id: "docker",
    name: "Docker",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Reproducible research environments"],
    industryApplications: ["Application containerization", "Deployment automation"]
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Research platform deployment"],
    industryApplications: ["Scalable deployments", "Microservices management"]
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "cloud",
    proficiency: "advanced",
    relevance: "low",
    academicApplications: [],
    industryApplications: ["Deployment pipelines", "Automated testing"]
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Static site deployment"],
    industryApplications: ["Frontend deployment", "Serverless functions"]
  },
  {
    id: "nginx",
    name: "Nginx",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Web server configuration"],
    industryApplications: ["Load balancing", "Reverse proxy"]
  },
  {
    id: "helm",
    name: "Helm Charts",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Application deployment"],
    industryApplications: ["Kubernetes package management", "Configuration management"]
  },
  {
    id: "minio",
    name: "MinIO",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["File storage"],
    industryApplications: ["Object storage", "Distributed systems"]
  },

  // Databases
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "databases",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Research data storage"],
    industryApplications: ["Data modeling", "Query optimization", "Performance tuning"]
  },
  {
    id: "mssql",
    name: "MS SQL Server",
    category: "databases",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Enterprise data management"],
    industryApplications: ["Enterprise applications", "Complex queries"]
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "databases",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Academic projects", "Web development"],
    industryApplications: ["Web applications", "Data storage"]
  },
  {
    id: "oracle",
    name: "Oracle Database",
    category: "databases",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Large-scale data management"],
    industryApplications: ["Government systems", "Enterprise applications"]
  },
  {
    id: "dynamodb",
    name: "DynamoDB",
    category: "databases",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["NoSQL data storage", "Research data management"],
    industryApplications: ["Real-time applications", "Serverless architectures", "Scalable NoSQL storage"]
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "databases",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Mobile app development", "Real-time databases"],
    industryApplications: ["Backend-as-a-Service", "Real-time applications"]
  },

  // Development Tools
  {
    id: "git",
    name: "Git",
    category: "tools",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Research code versioning", "Collaborative projects"],
    industryApplications: ["Code collaboration", "Project management"]
  },
  {
    id: "android-studio",
    name: "Android Studio",
    category: "tools",
    proficiency: "expert",
    relevance: "medium",
    academicApplications: ["Android app development", "Mobile research"],
    industryApplications: ["Mobile development", "App prototyping"]
  },
  {
    id: "jupyter",
    name: "Jupyter Notebook",
    category: "tools",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Data analysis", "Research documentation", "Algorithm prototyping"],
    industryApplications: ["Data science workflows", "Exploratory data analysis"]
  },
  {
    id: "mockito",
    name: "Mockito",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Test-driven development"],
    industryApplications: ["Unit testing", "Java testing framework"]
  },
  {
    id: "jest",
    name: "Jest",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Frontend testing"],
    industryApplications: ["JavaScript testing", "Automated testing"]
  },
  {
    id: "storybook",
    name: "Storybook",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Component documentation"],
    industryApplications: ["UI component development", "Component testing"]
  },
  {
    id: "liquibase",
    name: "Liquibase",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Database versioning"],
    industryApplications: ["Database schema management", "Migrations"]
  },
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Asynchronous processing"],
    industryApplications: ["Message queuing", "Microservices communication"]
  },
  {
    id: "keycloak",
    name: "Keycloak",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Identity management"],
    industryApplications: ["Authentication", "Authorization", "SSO"]
  },
  {
    id: "cdk",
    name: "CDK",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Infrastructure as code"],
    industryApplications: ["AWS resource management", "Cloud infrastructure"]
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Code collaboration"],
    industryApplications: ["Git repository hosting", "CI/CD"]
  },
  {
    id: "jira",
    name: "Jira",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Project tracking"],
    industryApplications: ["Issue tracking", "Agile development"]
  },
  {
    id: "launchdarkly",
    name: "LaunchDarkly",
    category: "tools",
    proficiency: "advanced",
    relevance: "low",
    academicApplications: [],
    industryApplications: ["Feature flag management", "A/B testing"]
  },
  {
    id: "preset",
    name: "Preset",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Data visualization"],
    industryApplications: ["Analytics dashboards", "Data insights"]
  },
  {
    id: "churnzero",
    name: "ChurnZero",
    category: "tools",
    proficiency: "advanced",
    relevance: "low",
    academicApplications: [],
    industryApplications: ["Customer analytics", "Retention tracking"]
  },
  {
    id: "claude-cli",
    name: "Claude CLI",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["AI-assisted development"],
    industryApplications: ["Code assistance", "Development productivity"]
  },
  {
    id: "localstack",
    name: "Localstack",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Local cloud development"],
    industryApplications: ["AWS local testing", "Development environment"]
  },
  {
    id: "windsurf",
    name: "Windsurf",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Development environment"],
    industryApplications: ["Code editing", "Development workflow"]
  },
  {
    id: "lens",
    name: "Lens",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Kubernetes management"],
    industryApplications: ["Kubernetes IDE", "Cluster management"]
  },

  // Design & Creative Tools
  {
    id: "photoshop",
    name: "Photoshop",
    category: "design",
    proficiency: "intermediate",
    relevance: "low",
    academicApplications: ["Research presentations", "Visual documentation"],
    industryApplications: ["Image manipulation", "Graphic design", "Visual assets"]
  },
  {
    id: "blender",
    name: "Blender",
    category: "design",
    proficiency: "intermediate",
    relevance: "low",
    academicApplications: ["3D asset creation", "Animation projects"],
    industryApplications: ["3D modeling", "Rendering", "Creative visualization"]
  },

  // Research Skills
  {
    id: "computer-vision",
    name: "Computer Vision",
    category: "research",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Document analysis", "Pattern recognition", "Image segmentation"],
    industryApplications: ["Object detection", "Image recognition systems"]
  },
  {
    id: "hci",
    name: "Human-Computer Interaction",
    category: "research",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Usability studies", "Behavioral interventions", "Educational technology"],
    industryApplications: ["User experience design", "Accessibility implementation"]
  },
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
    id: "data-analysis",
    name: "Data Analysis",
    category: "research",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Research data processing", "Statistical analysis", "Results interpretation"],
    industryApplications: ["Performance analytics", "Business intelligence"]
  },

  {
    id: "document-analysis",
    name: "Document Analysis",
    category: "research",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Handwritten text recognition", "Document segmentation"],
    industryApplications: ["Digital archiving", "Automated processing"]
  },

  // Mathematical & Research Skills (moved from specialized)
  {
    id: "statistical-analysis",
    name: "Statistical Analysis",
    category: "research",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Data interpretation", "Research methodology"],
    industryApplications: ["Data modeling", "Business analytics"]
  },



  // Cloud Architecture Skills (moved from specialized)
  {
    id: "microservices",
    name: "Microservices Architecture",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Distributed system design"],
    industryApplications: ["System architecture", "Scalable applications"]
  },

  // Database Skills (moved from specialized)
  {
    id: "database-optimization",
    name: "Database Optimization",
    category: "databases",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Query performance"],
    industryApplications: ["Performance tuning", "Indexing strategies"]
  },

  // Development Tools (moved from specialized)
  {
    id: "oauth",
    name: "OAuth Implementation",
    category: "tools",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Single sign-on systems"],
    industryApplications: ["Authentication", "Security implementation"]
  },

  // Soft Skills
  {
    id: "problem-solving",
    name: "Problem Solving",
    category: "soft",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Research methodology", "Algorithm design"],
    industryApplications: ["System optimization", "Performance improvements"]
  },
  {
    id: "communication",
    name: "Communication",
    category: "soft",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Research presentations", "Technical documentation"],
    industryApplications: ["Team collaboration", "Stakeholder communication"]
  },
  {
    id: "project-management",
    name: "Project Management",
    category: "soft",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Research project coordination"],
    industryApplications: ["Feature delivery", "Timeline management"]
  },
  {
    id: "teamwork",
    name: "Teamwork",
    category: "soft",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Group projects", "Research collaboration"],
    industryApplications: ["Agile teams", "Cross-functional collaboration"]
  },
  {
    id: "learning-agility",
    name: "Learning Agility",
    category: "soft",
    proficiency: "expert",
    relevance: "high",
    academicApplications: ["Research methodology", "New domain exploration"],
    industryApplications: ["Technology adoption", "Skill enhancement"]
  },

  // Additional Skills from CV
  {
    id: "arcore",
    name: "ARCore",
    category: "frameworks",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Augmented reality research", "Mobile AR applications"],
    industryApplications: ["AR mobile development", "Interactive experiences"]
  },
  {
    id: "sqs",
    name: "AWS SQS",
    category: "cloud",
    proficiency: "advanced",
    relevance: "medium",
    academicApplications: ["Distributed system messaging"],
    industryApplications: ["Message queuing", "Asynchronous processing"]
  },
  {
    id: "teaching",
    name: "Teaching & Mentoring",
    category: "soft",
    proficiency: "advanced",
    relevance: "high",
    academicApplications: ["Guest lecturing", "Academic instruction", "Knowledge transfer"],
    industryApplications: ["Team mentoring", "Training delivery", "Knowledge sharing"]
  }
];

export default skills;