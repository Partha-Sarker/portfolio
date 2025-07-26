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
    tags: ["Unity", "AR", "C#", "personal", "featured", "augmented-reality", "3d", "game-development", "mobile"],
    githubUrl: "https://github.com/Partha-Sarker/AR-Girl",
    videoUrl: "/videos/AR-girl.mp4",
    academicSignificance: "Showcases advanced understanding of augmented reality technologies and 3D character control systems, demonstrating innovation in immersive technology applications."
  },
  {
    id: "fight-multiplayer-game",
    title: "FIGHT - 3D Multiplayer Game",
    description: "3d, 1v1, third person multiplayer game for android and windows. Features real-time multiplayer combat with 3D graphics and cross-platform compatibility.",
    type: "academic",
    featured: false,
    technologies: ["Unity", "C#"],
    tags: ["Unity", "C#", "academic", "featured", "3d", "multiplayer", "game-development", "networking", "cross-platform"],
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
    tags: ["Java", "Android Studio", "Firebase", "research", "featured", "hci", "mobile", "android", "behavioral-nudges", "thesis", "user-study"],
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
    tags: ["Python", "OpenCV", "research", "featured", "computer-vision", "document-analysis", "pattern-recognition", "image-processing"],
    researchAreas: ["Computer Vision", "Document Analysis", "Pattern Recognition"],
    githubUrl: "https://github.com/Partha-Sarker/Bangla-handwritten-word-segmentation-from-document",
    methodology: "Implemented image processing techniques including thresholding, connected component analysis, and contour detection to identify and extract individual words from handwritten Bengali documents.",
    results: "Successfully segmented words with high accuracy across various handwriting styles and document qualities.",
    academicSignificance: "Contributes to the field of optical character recognition for Bengali script, with potential applications in digital archiving and automated document processing."
  },
  // Professional Projects
  {
    id: "marginedge",
    title: "MarginEdge",
    description: "A comprehensive restaurant management software designed to streamline back-office operations and enhance financial oversight. Offers real-time insights into food and labor costs by integrating with over 60 POS systems and major accounting platforms.",
    type: "professional",
    featured: true,
    technologies: ["Spring Boot", "Postgres", "React", "AngularJS", "AWS"],
    tags: ["Spring Boot", "Postgres", "React", "AngularJS", "AWS", "professional", "featured", "restaurant-management", "fintech", "integration", "real-time"],
    liveUrl: "https://www.marginedge.com",
    methodology: "Developed automated invoice processing, inventory management, recipe costing, daily P&L reporting, and menu analysis features. Integrated with 60+ POS systems and major accounting platforms for seamless data flow.",
    results: "Empowered restaurant operators to make informed decisions, reduced manual data entry significantly, and improved profitability through real-time cost insights and automated reporting.",
    academicSignificance: "Demonstrates expertise in enterprise software development, system integration, financial data processing, and scalable cloud architecture for business-critical applications."
  },
  {
    id: "ieims",
    title: "Integrated Education Information Management System (IEIMS)",
    description: "A national digital platform developed by the Ministry of Education, Bangladesh, to centralize and streamline the management of secondary and higher secondary education. Serves over 20 million students across the country.",
    type: "professional",
    featured: false,
    technologies: ["Spring Boot", "MS SQL Server", "Next.js", "Kubernetes"],
    tags: ["Spring Boot", "MS SQL Server", "Next.js", "Kubernetes", "professional", "featured", "government", "education", "national-scale", "microservices"],
    methodology: "Built modules for student registration, form fill-up, center assignment, and digital ID generation. Integrated data from educational institutions, education boards, and government agencies using microservices architecture.",
    results: "Successfully deployed nationwide serving 20+ million students, enhanced data accuracy, improved administrative efficiency, and supported informed decision-making in the education sector.",
    academicSignificance: "Showcases large-scale system design, government integration, data management at national scale, and modern containerized deployment strategies."
  },
  {
    id: "crvs",
    title: "Civil Registration and Vital Statistics (CRVS)",
    description: "A national system in Bangladesh for recording and managing vital events such as births, deaths, marriages, and divorces. Integrates with various government platforms, facilitating digital ID creation and efficient public service delivery.",
    type: "professional",
    featured: false,
    technologies: ["Laravel", "Oracle Database"],
    tags: ["Laravel", "Oracle Database", "professional", "government", "vital-statistics", "digital-id", "public-service"],
    methodology: "Developed comprehensive vital statistics management system with government platform integration. Implemented secure data handling for sensitive citizen information and streamlined public service processes.",
    results: "Improved data accuracy and accessibility for vital statistics, supported over 10 million citizens, and streamlined government service delivery processes.",
    academicSignificance: "Demonstrates expertise in government system development, secure data handling, database management, and public sector digital transformation."
  },
  {
    id: "dbtevariants",
    title: "dbTEvariants",
    description: "A manually curated database representing the most comprehensive resource to date for non-reference polymorphic human transposable elements. Transposable elements (TEs) comprise 45–50% of the human genome and play critical roles in genomic diversity, evolution, gene regulation, and disease mechanisms.",
    type: "professional",
    featured: false,
    technologies: ["Next.js", "Vercel", "Postgres"],
    tags: ["Next.js", "Vercel", "Postgres", "professional", "bioinformatics", "genomics", "database", "web-development"],
    liveUrl: "https://genome-data.vercel.app/",
  },
  {
    id: "echo-sign-language",
    title: "ECHO - Sign Language Interpreter",
    description: "An android app designed for transforming among text, speech and sign languages. Enables bidirectional communication to help disabled people. Winner of 2nd Runner-up at LICT SUST Techfest Hackathon 2019.",
    type: "academic",
    featured: false,
    technologies: ["Android Studio", "Java"],
    tags: ["Android Studio", "Java", "academic", "mobile", "android", "hci", "accessibility", "award-winning", "hackathon", "sign-language"],
    researchAreas: ["Human-Computer Interaction", "Accessibility"],
    githubUrl: "https://github.com/Boorhan/Echo-Sign-Language-Interpreter",
    achievements: ["2nd Runner-up at National Hackathon", "Built within 40 hours"],
    academicSignificance: "Demonstrates application of HCI principles in accessibility technology and inclusive design."
  },
  {
    id: "p2p-messaging",
    title: "P2P Messaging App",
    description: "A PEER-to-PEER android app built with Android Studio. Two devices sharing the same Wi-Fi network can communicate with each other through socket programming. Features messenger-like UI, file sharing, speech-to-text, dark mode, and notification system.",
    type: "academic",
    featured: false,
    tags: ["Android Studio", "Java", "academic", "mobile", "android", "networking", "socket-programming", "peer-to-peer", "award-winning", "ui-design", "file-sharing", "speech-to-text", "dark-mode"],
    technologies: ["Android Studio", "Java"],
    achievements: ["Received special recognition from course instructor", "One of only 3 students out of 100 to receive appreciation gift for exceptional work"],

    githubUrl: "https://github.com/Partha-Sarker/Peer-2-Peer-messaging-app",
    methodology: "Implemented socket programming for real-time peer-to-peer communication between Android devices on the same Wi-Fi network. Both devices act as server and client, establishing bidirectional communication channels through TCP sockets.",
    results: "Successfully created a fully functional messaging app with advanced features including file transfer, speech recognition, customizable UI themes, and robust network connectivity management.",
    academicSignificance: "Demonstrates comprehensive understanding of network programming concepts, socket communication, Android development, and user interface design. Showcases practical application of computer networking principles in mobile application development."
  },
  {
    id: "find-volunteer",
    title: "Find Volunteer",
    description: "Web project built for collaborating volunteer and various events organized by the organizations. Join as organization, then create event and post circular. Or, join as volunteer and participate in events.",
    type: "academic",
    featured: false,
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "academic", "web-development", "volunteer", "collaboration"],
    githubUrl: "https://github.com/Partha-Sarker/Find-Volunteer-Web-Project-using-Laravel"
  },
  {
    id: "offline-diary",
    title: "Offline Diary",
    description: "Create diaries and store everyday memories on the local machine. Can also store and playback media files. Desktop application with multimedia support.",
    type: "academic",
    featured: false,
    technologies: ["Java", "JavaFX", "CSS"],
    tags: ["Java", "JavaFX", "CSS", "academic", "desktop", "diary", "multimedia"],
    githubUrl: "https://github.com/Partha-Sarker/Bangla-handwritten-word-segmentation-from-document"
  },
  {
    id: "glut-polygon",
    title: "Glut Polygon Drawing",
    description: "Simple app for drawing and transforming polygon. Demonstrates computer graphics programming and geometric transformations.",
    type: "academic",
    featured: false,
    technologies: ["C++", "OpenGL", "GLUT"],
    tags: ["C++", "OpenGL", "GLUT", "academic", "computer-graphics", "polygon", "transformation"],
    githubUrl: "https://github.com/Partha-Sarker/Glut-Polygon-Drawing"
  },
  {
    id: "block-the-balls",
    title: "Block the Balls",
    description: "2d game for blocking multi-directional balls with uni-directional sticks. Physics-based game demonstrating collision detection and game mechanics.",
    type: "academic",
    featured: false,
    technologies: ["Unity", "C#"],
    tags: ["Unity", "C#", "academic", "game-development", "2d", "physics", "collision-detection"],
    githubUrl: "https://github.com/Partha-Sarker/Block-The-Balls-Project-250"
  },
  {
    id: "shikha-game",
    title: "Shikha",
    description: "Shikha is a 2d, side scrolling, puzzle-adventure game built with Unity game engine. Features level progression and puzzle-solving mechanics.",
    type: "academic",
    featured: false,
    technologies: ["Unity", "C#"],
    tags: ["Unity", "C#", "academic", "game-development", "2d", "puzzle", "adventure"],
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
    tags: ["Node.js", "JavaScript", "personal", "web-scraping", "crawler", "automation", "academic-research"],
    githubUrl: "https://github.com/Partha-Sarker/cs-ranking-crawler"
  },
  {
    id: "spring-sso",
    title: "Spring SSO",
    description: "SSO Built using spring oauth server. Demonstrates understanding of authentication systems and OAuth implementation.",
    type: "personal",
    featured: false,
    technologies: ["Spring", "Java"],
    tags: ["Spring", "Java", "personal", "authentication", "oauth", "sso", "security"],
    githubUrl: "https://github.com/Partha-Sarker/cs-ranking-crawler"
  },
  {
    id: "piano-practice",
    title: "Piano Notation Practice",
    description: "Implemented a piano note practice app using JavaScript to help with musical notation and sheet music recognition. Combines programming skills with musical interests.",
    type: "personal",
    featured: false,
    technologies: ["JavaScript", "jQuery", "VexFlow"],
    tags: ["JavaScript", "jQuery", "VexFlow", "personal", "music", "piano", "education", "practice"],
    githubUrl: "https://github.com/Partha-Sarker/Piano-Note-Practice-html-js"
  },
  {
    id: "linear-equation-solver",
    title: "Linear Equation Solver",
    description: "Desktop app for solving linear equations via Gaussian elimination method built using Unity. Educational tool demonstrating mathematical algorithms.",
    type: "personal",
    featured: false,
    technologies: ["Unity", "C#"],
    tags: ["Unity", "C#", "personal", "mathematics", "linear-equations", "gaussian-elimination", "education"],
    githubUrl: "https://github.com/Partha-Sarker/Solve-Linear-Euations-and-Draw-Petri-Net-Using-Unity"
  },
  {
    id: "kill-the-traitors",
    title: "Kill-The-Traitors",
    description: "Implemented a 3D third-person shooter game based on the Bangladesh Liberation War using Unity. Historical-themed game with educational elements.",
    type: "personal",
    featured: false,
    technologies: ["Unity", "C#"],
    tags: ["Unity", "C#", "personal", "game-development", "3d", "shooter", "historical", "liberation-war"],
    githubUrl: "https://github.com/Partha-Sarker/Kill-The-Traitors"
  },
  {
    id: "youtube-playlist-copier",
    title: "Copy YouTube Playlist",
    description: "Implemented a solution to copy YouTube videos from one playlist to another using Python and the Google API. Automation tool for content management.",
    type: "personal",
    featured: false,
    technologies: ["Python", "Jupyter Notebook"],
    tags: ["Python", "Jupyter Notebook", "personal", "automation", "youtube", "api", "playlist"],
    githubUrl: "https://github.com/Partha-Sarker/youtube-playlist-copier"
  },
  {
    id: "subtitle-downloader",
    title: "Download Subtitle in Batch",
    description: "Implemented a Python script to download all subtitles for a series from SubScene or ISubtitle and zip them using BeautifulSoup. Web scraping automation tool.",
    type: "personal",
    featured: false,
    technologies: ["Python", "BeautifulSoup"],
    tags: ["Python", "BeautifulSoup", "personal", "web-scraping", "automation", "subtitles", "batch-processing"],
    githubUrl: "https://github.com/Partha-Sarker/Download-Subtitle-in-Batch"
  },
  {
    id: "space-riot",
    title: "Space Riot",
    description: "2d space shooter game built using Unity with omnidirectional movement controller and dash mechanics. Features advanced movement systems and combat mechanics.",
    type: "personal",
    featured: false,
    technologies: ["Unity", "C#"],
    tags: ["Unity", "C#", "personal", "game-development", "2d", "shooter", "space", "movement"],
    githubUrl: "https://github.com/Partha-Sarker/Space-Riot"
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "A comprehensive, modern portfolio website showcasing research work, academic projects, professional experience, and personal initiatives. Built with React, TypeScript, and Material-UI with a focus on academic excellence and professional development.",
    type: "personal",
    featured: false,
    technologies: ["React", "Material-UI", "TypeScript"],
    tags: ["React", "Material-UI", "TypeScript", "personal", "web-development", "portfolio", "responsive", "modern"],
    githubUrl: "https://github.com/Partha-Sarker/portfolio",
    academicSignificance: "Demonstrates advanced frontend development skills, responsive design principles, and modern web technologies. Showcases ability to create professional, user-friendly interfaces for academic and professional presentation."
  }
];

export default projects;