import React from "react";
import { Box, Typography, useTheme, Paper } from "@mui/material";
import {
  School as SchoolIcon,
  EmojiEvents as EmojiEventsIcon,
} from "@mui/icons-material";
import { Project } from "../../data/types";
import ProjectCard from "./ProjectCard";

interface AcademicProjectsProps {
  projects: Project[];
}

/**
 * Academic Projects component
 * Displays undergraduate course projects and academic work
 */
const AcademicProjects: React.FC<AcademicProjectsProps> = ({ projects }) => {
  const theme = useTheme();

  const academicProjects = projects.filter(
    (project) => project.type === "academic",
  );

  if (academicProjects.length === 0) {
    return null;
  }

  // Separate featured academic projects (like ECHO) from regular ones
  const featuredAcademicProjects = academicProjects.filter(
    (project) => project.achievements && project.achievements.length > 0,
  );
  const regularAcademicProjects = academicProjects.filter(
    (project) => !project.achievements || project.achievements.length === 0,
  );

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <SchoolIcon
          sx={{ mr: 2, color: theme.palette.secondary.main, fontSize: "2rem" }}
        />
        <Typography variant="h4" component="h2" fontWeight={700}>
          Academic Projects
        </Typography>
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        These projects showcase my learning journey during undergraduate
        studies, demonstrating progression in technical skills, software
        development practices, and problem-solving abilities across various
        domains including game development, web applications, and system
        programming.
      </Typography>

      {/* Featured Academic Projects (with achievements) */}
      {featuredAcademicProjects.length > 0 && (
        <Box sx={{ mb: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <EmojiEventsIcon
              sx={{ mr: 1, color: theme.palette.warning.main }}
            />
            <Typography
              variant="h5"
              component="h3"
              fontWeight={600}
              sx={{ fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
            >
              Award-Winning Projects
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              },
              gap: 3,
            }}
          >
            {featuredAcademicProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>
        </Box>
      )}

      {/* Regular Academic Projects */}
      {regularAcademicProjects.length > 0 && (
        <Box>
          <Typography
            variant="h5"
            component="h3"
            fontWeight={600}
            sx={{ mb: 3, fontSize: { xs: "1.25rem", sm: "1.5rem" } }}
          >
            Course Projects & Assignments
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr",
                md: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              },
              gap: 3,
            }}
          >
            {regularAcademicProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Box>
        </Box>
      )}

      {/* Academic Learning Summary */}
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 3,
          backgroundColor: theme.palette.background.default,
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="h6"
          component="h4"
          fontWeight={600}
          sx={{
            mb: 2,
            color: theme.palette.secondary.main,
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
          }}
        >
          Academic Learning Highlights
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr 1fr" },
            gap: { xs: 2, md: 3 },
          }}
        >
          <Box>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
              Technical Skills Developed
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              • Game Development with Unity and C#
              <br />
              • Web Development with Laravel, PHP, and MySQL
              <br />
              • Mobile App Development with Android Studio and Java
              <br />
              • Computer Graphics Programming with OpenGL and C++
              <br />• Network Programming and Socket Communication
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
              Key Learning Outcomes
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              • Software Engineering Best Practices
              <br />
              • User Interface and User Experience Design
              <br />
              • Database Design and Management
              <br />
              • Cross-platform Development
              <br />• Team Collaboration and Project Management
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default AcademicProjects;
