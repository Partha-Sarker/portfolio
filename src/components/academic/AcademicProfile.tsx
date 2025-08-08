import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import {
  Science as ScienceIcon,
  Psychology as PsychologyIcon,
  Biotech as BiotechIcon,
  ViewInAr as ViewInArIcon,
} from "@mui/icons-material";

interface ResearchInterest {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Academic Profile component that showcases research interests
 */
const AcademicProfile: React.FC = () => {
  // Research interests data
  const researchInterests: ResearchInterest[] = [
    {
      title: "Human-Computer Interaction",
      description:
        "Exploring intuitive and effective user interface design for educational applications.",
      icon: <PsychologyIcon color="primary" />,
    },
    {
      title: "Computer Vision",
      description:
        "Research on image processing techniques for pattern recognition and visual analysis.",
      icon: <BiotechIcon color="primary" />,
    },
    {
      title: "Artificial Intelligence",
      description:
        "Applying machine learning and AI techniques to solve complex problems in HCI and interactive systems.",
      icon: <ScienceIcon color="primary" />,
    },
    {
      title: "AR/VR Development",
      description:
        "Creating immersive augmented and virtual reality experiences for educational and interactive applications.",
      icon: <ViewInArIcon color="primary" />,
    },
  ];

  return (
    <Box sx={{ mb: 4 }}>
      {/* Research Interests */}
      <Typography
        variant="h5"
        component="h3"
        gutterBottom
        fontWeight={600}
        sx={{ mb: 3 }}
      >
        Research Interests
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 3,
        }}
      >
        {researchInterests.map((interest, index) => (
          <Paper
            key={index}
            elevation={1}
            sx={{
              p: 3,
              height: "100%",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 3,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box sx={{ mr: 1 }}>{interest.icon}</Box>
              <Typography variant="h6" component="h4" fontWeight={600}>
                {interest.title}
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2" color="text.secondary">
              {interest.description}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default AcademicProfile;
