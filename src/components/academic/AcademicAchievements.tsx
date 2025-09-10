import React from "react";
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  Divider,
  useTheme,
  Avatar,
  Button,
  Link,
} from "@mui/material";
import { getAssetPath } from "../../utils/assetUtils";
import {
  EmojiEvents as EmojiEventsIcon,
  School as SchoolIcon,
  Star as StarIcon,
  Bookmark as BookmarkIcon,
  GitHub as GitHubIcon,
  Psychology as PsychologyIcon,
} from "@mui/icons-material";

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category:
  | "award"
  | "scholarship"
  | "recognition"
  | "problem-solving"
  | "publication";
  icon: React.ReactNode;
  url?: string;
  links?: Array<{
    name: string;
    url: string;
    logo: string;
  }>;
}

/**
 * Academic Achievements component
 * Displays academic awards, scholarships, and other achievements
 */
const AcademicAchievements: React.FC = () => {
  const theme = useTheme();

  // Sample achievements data
  const achievements: Achievement[] = [
    {
      id: "ielts",
      title: "IELTS: 7.5",
      description: "Listening: 8.0, Reading: 8.0, Speaking: 6.5, Writing: 6.5",
      date: "July 2025",
      category: "recognition",
      icon: <StarIcon />,
    },
    {
      id: "gre",
      title: "GRE: 309",
      description: "Quant: 162, Verbal: 147, Analytical Writing: 3.5",
      date: "April 2025",
      category: "recognition",
      icon: <StarIcon />,
    },
    {
      id: "hackathon",
      title: "2nd Runner-up at LICT SUST Techfest Hackathon",
      description:
        'Developed "ECHO" - a language conversion app that translates between text, speech, and American Sign Language to help disabled people communicate. Built within 40 hours at the national hackathon for undergraduates.',
      date: "2019",
      category: "award",
      icon: <EmojiEventsIcon />,
      url: "https://github.com/Boorhan/Echo-Sign-Language-Interpreter",
    },
    {
      id: "scholarship",
      title: "Merit-based Scholarship Recipient",
      description: "Awarded one-time scholarship for academic excellence.",
      date: "2017 - 2021",
      category: "scholarship",
      icon: <SchoolIcon />,
    },
    {
      id: "problem-solving",
      title: "Competitive Programming",
      description:
        "Solved over 500 problems on various online judges including LeetCode and other competitive programming platforms, demonstrating strong algorithmic thinking and problem-solving skills.",
      date: "2017 - Ongoing",
      category: "problem-solving",
      icon: <StarIcon />,
      links: [
        {
          name: "StopStalk",
          url: "https://www.stopstalk.com/user/profile/Partha",
          logo: "/StopStalk.png",
        },
        {
          name: "LeetCode",
          url: "https://leetcode.com/parthasarker3",
          logo: "/LeetCode.png",
        },
      ],
    },
  ];

  // Group achievements by category
  const groupedAchievements = {
    award: achievements.filter((a) => a.category === "award"),
    scholarship: achievements.filter((a) => a.category === "scholarship"),
    recognition: achievements.filter((a) => a.category === "recognition"),
    "problem-solving": achievements.filter(
      (a) => a.category === "problem-solving",
    ),
    publication: achievements.filter((a) => a.category === "publication"),
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        fontWeight={700}
        sx={{ mb: 4 }}
      >
        Academic Achievements
      </Typography>

      {/* Achievement Categories */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
        }}
      >
        {/* Awards */}
        {groupedAchievements.award.length > 0 && (
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.warning.main,
                    width: 40,
                    height: 40,
                    mr: 2,
                  }}
                >
                  <EmojiEventsIcon />
                </Avatar>
                <Typography variant="h6" component="h3" fontWeight={600}>
                  Awards
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />

              {groupedAchievements.award.map((achievement) => (
                <Box key={achievement.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {achievement.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mb: 1, display: "block" }}
                  >
                    {achievement.date}
                  </Typography>
                  {achievement.url && (
                    <Button
                      variant="outlined"
                      size="small"
                      component={Link}
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      sx={{ fontSize: "0.75rem", mt: 1 }}
                    >
                      View Project
                    </Button>
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Scholarships */}
        {groupedAchievements.scholarship.length > 0 && (
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    width: 40,
                    height: 40,
                    mr: 2,
                  }}
                >
                  <SchoolIcon />
                </Avatar>
                <Typography variant="h6" component="h3" fontWeight={600}>
                  Scholarships
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />

              {groupedAchievements.scholarship.map((achievement) => (
                <Box key={achievement.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {achievement.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {achievement.date}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Recognitions */}
        {groupedAchievements.recognition.length > 0 && (
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: 40,
                    height: 40,
                    mr: 2,
                  }}
                >
                  <StarIcon />
                </Avatar>
                <Typography variant="h6" component="h3" fontWeight={600}>
                  Test Scores
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />

              {groupedAchievements.recognition.map((achievement) => (
                <Box key={achievement.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {achievement.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {achievement.date}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Problem Solving */}
        {groupedAchievements["problem-solving"].length > 0 && (
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.success.main,
                    width: 40,
                    height: 40,
                    mr: 2,
                  }}
                >
                  <PsychologyIcon />
                </Avatar>
                <Typography variant="h6" component="h3" fontWeight={600}>
                  Problem Solving
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />

              {groupedAchievements["problem-solving"].map((achievement) => (
                <Box key={achievement.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {achievement.description}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ mb: 1, display: "block" }}
                  >
                    {achievement.date}
                  </Typography>

                  {/* Multiple Links with Logos */}
                  {achievement.links && (
                    <Box
                      sx={{ display: "flex", gap: 1, mt: 1, flexWrap: "wrap" }}
                    >
                      {achievement.links.map((link, index) => (
                        <Button
                          key={index}
                          variant="outlined"
                          size="small"
                          component={Link}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          startIcon={
                            <Box
                              component="img"
                              src={getAssetPath(link.logo)}
                              alt={`${link.name} logo`}
                              sx={{
                                width: 16,
                                height: 16,
                                objectFit: "contain",
                              }}
                            />
                          }
                          sx={{
                            fontSize: "0.75rem",
                            textTransform: "none",
                          }}
                        >
                          {link.name}
                        </Button>
                      ))}
                    </Box>
                  )}

                  {/* Fallback for single URL (for other achievements) */}
                  {achievement.url && !achievement.links && (
                    <Button
                      variant="outlined"
                      size="small"
                      component={Link}
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon />}
                      sx={{ fontSize: "0.75rem", mt: 1 }}
                    >
                      View Profile
                    </Button>
                  )}
                </Box>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Publications */}
        {groupedAchievements.publication.length > 0 && (
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.info.main,
                    width: 40,
                    height: 40,
                    mr: 2,
                  }}
                >
                  <BookmarkIcon />
                </Avatar>
                <Typography variant="h6" component="h3" fontWeight={600}>
                  Publications
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />

              {groupedAchievements.publication.map((achievement) => (
                <Box key={achievement.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {achievement.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {achievement.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {achievement.date}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default AcademicAchievements;
