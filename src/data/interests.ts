import { Interest } from "./types";

/**
 * Interests data
 * Contains information about personal interests and hobbies
 */
const interests: Interest[] = [
  {
    id: "music-piano",
    title: "Piano",
    description:
      "I've been playing piano for over 8 years, focusing primarily on classical and contemporary pieces. Music provides a creative outlet that complements my technical work.",
    imageUrl: "/images/interests/piano.jpg",
    videoUrl: "https://www.youtube.com/embed/example-piano-video",
    links: [
      {
        title: "Piano Performance",
        url: "https://www.youtube.com/watch?v=example-piano-video",
      },
    ],
  },
  {
    id: "music-guitar",
    title: "Guitar",
    description:
      "I enjoy playing acoustic guitar in my free time, particularly folk and indie music. It's a relaxing counterbalance to my academic pursuits.",
    imageUrl: "/images/interests/guitar.jpg",
    videoUrl: "https://www.youtube.com/embed/example-guitar-video",
    links: [
      {
        title: "Guitar Cover",
        url: "https://www.youtube.com/watch?v=example-guitar-video",
      },
    ],
  },
  {
    id: "reading",
    title: "Reading",
    description:
      "I'm an avid reader with interests spanning computer science literature, philosophy, and science fiction. Reading widely helps me approach technical problems from different perspectives.",
    imageUrl: "/images/interests/reading.jpg",
  },
  {
    id: "hiking",
    title: "Hiking",
    description:
      "I enjoy exploring nature through hiking, which provides both physical activity and mental clarity. Some of my best problem-solving insights come during these outdoor excursions.",
    imageUrl: "/images/interests/hiking.jpg",
  },
];

export default interests;
