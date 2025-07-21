import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Card,
  CardContent,
  Divider,
  useTheme,
  Avatar
} from '@mui/material';
import {
  EmojiEvents as EmojiEventsIcon,
  School as SchoolIcon,
  Star as StarIcon,
  Bookmark as BookmarkIcon
} from '@mui/icons-material';

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'award' | 'scholarship' | 'recognition' | 'publication';
  icon: React.ReactNode;
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
      title: '2nd Runner-up in University Hackathon',
      description: 'Developed an innovative solution for document analysis using computer vision techniques.',
      date: '2020',
      category: 'award',
      icon: <EmojiEventsIcon />
    },
    {
      id: 'scholarship',
      title: 'Merit-based Scholarship Recipient',
      description: 'Awarded scholarship for academic excellence and research potential.',
      date: '2019',
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

      {/* Featured Achievement */}
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -15,
            right: -15,
            opacity: 0.2,
          }}
        >
          <EmojiEventsIcon sx={{ fontSize: 150 }} />
        </Box>

        <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 1 }}>
          Research Excellence
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, maxWidth: '80%' }}>
          Recognized for outstanding contributions to research in computer vision and document analysis,
          with a focus on innovative approaches to handwritten document segmentation.
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '20px',
              px: 2,
              py: 0.5,
              display: 'inline-block',
              fontSize: '0.875rem',
            }}
          >
            Computer Vision
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '20px',
              px: 2,
              py: 0.5,
              display: 'inline-block',
              fontSize: '0.875rem',
            }}
          >
            Document Analysis
          </Box>
          <Box
            sx={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '20px',
              px: 2,
              py: 0.5,
              display: 'inline-block',
              fontSize: '0.875rem',
            }}
          >
            Research Grant
          </Box>
        </Box>
      </Paper>

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
                  <Typography variant="caption" color="text.secondary">
                    {achievement.date}
                  </Typography>
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