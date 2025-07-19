import { Experience } from './types';

/**
 * Experience data
 * Contains information about professional work history
 */
const experience: Experience[] = [
  {
    id: "software-engineer-1",
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    startDate: "2022",
    endDate: "Present",
    description: "Working on full-stack development for enterprise applications with a focus on scalable architecture and performance optimization.",
    responsibilities: [
      "Developed and maintained RESTful APIs using Node.js and Express",
      "Implemented front-end features using React and TypeScript",
      "Optimized database queries and schema design for MongoDB",
      "Collaborated with cross-functional teams to deliver features on schedule",
      "Conducted code reviews and mentored junior developers"
    ],
    researchRelevance: "Applied machine learning algorithms to improve search functionality and data analysis features.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express", "Docker"]
  },
  {
    id: "junior-developer",
    role: "Junior Developer",
    company: "Web Innovations Ltd.",
    location: "Dhaka, Bangladesh",
    startDate: "2019",
    endDate: "2022",
    description: "Worked on web application development with a focus on user interface and experience.",
    responsibilities: [
      "Developed responsive web interfaces using React and Material UI",
      "Implemented backend functionality using Node.js and Express",
      "Created and maintained RESTful APIs",
      "Participated in agile development processes",
      "Collaborated with designers to implement UI/UX improvements"
    ],
    researchRelevance: "Implemented computer vision algorithms for an image processing feature that aligned with my research interests.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "MySQL", "Git"]
  },
  {
    id: "research-assistant",
    role: "Research Assistant",
    company: "Metropolitan University",
    location: "Sylhet, Bangladesh",
    startDate: "2018",
    endDate: "2019",
    description: "Assisted faculty with research in computer vision and document analysis.",
    responsibilities: [
      "Collected and preprocessed data for handwritten document analysis",
      "Implemented image processing algorithms using OpenCV and Python",
      "Conducted literature reviews on document segmentation techniques",
      "Documented research findings and contributed to publications",
      "Presented research progress in departmental seminars"
    ],
    researchRelevance: "Directly contributed to research in handwritten document segmentation, which became the foundation for my featured research project.",
    technologies: ["Python", "OpenCV", "NumPy", "Matplotlib", "Jupyter Notebooks"]
  },
  {
    id: "intern",
    role: "Software Development Intern",
    company: "Local Tech Startup",
    location: "Sylhet, Bangladesh",
    startDate: "2018",
    endDate: "2018",
    description: "Three-month internship focused on web development and UI design.",
    responsibilities: [
      "Assisted in developing front-end components using React",
      "Created responsive layouts and implemented UI designs",
      "Participated in code reviews and team meetings",
      "Learned industry best practices for software development"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git"]
  }
];

export default experience;