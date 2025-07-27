import React from 'react';
import { Box, Typography, Button, IconButton, Grid, Container, useTheme, Avatar } from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { scrollToElement } from '../../utils/scrollUtils';
import { getAssetPath } from '../../utils/assetUtils';

interface HeroProps {
  name: string;
  title: string;
  researchInterests: string[];
  profilePhoto?: string;
  cvUrl?: string;
}

/**
 * Hero component with academic focus
 * Displays name, title, research interests, profile photo, and call-to-action buttons
 */
const Hero: React.FC<HeroProps> = ({
  name,
  title,
  researchInterests,
  profilePhoto = getAssetPath('/profile_photo.png'),
  cvUrl = getAssetPath('/info/PARTHA_SARKER_SOFTWARE_ENGINEER_RESUME.pdf'),
}) => {
  const theme = useTheme();

  // Function to handle scroll to next section
  const handleScrollToSection = (sectionId: string) => {
    scrollToElement(sectionId);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '90vh',
        textAlign: 'center',
        py: 4,
        px: 2,
        background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid sx={{ xs: 12, md: 4, display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                mb: { xs: 4, md: 0 },
              }}
            >
              <Avatar
                src={profilePhoto}
                alt={`${name} profile photo`}
                sx={{
                  width: { xs: 200, sm: 250, md: 300 },
                  height: { xs: 200, sm: 250, md: 300 },
                  border: `4px solid ${theme.palette.primary.main}`,
                  boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -10,
                  left: -10,
                  right: -10,
                  bottom: -10,
                  borderRadius: '50%',
                  border: `2px dashed ${theme.palette.secondary.main}`,
                  animation: 'spin 30s linear infinite',
                  '@keyframes spin': {
                    '0%': {
                      transform: 'rotate(0deg)',
                    },
                    '100%': {
                      transform: 'rotate(360deg)',
                    },
                  },
                  display: { xs: 'none', md: 'block' },
                }}
              />
            </Box>
          </Grid>

          <Grid sx={{ xs: 12, md: 8 }}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                mb: 2,
                color: theme.palette.primary.main,
              }}
            >
              {name}
            </Typography>

            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 500,
                color: 'text.secondary',
                maxWidth: '800px',
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                mb: 4,
                mx: 'auto',
              }}
            >
              {title}
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  color: theme.palette.secondary.main,
                }}
              >
                Research Interests
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: 1,
                  mb: 4,
                }}
              >
                {researchInterests.map((interest, index) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: '#fff',
                      borderRadius: '20px',
                      px: 2,
                      py: 0.5,
                      display: 'inline-block',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                    }}
                  >
                    {interest}
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component="a"
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                Download Academic CV
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => handleScrollToSection('projects')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                }}
              >
                View Projects & Research
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 10, sm: 20, md: 30 },
          mt: { xs: 6, md: 0 },
          zIndex: 1,
          display: { xs: 'none', sm: 'block' } // Hide on mobile, show on larger screens
        }}
      >
        <IconButton
          onClick={() => handleScrollToSection('education')}
          sx={{
            animation: 'bounce 2s infinite',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateY(0)',
              },
              '40%': {
                transform: 'translateY(-20px)',
              },
              '60%': {
                transform: 'translateY(-10px)',
              },
            },
          }}
        >
          <KeyboardArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Hero;