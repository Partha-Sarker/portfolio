import { Typography, useTheme, Grid } from '@mui/material';
import Layout from './components/layout/Layout';
import Section from './components/layout/Section';
import SectionContainer from './components/layout/SectionContainer';
import AcademicProfile from './components/academic/AcademicProfile';
import Education from './components/academic/Education';
import AcademicAchievements from './components/academic/AcademicAchievements';
import Hero from './components/academic/Hero';
import { education } from './data';
import './App.css';

function App() {
  const theme = useTheme();

  return (
    <Layout>
      {/* Hero Section */}
      <Section
        id="hero"
        minHeight="90vh"
        paddingY={0}
        fullWidth
      >
        <Hero
          name="Partha Sarker"
          title="Research-Focused Software Engineer"
          researchInterests={[
            "Human-Computer Interaction",
            "Computer Vision",
            "Artificial Intelligence",
            "Document Analysis",
            "Machine Learning"
          ]}
          profilePhoto="/profile_photo.png"
          cvUrl="/info/PARTHA_SARKER_SOFTWARE_ENGINEER_RESUME.pdf"
        />
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Academic Background"
        subtitle="Education and research achievements"
        backgroundColor={theme.palette.background.default}
      >
        <SectionContainer>
          <AcademicProfile />
          <Education education={education} />
          <AcademicAchievements />
        </SectionContainer>
      </Section>

      {/* Research Projects Section - Placeholder */}
      <Section
        id="projects"
        title="Research Projects"
        subtitle="Featured research work and technical projects"
      >
        <SectionContainer>
          <Grid container spacing={3}>
            <Grid sx={{ xs: 12 }}>
              <Typography variant="body1">
                Research projects section content will be implemented in task 6.1
              </Typography>
            </Grid>
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
          <Grid container spacing={3}>
            <Grid sx={{ xs: 12 }}>
              <Typography variant="body1">
                Experience section content will be implemented in task 7.1
              </Typography>
            </Grid>
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
          <Grid container spacing={3}>
            <Grid sx={{ xs: 12 }}>
              <Typography variant="body1">
                Skills section content will be implemented in task 8.1
              </Typography>
            </Grid>
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
          <Grid container spacing={3}>
            <Grid sx={{ xs: 12 }}>
              <Typography variant="body1">
                Personal interests section content will be implemented in task 9.1
              </Typography>
            </Grid>
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
          <Grid container spacing={3}>
            <Grid sx={{ xs: 12 }}>
              <Typography variant="body1">
                Contact section content will be implemented in task 10.1
              </Typography>
            </Grid>
          </Grid>
        </SectionContainer>
      </Section>
    </Layout>
  );
}

export default App;
