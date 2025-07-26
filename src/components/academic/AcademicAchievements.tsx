import React from 'react';
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
  Link
} from '@mui/material';
import {
  EmojiEvents as EmojiEventsIcon,
  School as SchoolIcon,
  Star as StarIcon,
  Bookmark as BookmarkIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'scholarship' | 'recognition' | 'publication';
  icon: React.ReactNode;
  url?: string;
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
      id: 'ielts',
      title: 'IELTS Score: 7.5',
      description: 'Achieved a high score in the International English Language Testing System, demonstrating advanced English language proficiency.',
      date: '2022',
      category: 'recognition',
      icon: <StarIcon />
    },
    {
      id: 'gre',
      title: 'GRE Score: 309 (Quant 162)',
      description: 'Attained a competitive score in the Graduate Record Examination, with particularly strong performance in the Quantitative section.',
      date: '2022',
      category: 'recognition',
      icon: <StarIcon />
    },
    {
      id: 'hackathon',
      title: '2nd Runner-up at LICT SUST Techfest Hackathon',
      description: 'Developed "ECHO" - a language conversion app that translates between text, speech, and American Sign Language to help disabled people communicate. Built within 40 hours at the national hackathon for undergraduates.',
      date: '2019',
      category: 'award',
      icon: <EmojiEventsIcon />,
      url: 'https://github.com/Boorhan/Echo-Sign-Language-Interpreter'
    },
    {
      id: 'scholarship',
      title: 'Merit-based Scholarship Recipient',
      description: 'Awarded one-time scholarship for academic performance in a semester.',
      date: '2017',
      category: 'scholarship',
      icon: <SchoolIcon />
    }
  ];

  // Group achievements by category
  const groupedAchievements = {
    award: achievements.filter(a => a.category === 'award'),
    scholarship: achievements.filter(a => a.category === 'scholarship'),
    recognition: achievements.filter(a => a.category === 'recognition'),
    publication: achievements.filter(a => a.category === 'publication')
  };

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
        Academic Achievements
      </Typography>



      {/* Achievement Categories */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        {/* Awards */}
        {groupedAchievements.award.length > 0 && (
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.warning.main,
                    width: 40,
                    height: 40,
                    mr: 2
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
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {achievement.description}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
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
                      sx={{ fontSize: '0.75rem', mt: 1 }}
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.primary.main,
                    width: 40,
                    height: 40,
                    mr: 2
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
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
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
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.secondary.main,
                    width: 40,
                    height: 40,
                    mr: 2
                  }}
                >
                  <StarIcon />
                </Avatar>
                <Typography variant="h6" component="h3" fontWeight={600}>
                  Recognitions
                </Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />

              {groupedAchievements.recognition.map((achievement) => (
                <Box key={achievement.id} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {achievement.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
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

        {/* Publications */}
        {groupedAchievements.publication.length > 0 && (
          <Card elevation={1} sx={{ borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: theme.palette.info.main,
                    width: 40,
                    height: 40,
                    mr: 2
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
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
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