import { Education } from "./types";
import { getAssetPath } from "../utils/assetUtils";

/**
 * Education data
 * Contains information about academic background and achievements
 */
const education: Education[] = [
  {
    id: "undergrad",
    degree: "B.Sc. in Engineering",
    field: "Computer Science and Engineering",
    institution: "Shahjalal University of Science and Technology (SUST)",
    location: "Sylhet, Bangladesh",
    startDate: "2017",
    endDate: "2021",
    gpa: "3.76/4.0",
    relevantCoursework: [
      "Data Structure",
      "Algorithm",
      "Object Oriented Programming",
      "Machine Learning",
      "Database Systems",
      "Software Engineering",
      "Artificial Intelligence",
      "Computer Networks",
    ],
    achievements: [
      "National Hackathon: 2nd Runner-up (LICT SUST Techfest 2019)",
      "Merit-based Scholarship for Academic Excellence (Top 10%)",
      "Competitive Programming: 500+ problems solved on various online judges",
      "Problem Solving (Basic) Certificate - HackerRank",
    ],
    thesis: {
      title: "A Notification Based Nudge for Handling Excessive Smartphone Use",
      description:
        "Research on reducing excessive smartphone usage through notification-based interventions that increase self-awareness without causing annoyance. Developed 'App Usage Monitor' that reduced smartphone usage by over 6% through subtle nudges and visualization techniques. Advisor: Marium-E-Jannat",
      url: "https://arxiv.org/abs/2507.14702",
    },
  },
  {
    id: "ielts",
    degree: "Certification",
    field: "IELTS Academic",
    institution: "British Council",
    location: "Sylhet, Bangladesh",
    date: "2022",
    achievements: [
      "Overall Score: 7.5",
      "Listening: 8.0, Reading: 8.0",
      "Speaking: 6.5, Writing: 6.5",
    ],
  },
  {
    id: "certification1",
    degree: "Certification",
    field: "Machine Learning Foundations: A Case Study Approach",
    institution: "University of Washington",
    location: "Online",
    date: "Jun 2020",
    url: "https://coursera.org/share/839242a113dfd489b53d758a5fe05c10",
    achievements: ["Grade Achieved: 100%"],
  },
  {
    id: "certification2",
    degree: "Certification",
    field: "Create Your First Chatbot with Rasa and Python",
    institution: "Coursera",
    location: "Online",
    date: "May 2020",
    url: "https://coursera.org/share/f317760aa866779d8c4c4c8d981ec749",
    achievements: ["Grade Achieved: 100%"],
  },
  {
    id: "certification3",
    degree: "Certification",
    field: "Problem Solving (Basic)",
    institution: "HackerRank",
    location: "Online",
    date: "Mar 2021",
    url: "https://www.hackerrank.com/certificates/f3603db7b2b1",
    achievements: ["Covers Data Structures and Algorithms"],
  },
  {
    id: "certification4",
    degree: "Certification",
    field: "Claude Code in Action",
    institution: "Anthropic",
    location: "Online",
    date: "Sep 2025",
    url: "https://verify.skilljar.com/c/vpucg7jagzs2",
    achievements: ["Covers Claude Code’s architecture, usage, and integrations"],
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Science",
    institution: "MC College",
    location: "Sylhet, Bangladesh",
    startDate: "2014",
    endDate: "2016",
    gpa: "5.00/5.00",
    achievements: [
      "Perfect GPA Score",
      "General Scholarship for Academic Excellence",
      "Science Group",
    ],
  },
  {
    id: "secondary",
    degree: "Secondary School Certificate (SSC)",
    field: "Science",
    institution: "Sylhet Government Pilot High School",
    location: "Sylhet, Bangladesh",
    startDate: "2012",
    endDate: "2014",
    gpa: "5.00/5.00",
    achievements: ["Perfect GPA Score", "Science Group"],
  },
];

export default education;
