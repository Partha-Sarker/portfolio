import React from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  useTheme,
  Card,
  CardContent,
  Divider,
  Link,
} from "@mui/material";
import {
  GitHub as GitHubIcon,
  Description as DescriptionIcon,
  Science as ScienceIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import { Project } from "../../data/types";

interface FeaturedResearchProjectsProps {
  projects: Project[];
}

/**
 * Featured Research Projects component
 * Displays research projects with enhanced detail and academic significance
 */
const FeaturedResearchProjects: React.FC<FeaturedResearchProjectsProps> = ({
  projects,
}) => {
  const theme = useTheme();

  const featuredResearchProjects = projects.filter(
    (project) => project.type === "research" && project.featured,
  );

  if (featuredResearchProjects.length === 0) {
    return null;
  }

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
        <ScienceIcon
          sx={{ mr: 2, color: theme.palette.primary.main, fontSize: "2rem" }}
        />
        <Typography variant="h4" component="h2" fontWeight={700}>
          Featured Research Projects
        </Typography>
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        These research projects represent my core academic work, demonstrating
        expertise in Human-Computer Interaction, Computer Vision, and applied
        research methodologies.
      </Typography>

      {/* Featured Research Projects */}
      {featuredResearchProjects.length > 0 && (
        <Box sx={{ mb: 5 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr", lg: "1fr 1fr" },
              gap: { xs: 3, md: 4 },
              alignItems: "stretch",
            }}
          >
            {featuredResearchProjects.map((project) => (
              <Card
                key={project.id}
                elevation={4}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  border: `2px solid ${theme.palette.primary.main}`,
                  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 2, sm: 3, md: 4 },
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Project Header */}
                  <Box sx={{ mb: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Chip
                        label="Featured Research"
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.warning.main,
                          color: "white",
                          fontWeight: 600,
                        }}
                      />
                      <Chip
                        icon={<ScienceIcon />}
                        label="Research"
                        size="small"
                        sx={{
                          backgroundColor: theme.palette.primary.main,
                          color: "white",
                          "& .MuiChip-icon": {
                            color: "white",
                          },
                        }}
                      />
                    </Box>

                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      fontWeight={600}
                      sx={{
                        color: theme.palette.primary.main,
                        mb: 2,
                        wordBreak: "break-word",
                        hyphens: "auto",
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        lineHeight: 1.6,
                        mb: 3,
                        wordBreak: "break-word",
                        hyphens: "auto",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </Box>

                  {/* Research Areas */}
                  {project.researchAreas &&
                    project.researchAreas.length > 0 && (
                      <Box sx={{ mb: 3 }}>
                        <Typography
                          variant="subtitle2"
                          fontWeight={600}
                          sx={{ mb: 1 }}
                        >
                          Research Areas
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 0.5,
                            maxWidth: "100%",
                            overflow: "hidden",
                          }}
                        >
                          {project.researchAreas.map((area, index) => (
                            <Chip
                              key={index}
                              label={area}
                              size="small"
                              variant="outlined"
                              sx={{
                                fontSize: "0.7rem",
                                maxWidth: { xs: "120px", sm: "150px" },
                                "& .MuiChip-label": {
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  whiteSpace: "nowrap",
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    )}

                  {/* Technologies */}
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={600}
                      sx={{ mb: 1 }}
                    >
                      Technologies
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                        maxWidth: "100%",
                        overflow: "hidden",
                      }}
                    >
                      {project.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.background.default,
                            fontSize: "0.7rem",
                            maxWidth: { xs: "100px", sm: "120px" },
                            "& .MuiChip-label": {
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  {/* Methodology Section */}
                  {project.methodology && (
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{ mb: 1, color: theme.palette.primary.main }}
                      >
                        Methodology
                      </Typography>
                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        {project.methodology}
                      </Typography>
                    </Box>
                  )}

                  {/* Results Section */}
                  {project.results && (
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{ mb: 1, color: theme.palette.secondary.main }}
                      >
                        Results & Impact
                      </Typography>
                      <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                        {project.results}
                      </Typography>
                    </Box>
                  )}

                  {/* Academic Significance */}
                  {project.academicSignificance && (
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        fontWeight={600}
                        sx={{ mb: 1 }}
                      >
                        Academic Significance
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.9rem",
                          fontStyle: "italic",
                          lineHeight: 1.6,
                        }}
                      >
                        {project.academicSignificance}
                      </Typography>
                    </Box>
                  )}

                  {/* Action Buttons */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: { xs: 1, sm: 2 },
                      flexWrap: "wrap",
                      mt: { xs: 3, md: 4 },
                      flexDirection: { xs: "column", sm: "row" },
                    }}
                  >
                    {project.githubUrl && (
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        component={Link}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textTransform: "none",
                          flex: { xs: "none", sm: 1 },
                          minWidth: { xs: "100%", sm: "auto" },
                        }}
                      >
                        Source Code
                      </Button>
                    )}

                    {project.documentationUrl && (
                      <Button
                        variant="outlined"
                        startIcon={<DescriptionIcon />}
                        component={Link}
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          textTransform: "none",
                          flex: { xs: "none", sm: 1 },
                          minWidth: { xs: "100%", sm: "auto" },
                        }}
                      >
                        Research Paper
                      </Button>
                    )}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FeaturedResearchProjects;
