import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  useTheme,
  Paper,
} from "@mui/material";
import {
  Work as WorkIcon,
  LocationOn as LocationIcon,
  DateRange as DateIcon,
  FiberManualRecord as BulletIcon,
  Folder as ProjectIcon,
} from "@mui/icons-material";
import { Experience } from "../../data/types";

interface ExperienceCardProps {
  experience: Experience;
}

/**
 * Helper function to highlight important metrics in text
 */
const highlightMetrics = (text: string, theme: any) => {
  // Split text by ** markers and create highlighted spans
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // This is a highlighted part
      return (
        <Box
          key={index}
          component="span"
          sx={{
            backgroundColor: theme.palette.warning.light,
            color: theme.palette.warning.contrastText,
            px: 0.5,
            py: 0.2,
            borderRadius: 1,
            fontWeight: "bold",
            fontSize: "0.9rem",
          }}
        >
          {part}
        </Box>
      );
    }
    return part;
  });
};

/**
 * ExperienceCard component that displays individual work experience
 * with project subsections and highlighted metrics
 */
const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience: exp }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        borderRadius: 2,
        overflow: "visible",
        position: "relative",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: theme.shadows[4],
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "5px",
          height: "100%",
          backgroundColor: theme.palette.primary.main,
          borderTopLeftRadius: theme.shape.borderRadius,
          borderBottomLeftRadius: theme.shape.borderRadius,
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        {/* Header with role and company */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h5"
            component="h3"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <WorkIcon />
            {exp.role}
          </Typography>

          <Typography
            variant="h6"
            component="h4"
            sx={{
              fontWeight: 500,
              color: theme.palette.text.secondary,
              mb: 2,
            }}
          >
            {exp.company}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 1, sm: 3 },
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <LocationIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {exp.location}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <DateIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {exp.startDate} - {exp.endDate}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          {exp.description}
        </Typography>

        {/* Projects or Direct Responsibilities */}
        {exp.projects ? (
          // Show projects as subsections
          <Box sx={{ mb: 3 }}>
            {exp.projects.map((project, projectIndex) => (
              <Paper
                key={project.id}
                elevation={0}
                sx={{
                  p: 3,
                  mb: 3,
                  backgroundColor: theme.palette.background.default,
                  borderRadius: 2,
                  border: `1px solid ${theme.palette.divider}`,
                  "&:last-child": { mb: 0 },
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <ProjectIcon color="primary" fontSize="small" />
                  {project.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                    mb: 2,
                    fontStyle: "italic",
                  }}
                >
                  {project.description}
                </Typography>

                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 1,
                  }}
                >
                  Key Achievements & Responsibilities
                </Typography>

                <List dense sx={{ mb: 2 }}>
                  {project.responsibilities.map((responsibility, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 20 }}>
                        <BulletIcon
                          sx={{
                            fontSize: 8,
                            color: theme.palette.primary.main,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Typography
                            variant="body2"
                            sx={{
                              fontSize: "0.9rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {highlightMetrics(responsibility, theme)}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>

                {/* Project Technologies */}
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 1,
                  }}
                >
                  Technologies
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {project.technologies.map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: theme.palette.background.paper,
                        fontSize: "0.75rem",
                        height: 24,
                        "&:hover": {
                          backgroundColor: theme.palette.primary.light,
                          color: "white",
                        },
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            ))}
          </Box>
        ) : (
          // Show direct responsibilities (for experiences without projects)
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{
                fontWeight: 600,
                color: theme.palette.text.primary,
                mb: 2,
              }}
            >
              Key Achievements & Responsibilities
            </Typography>

            <List dense sx={{ mb: 3 }}>
              {exp.responsibilities?.map((responsibility, index) => (
                <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 20 }}>
                    <BulletIcon
                      sx={{
                        fontSize: 8,
                        color: theme.palette.primary.main,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                        }}
                      >
                        {highlightMetrics(responsibility, theme)}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}

        {/* Overall Technologies */}
        <Divider sx={{ my: 3 }} />
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
            mb: 2,
          }}
        >
          Technologies Used
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {exp.technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: theme.palette.background.default,
                "&:hover": {
                  backgroundColor: theme.palette.primary.light,
                  color: "white",
                },
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
