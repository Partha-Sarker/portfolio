import { Experience } from './types';

/**
 * Experience data
 * Contains information about professional work history
 */
const experience: Experience[] = [
  {
    id: "marginedge-software-engineer",
    role: "Software Engineer I",
    company: "MarginEdge",
    location: "Remote",
    startDate: "August 2024",
    endDate: "Present",
    description: "Working on MarginEdge, a comprehensive restaurant management software that streamlines back-office operations and enhances financial oversight with real-time insights into food and labor costs.",
    responsibilities: [
      "Optimized core data-copying system (Multi-Unit PMIX), reducing processing time from **80-100 min to 3 min**, improving uptime and reliability",
      "Built real-time dashboards and panic toggles in AWS CloudWatch, reducing incident triage time by **60%**",
      "Delivered labor data selection feature (frontend + backend), integrated alarms, and ensured on-time delivery",
      "Developed a data comparison and alert system for post-migration checks, proactively preventing data loss issues",
      "Collaborated with QA and product teams; **recognized by PMs** for clarity and delivery reliability",
      "Received **perfect performance review** with **Exceeding Expectations** rating in all 5 categories: Ownership, Ambiguous Problem Handling, Technical Depth, Team Initiative, and System Operations"
    ],

    technologies: ["Spring Boot", "PostgreSQL", "React", "AngularJS", "AWS", "CloudWatch", "DynamoDB", "S3", "Lambda", "Jenkins", "Java", "JavaScript", "TypeScript"]
  },
  {
    id: "dsi-software-engineer",
    role: "Software Engineer",
    company: "Dynamic Solution Innovators",
    location: "Dhaka, Bangladesh",
    startDate: "May 2021",
    endDate: "July 2024",
    description: "Worked on large-scale national digital platforms for the Government of Bangladesh, contributing to systems that serve millions of citizens and students across the country.",
    projects: [
      {
        id: "ieims",
        name: "IEIMS (Integrated Education Information Management System)",
        description: "A national digital platform developed by the Ministry of Education, Bangladesh, to centralize and streamline the management of secondary and higher secondary education serving over 20 million students across the country.",
        responsibilities: [
          "Developed registration, form fill-up, and payment modules in a microservice-based national education platform",
          "Created QR-based attendance system, reducing manual workload by **80%**",
          "Streamlined multi-step form workflows with robust frontend and backend integration",
          "Configured deployment pipelines using Jenkins, containerized services with Docker, and managed deployment with Kubernetes, ensuring smooth rollouts and minimizing downtime"
        ],
        technologies: ["Spring Boot", "Next.js", "Kubernetes", "Docker", "Jenkins", "MS SQL Server", "MySQL", "React", "Node.js", "RabbitMQ", "Keycloak", "Java", "JavaScript", "Tailwind CSS", "Liquibase", "Nginx", "Helm Charts", "MinIO"]
      },
      {
        id: "crvs",
        name: "CRVS (Civil Registration and Vital Statistics)",
        description: "A national system in Bangladesh for recording and managing vital events such as births, deaths, marriages, and divorces. The system integrates with various government platforms and supports over 10 million students.",
        responsibilities: [
          "Enhanced reporting and automated digital ID creation for **10M+ students**",
          "Improved system performance by adding **10+ database indexes** and optimizing queries, reducing key data fetch times from **50+ seconds to 4 seconds**",
          "Integrated with various government platforms for seamless vital statistics management",
          "Developed efficient data processing workflows for large-scale government operations"
        ],
        technologies: ["Laravel", "Oracle Database", "PHP", "SQL"]
      }
    ],
    technologies: ["Spring Boot", "Next.js", "Kubernetes", "Docker", "Jenkins", "MS SQL Server", "MySQL", "Oracle Database", "Laravel", "React", "Node.js", "RabbitMQ", "Keycloak", "Java", "JavaScript", "PHP", "Tailwind CSS", "Liquibase", "Nginx", "Helm Charts", "MinIO"]
  }
];

export default experience;