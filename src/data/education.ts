import { Education } from './types';

/**
 * Education data
 * Contains information about academic background and achievements
 */
const education: Education[] = [
  {
    id: "undergrad",
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    institution: "Metropolitan University",
    location: "Sylhet, Bangladesh",
    startDate: "2015",
    endDate: "2019",
    gpa: "3.8/4.0",
    relevantCoursework: [
      "Human-Computer Interaction",
      "Computer Vision",
      "Machine Learning",
      "Data Structures and Algorithms",
      "Database Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Computer Networks"
    ],
    achievements: [
      "2nd Runner-up in University Hackathon",
      "Dean's List: All semesters",
      "Merit-based Scholarship Recipient"
    ],
    thesis: {
      title: "Human-Computer Interaction in Educational Applications",
      description: "Research on improving user interfaces for educational software to enhance student engagement and learning outcomes.",
      url: "/documents/hci-thesis.pdf"
    }
  },
  {
    id: "certification1",
    degree: "Certification",
    field: "Machine Learning",
    institution: "Coursera - Stanford University",
    location: "Online",
    startDate: "2020",
    endDate: "2020",
    achievements: [
      "Completed with Distinction"
    ]
  },
  {
    id: "certification2",
    degree: "Certification",
    field: "Deep Learning Specialization",
    institution: "Coursera - deeplearning.ai",
    location: "Online",
    startDate: "2021",
    endDate: "2021",
    achievements: [
      "Completed all 5 courses with high grades"
    ]
  }
];

export default education;