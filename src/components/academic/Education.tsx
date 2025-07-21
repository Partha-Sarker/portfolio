import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  Card,
  CardContent,
  Link,
  Collapse,
} from '@mui/material';
import {
  School as SchoolIcon,
  MenuBook as MenuBookIcon,
  EmojiEvents as EmojiEventsIcon,
  Description as DescriptionIcon,
  DateRange as DateRangeIcon,
  LocationOn as LocationOnIcon,
  Grade as GradeIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon
} from '@mui/icons-material';
import { Education as EducationType } from '../../data/types';

interface EducationProps {
  education: EducationType[];
}

/**
 * Education component that displays academic background
 * Shows degrees, institutions, coursework, and achievements
 */
const Education: React.FC<EducationProps> = ({ education }) => {
  const theme = useTheme();
  const [showPriorEducation, setShowPriorEducation] = useState(false);

  const togglePriorEducation = () => {
    setShowPriorEducation(!showPriorEducation);
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
        Academic Background
      </Typography>

      {education
        .filter(edu => edu.id === 'undergrad')
        .map((edu) => (
          <Card
            key={edu.id}
            elevation={2}
            sx={{
              mb: 4,
              borderRadius: 2,
              overflow: 'visible',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '5px',
                height: '100%',
                backgroundColor: theme.palette.primary.main,
                borderTopLeftRadius: theme.shape.borderRadius,
                borderBottomLeftRadius: theme.shape.borderRadius
              }
            }}
          >
            <CardContent sx={{ p: 4 }}>
              {/* Degree and Institution */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 2 }}>
                <Box>
                  <Typography variant="h5" component="h3" fontWeight={600} color="primary">
                    {edu.degree} in {edu.field}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <SchoolIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="h6" component="h4" color="text.secondary">
                      {edu.institution}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'flex-start', md: 'flex-end' },
                  mt: { xs: 2, md: 0 }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DateRangeIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body1" color="text.secondary">
                      {edu.startDate} - {edu.endDate}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body1" color="text.secondary">
                      {edu.location}
                    </Typography>
                  </Box>
                  {edu.gpa && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <GradeIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                      <Typography variant="body1" fontWeight={500} color="secondary">
                        CGPA: {edu.gpa}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>

              <Divider sx={{ my: 3 }} />

              {/* Relevant Coursework */}
              {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <MenuBookIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                    <Typography variant="h6" component="h4" fontWeight={600}>
                      Relevant Coursework
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {edu.relevantCoursework.map((course, index) => (
                      <Chip
                        key={index}
                        label={course}
                        sx={{
                          backgroundColor: theme.palette.background.default,
                          '&:hover': {
                            backgroundColor: theme.palette.primary.light,
                            color: 'white'
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              )}

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmojiEventsIcon sx={{ mr: 1, color: theme.palette.warning.main }} />
                    <Typography variant="h6" component="h4" fontWeight={600}>
                      Achievements
                    </Typography>
                  </Box>
                  <List dense disablePadding>
                    {edu.achievements.map((achievement, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <EmojiEventsIcon fontSize="small" color="warning" />
                        </ListItemIcon>
                        <ListItemText primary={achievement} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {/* Thesis */}
              {edu.thesis && (
                <Box sx={{ mt: 3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      backgroundColor: theme.palette.background.default,
                      borderRadius: 2,
                      border: `1px solid ${theme.palette.divider}`
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <DescriptionIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                      <Typography variant="h6" component="h4" fontWeight={600}>
                        Thesis
                      </Typography>
                    </Box>
                    <Typography variant="subtitle1" fontWeight={500} sx={{ mb: 1 }}>
                      {edu.thesis.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {edu.thesis.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" fontWeight={500} color="primary.dark" sx={{ mb: 1 }}>
                        Key Research Areas:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        <Chip size="small" label="Smartphone Usage Reduction" />
                        <Chip size="small" label="Notification-Based Interventions" />
                        <Chip size="small" label="Behavioral Nudges" />
                        <Chip size="small" label="Self-Awareness Techniques" />
                      </Box>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" fontWeight={500} color="primary.dark" sx={{ mb: 1 }}>
                        Methodology:
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Conducted a user study (n=109) followed by a 3-week experiment with 16 volunteers using the "App Usage Monitor" Android application. Combined usage tracking, visualization, and strategic notifications to increase self-awareness and reduce excessive smartphone use.
                      </Typography>
                    </Box>

                    {edu.thesis.url && (
                      <Button
                        variant="outlined"
                        size="small"
                        component={Link}
                        href={edu.thesis.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        startIcon={<DescriptionIcon />}
                        sx={{ mt: 1 }}
                      >
                        View Full Thesis
                      </Button>
                    )}
                  </Paper>
                </Box>
              )}

              {/* Prior Education Section (Collapsible) */}
              <Box sx={{ mt: 4 }}>
                <Button
                  onClick={togglePriorEducation}
                  endIcon={showPriorEducation ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  sx={{
                    color: 'text.secondary',
                    textTransform: 'none',
                    fontWeight: 'normal',
                    justifyContent: 'flex-start',
                    p: 0
                  }}
                >
                  {showPriorEducation ? 'Hide' : 'Show'} Prior Education
                </Button>

                <Collapse in={showPriorEducation} timeout="auto" unmountOnExit>
                  <Box sx={{ mt: 2 }}>
                    {education
                      .filter(edu => edu.id === 'higher-secondary' || edu.id === 'secondary')
                      .map((priorEdu) => (
                        <Paper
                          key={priorEdu.id}
                          elevation={0}
                          sx={{
                            p: 2,
                            mb: 2,
                            backgroundColor: theme.palette.background.default,
                            borderRadius: 2,
                            border: `1px solid ${theme.palette.divider}`
                          }}
                        >
                          <Typography variant="subtitle1" fontWeight={500} color="text.primary">
                            {priorEdu.degree} in {priorEdu.field}
                          </Typography>

                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                            <SchoolIcon sx={{ mr: 1, fontSize: '0.9rem', color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {priorEdu.institution}
                            </Typography>
                          </Box>

                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <DateRangeIcon sx={{ mr: 1, fontSize: '0.9rem', color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                {priorEdu.startDate} - {priorEdu.endDate}
                              </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <GradeIcon sx={{ mr: 1, fontSize: '0.9rem', color: 'text.secondary' }} />
                              <Typography variant="body2" color="text.secondary">
                                GPA: {priorEdu.gpa}
                              </Typography>
                            </Box>
                          </Box>

                          {priorEdu.achievements && priorEdu.achievements.length > 0 && (
                            <Box sx={{ mt: 1 }}>
                              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                                {priorEdu.achievements.join(' • ')}
                              </Typography>
                            </Box>
                          )}
                        </Paper>
                      ))}
                  </Box>
                </Collapse>
              </Box>
            </CardContent>
          </Card>
        ))}

      {/* Teaching Experience Section */}
      <Box sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h5" component="h3" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
          Teaching Experience
        </Typography>

        <Card elevation={2} sx={{ borderRadius: 2 }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" component="h4" fontWeight={600} color="primary">
              Guest Lecturer - Machine Learning Concepts
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
              Metropolitan University
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1rem', color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                Sylhet, Bangladesh
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <DateRangeIcon sx={{ mr: 1, fontSize: '1rem', color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                2024
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Conducted three specialized sessions on machine learning algorithms and techniques for undergraduate students:
            </Typography>

            <List dense>
              <ListItem>
                <ListItemIcon>
                  <MenuBookIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Feature Engineering, Naive Bayes Classification, Linear Regression" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MenuBookIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Support Vector Machines" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <MenuBookIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Decision Trees, Random Forests, Principal Component Analysis" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Box>

      {/* Certifications Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" component="h3" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
          Certifications & Additional Education
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
          {education
            .filter(edu => edu.id.includes('certification'))
            .map((cert) => (
              <Card key={cert.id} elevation={1} sx={{ borderRadius: 2 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h4" fontWeight={600} color="primary">
                    {cert.field}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                    {cert.degree}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SchoolIcon sx={{ mr: 1, fontSize: '0.9rem', color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {cert.institution}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DateRangeIcon sx={{ mr: 1, fontSize: '0.9rem', color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {cert.date}
                    </Typography>
                  </Box>

                  {cert.achievements && cert.achievements.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <List dense disablePadding>
                        {cert.achievements.map((achievement, index) => (
                          <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                              <EmojiEventsIcon fontSize="small" color="warning" />
                            </ListItemIcon>
                            <ListItemText
                              primary={achievement}
                              primaryTypographyProps={{ variant: 'body2' }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}

                  {cert.url && (
                    <Box sx={{ mt: 2 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        component={Link}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ fontSize: '0.75rem' }}
                      >
                        View Certificate
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Education;