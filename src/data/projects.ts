import { Project } from './types';

/**
 * Projects data
 * Contains information about research, academic, and personal projects
 */
const projects: Project[] = [
  // Featured Projects (Top Priority)
  {
    id: "ar-girl",
    title: "AR Girl (Augmented Reality)",
    description: "Implemented a third person Augmented Reality controller to take your favorite character to walk anywhere in the real world using Unity. Demonstrates AR development and 3D character control.",
    type: "personal",
    featured: true,
    technologies: ["Unity", "AR", "C#"],
    githubUrl: "https://github.com/Partha-Sarker/AR-Girl",
    academicSignificance: "Showcases advanced understanding of augmented reality technologies and 3D character control systems, demonstrating innovation in immersive technology applications."
  },
  {
    id: "fight-multiplayer-game",
    title: "FIGHT - 3D Multiplayer Game",
    description: "3d, 1v1, third person multiplayer game for android and windows. Features real-time multiplayer combat with 3D graphics and cross-platform compatibility.",
    type: "academic",
    featured: true,
    technologies: ["Unity", "C#"],
    githubUrl: "https://github.com/Partha-Sarker/Fighting-Game-3d-Multiplayer-Unity3d",
    academicSignificance: "Demonstrates advanced game development skills including real-time networking, cross-platform deployment, and complex 3D game mechanics implementation."
  },

  // Featured Research Projects
  {
    id: "app-usage-monitor",
    title: "App Usage Monitor",
    description: "Tracks, collects, visualizes android app usage statistics. Also, one can set daily and weekly usage targets for individual apps and get notified about their usage. Part of thesis research on notification-based nudges for reducing excessive smartphone usage.",
    type: "research",
    featured: true,
    technologies: ["Java", "Android Studio", "Firebase"],
    researchAreas: ["Human-Computer Interaction", "Behavioral Nudges", "Mobile Computing"],
    githubUrl: "https://github.com/diptodeydip/App_Usage_Tracker",
    methodology: "Developed an Android application that tracks user app usage patterns and implements notification-based interventions to reduce excessive smartphone use. Combined usage tracking, visualization, and strategic notifications to increase self-awareness.",
    results: "Achieved over 6% reduction in smartphone usage through subtle nudges and visualization techniques. Conducted user study (n=109) followed by 3-week experiment with 16 volunteers.",
    academicSignificance: "Contributes to research on digital wellbeing and behavioral intervention design. Demonstrates practical application of HCI principles in addressing technology overuse."
  },
  {
    id: "handwritten-segmentation",
    title: "Bangla Handwritten Word Segmentation",
    description: "Implemented word segmentation from a handwritten document using OpenCV and Python. Segments Bengali handwritten documents into individual words using computer vision techniques.",
    type: "research",
    featured: true,
    technologies: ["Python", "OpenCV"],
    researchAreas: ["Computer Vision", "Document Analysis", "Pattern Recognition"],
    githubUrl: "https://github.com/Partha-Sarker/Bangla-handwritten-word-segmentation-from-document",
    methodology: "Implemented image processing techniques including thresholding, connected component analysis, and contour detection to identify and extract individual words from handwritten Bengali documents.",
    results: "Successfully segmented words with high accuracy across various handwriting styles and document qualities.",
    academicSignificance: "Contributes to the field of optical character recognition for Bengali script, with potential applications in digital archiving and automated document processing."
  },

  // Academic Projects
  {
    id: "echo-sign-language",
    title: "ECHO - Sign Language Interpreter",
    description: "An android app designed for transforming among text, speech and sign languages. Enables bidirectional communication to help disabled people. Winner of 2nd Runner-up at LICT SUST Techfest Hackathon 2019.",
    type: "academic",
    featured: false,
    technologies: ["Android Studio", "Java"],
    researchAreas: ["Human-Computer Interaction", "Accessibility"],
    githubUrl: "https://github.com/Boorhan/Echo-Sign-Language-Interpreter",
    achievements: ["2nd Runner-up at National Hackathon", "Built within 40 hours"],
    academicSignificance: "Demonstrates application of HCI principles in accessibility technology and inclusive design."
  },
  {
    id: "p2p-messaging",
    title: "P2P Messaging App",
    description: "Implemented java socket programming for chatting and sharing text files over the same network. Demonstrates understanding of network programming and peer-to-peer communication.",
    type: "academic",
    featured: false,
    technologies: ["Android Studio", "Java"],
    githubUrl: "https://github.com/Partha-Sarker/Peer-2-Peer-messaging-app"
  },
  {
    id: "find-volunteer",
    title: "Find Volunteer",
    description: "Web project built for collaborating volunteer and various events organized by the organizations. Join as organization, then create event and post circular. Or, join as volunteer and participate in events.",
    type: "academic",
    featured: false,
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/Partha-Sarker/Find-Volunteer-Web-Project-using-Laravel"
  },
  {
    id: "offline-diary",
    title: "Offline Diary",
    description: "Create diaries and store everyday memories on the local machine. Can also store and playback media files. Desktop application with multimedia support.",
    type: "academic",
    featured: false,
    technologies: ["Java", "JavaFX", "CSS"],
    githubUrl: "https://github.com/Partha-Sarker/Bangla-handwritten-word-segmentation-from-document"
  },
  {
    id: "glut-polygon",
    title: "Glut Polygon Drawing",
    description: "Simple app for drawing and transforming polygon. Demonstrates computer graphics programming and geometric transformations.",
    type: "academic",
    featured: false,
    technologies: ["C++", "OpenGL", "GLUT"],
    githubUrl: "https://github.com/Partha-Sarker/Glut-Polygon-Drawing"
  },
  {
    id: "block-the-balls",
    title: "Block the Balls",
    description: "2d game for blocking multi-directional balls with uni-directional sticks. Physics-based game demonstrating collision detection and game mechanics.",
    type: "academic",
    featured: false,
    technologies: ["Unity", "C#"],
    githubUrl: "https://github.com/Partha-Sarker/Block-The-Balls-Project-250"
  },
  {
    id: "shikha-game",
    title: "Shikha",
    description: "Shikha is a 2d, side scrolling, puzzle-adventure game built with Unity game engine. Features level progression and puzzle-solving mechanics.",
    type: "academic",
    featured: false,
    technologies: ["Unity", "C#"],
    githubUrl: "https://github.com/Partha-Sarker/Shikha"
  },

  // Personal Projects
  {
    id: "csranking-crawler",
    title: "CS Ranking Crawler",
    description: "A crawler built with node to crawl https://csrankings.org for university and professor based on research interest. Useful for academic research and university selection.",
    type: "personal",
    featured: false,
    technologies: ["Node.js", "JavaScript"],
    githubUrl: "https://github.com/Partha-Sarker/cs-ranking-crawler"
  },
  {
    id: "spring-sso",
    title: "Spring SSO",
    description: "SSO Built using spring oauth server. Demonstrates understanding of authentication systems and OAuth implementation.",
    type: "personal",
    featured: false,
    technologies: ["Spring", "Java"],
    githubUrl: "https://github.com/Partha-Sarker/cs-ranking-crawler"
  },
  {
    id: "piano-practice",
    title: "Piano Notation Practice",
    description: "Implemented a piano note practice app using JavaScript to help with musical notation and sheet music recognition. Combines programming skills with musical interests.",
    type: "personal",
    featured: false,
    technologies: ["JavaScript", "jQuery", "VexFlow"],
    githubUrl: "https://github.com/Partha-Sarker/Piano-Note-Practice-html-js"
  },
  {
    id: "linear-equation-solver",
    title: "Linear Equation Solver",
    description: "Desktop app for solving linear equations via Gaussian elimination method built using Unity. Educational tool demonstrating mathematical algorithms.",
    type: "personal",
    featured: false,
    technologies: ["Unity", "C#"],
    githubUrl: "https://github.com/Partha-Sarker/Solve-Linear-Euations-and-Draw-Petri-Net-Using-Unity"
  },
  {
    id: "kill-the-traitors",
    title: "Kill-The-Traitors",
    description: "Implemented a 3D third-person shooter game based on the Bangladesh Liberation War using Unity. Historical-themed game with educational elements.",
    type: "personal",
    featured: false,
    technologies: ["Unity", "C#"],
    githubUrl: "https://github.com/Partha-Sarker/Kill-The-Traitors"
  },
  {
    id: "youtube-playlist-copier",
    title: "Copy YouTube Playlist",
    description: "Implemented a solution to copy YouTube videos from one playlist to another using Python and the Google API. Automation tool for content management.",
    type: "personal",
    featured: false,
    technologies: ["Python", "Jupyter Notebook"],
    githubUrl: "https://github.com/Partha-Sarker/youtube-playlist-copier"
  },
  {
    id: "subtitle-downloader",
    title: "Download Subtitle in Batch",
    description: "Implemented a Python script to download all subtitles for a series from SubScene or ISubtitle and zip them using BeautifulSoup. Web scraping automation tool.",
    type: "personal",
    featured: false,
    technologies: ["Python", "BeautifulSoup"],
    githubUrl: "https://github.com/Partha-Sarker/Download-Subtitle-in-Batch"
  },
  {
    id: "space-riot",
    title: "Space Riot",
    description: "2d space shooter game built using Unity with omnidirectional movement controller and dash mechanics. Features advanced movement systems and combat mechanics.",
    type: "personal",
    featured: false,
    technologies: ["Unity", "C#"],
    githubUrl: "https://github.com/Partha-Sarker/Space-Riot"
  }
];

export default projects;