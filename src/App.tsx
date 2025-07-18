import { Box, Typography, Button, useTheme, IconButton, Grid } from '@mui/material';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import Layout from './components/layout/Layout';
import Section from './components/layout/Section';
import SectionContainer from './components/layout/SectionContainer';
import AcademicProfile from './components/academic/AcademicProfile';
import { scrollToElement } from './utils/scrollUtils';
import './App.css';

function App() {
  const theme = useTheme();

  // Function to handle scroll to next section
  const handleScrollToSection = (sectionId: string) => {
    scrollToElement(sectionId);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <Section
        id="hero"
        minHeight="90vh"
        paddingY={0}
        fullWidth
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '90vh',
          textAlign: 'center',
          py: 4,
          px: 2,
          background: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/path/to/background-image.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
              mb: 2,
            }}
          >
            Academic Portfolio
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
            }}
          >
            Research-Focused Software Engineer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              mb: 4,
              maxWidth: '700px',
              fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            }}
          >
            Specializing in Computer Vision, Document Analysis, and Human-Computer Interaction
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Academic CV
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => handleScrollToSection('projects')}
            >
              View Research
            </Button>
          </Box>

          <Box sx={{ position: 'absolute', bottom: 30 }}>
            <IconButton
              onClick={() => handleScrollToSection('education')}
              sx={{
                animation: 'bounce 2s infinite',
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
      </Section>

      {/* Education Section - Placeholder */}
      <Section
        id="education"
        title="Academic Background"
        subtitle="Education and research achievements"
        backgroundColor={theme.palette.background.default}
      >
        <SectionContainer>
          <Grid size={{ xs: 12 }}>
            <AcademicProfile />
            <Typography variant="body1">
              Detailed education section content will be implemented in task 5.1
            </Typography>
          </Grid>
        </SectionContainer>
      </Section>

      {/* Research Projects Section - Placeholder */}
      <Section
        id="projects"
        title="Research Projects"
        subtitle="Featured research work and technical projects"
      >
        <SectionContainer>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1">
              Research projects section content will be implemented in task 6.1
            </Typography>
          </Grid>
        </SectionContainer>
      </Section>

      {/* Experience Section - Placeholder */}
      <Section
        id="experience"
        title="Professional Experience"
        subtitle="Work history with research relevance"
        backgroundColor={theme.palette.background.default}
      >
        <SectionContainer>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1">
              Experience section content will be implemented in task 7.1
            </Typography>
          </Grid>
        </SectionContainer>
      </Section>

      {/* Skills Section - Placeholder */}
      <Section
        id="skills"
        title="Skills & Expertise"
        subtitle="Technical skills and competencies"
      >
        <SectionContainer>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1">
              Skills section content will be implemented in task 8.1
            </Typography>
          </Grid>
        </SectionContainer>
      </Section>

      {/* Personal Interests Section - Placeholder */}
      <Section
        id="interests"
        title="Personal Interests"
        subtitle="Music and other dimensions"
        backgroundColor={theme.palette.background.default}
      >
        <SectionContainer>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1">
              Personal interests section content will be implemented in task 9.1
            </Typography>
          </Grid>
        </SectionContainer>
      </Section>

      {/* Contact Section - Placeholder */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Get in touch for professional opportunities"
      >
        <SectionContainer>
          <Grid size={{ xs: 12 }}>
            <Typography variant="body1">
              Contact section content will be implemented in task 10.1
            </Typography>
          </Grid>
        </SectionContainer>
      </Section>
    </Layout>
  );
}

export default App;
