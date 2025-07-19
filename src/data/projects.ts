import { Project } from './types';

/**
 * Projects data
 * Contains information about personal, professional, and academic projects
 */
const projects: Project[] = [
  {
    id: "notification-nudge-hci",
    title: "Notification-Based Nudge for Behavior Change",
    description: "Research on using notification-based nudges to influence user behavior in digital environments.",
    type: "research",
    featured: true,
    technologies: ["User Research", "Behavioral Psychology", "Mobile UX Design", "Notification Systems"],
    researchAreas: ["HCI", "Behavioral Economics", "Digital Nudging", "User Experience"],
    documentationUrl: "/info/notification_based_nudge_hci.pdf",
    imageUrl: "/images/projects/notification-nudge.jpg",
    methodology: "Conducted experimental research on notification timing, content, and presentation to evaluate their effectiveness in nudging user behavior.",
    results: "Demonstrated significant behavior change through strategically designed notification systems with minimal user friction.",
    academicSignificance: "Contributes to the growing field of digital nudging and behavioral design, with applications in health, education, and productivity applications."
  },
  {
    id: "handwritten-segmentation",
    title: "Bangla Handwritten Word Segmentation",
    description: "Segments Bengali handwritten documents into words using computer vision techniques.",
    type: "research",
    featured: true,
    technologies: ["Python", "OpenCV", "NumPy", "Matplotlib"],
    researchAreas: ["Computer Vision", "Document Analysis", "Pattern Recognition"],
    githubUrl: "https://github.com/Partha-Sarker/Bangla-handwritten-word-segmentation-from-document",
    imageUrl: "/images/projects/handwritten-segmentation.jpg",
    methodology: "Implemented image processing techniques including thresholding, connected component analysis, and contour detection to identify and extract individual words from handwritten Bengali documents.",
    results: "Successfully segmented words with 92% accuracy across various handwriting styles and document qualities.",
    academicSignificance: "Contributes to the field of optical character recognition for Bengali script, with potential applications in digital archiving and automated document processing."
  },
  {
    id: "hci-thesis",
    title: "Human-Computer Interaction Thesis",
    description: "Research on improving user interfaces for educational applications.",
    type: "research",
    featured: true,
    technologies: ["User Research", "Prototyping", "Usability Testing"],
    researchAreas: ["HCI", "Educational Technology", "User Experience"],
    documentationUrl: "/documents/hci-thesis.pdf",
    imageUrl: "/images/projects/hci-thesis.jpg",
    methodology: "Conducted user research with 50+ participants, created interactive prototypes, and performed usability testing to evaluate interface designs.",
    results: "Identified key usability patterns that improved learning outcomes by 25% in educational applications.",
    academicSignificance: "Provides design guidelines for educational software that enhances student engagement and learning efficiency."
  },
  {
    id: "portfolio-website",
    title: "Academic Portfolio Website",
    description: "Personal portfolio website showcasing academic achievements and research projects.",
    type: "personal",
    featured: false,
    technologies: ["React", "TypeScript", "Material UI"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio-website.com",
    imageUrl: "/images/projects/portfolio.jpg"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with inventory management and payment processing.",
    type: "professional",
    featured: false,
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    imageUrl: "/images/projects/ecommerce.jpg",
    academicSignificance: "Implemented advanced data structures for efficient product categorization and search algorithms."
  },
  {
    id: "machine-learning-classifier",
    title: "Image Classification System",
    description: "Machine learning model for classifying images using convolutional neural networks.",
    type: "academic",
    featured: false,
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV"],
    researchAreas: ["Machine Learning", "Computer Vision", "Deep Learning"],
    githubUrl: "https://github.com/username/image-classifier",
    imageUrl: "/images/projects/ml-classifier.jpg",
    methodology: "Developed and trained a CNN architecture on a dataset of 10,000 images across 10 categories.",
    results: "Achieved 89% classification accuracy on the test dataset.",
    academicSignificance: "Explored optimization techniques for CNN training with limited computational resources."
  }
];

export default projects;