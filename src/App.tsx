import { Typography, useTheme, Grid } from '@mui/material';
import Layout from './components/layout/Layout';
import Section from './components/layout/Section';
import SectionContainer from './components/layout/SectionContainer';
import AcademicProfile from './components/academic/AcademicProfile';
import Education from './components/academic/Education';
import AcademicAchievements from './components/academic/AcademicAchievements';
import Hero from './components/academic/Hero';
import { Experience } from './components/experience';
import { Skills } from './components/skills';
import { PersonalInterests } from './components/interests';
import { education } from './data';
import projects from './data/projects';
import { getAssetPath } from './utils/assetUtils';
import ProjectsSection from './components/projects/ProjectsSection';
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
            "AR/VR Development",
            "Machine Learning"
          ]}
          profilePhoto={getAssetPath('/profile_photo.png')}
          cvUrl={getAssetPath('/info/PARTHA_SARKER_SOFTWARE_ENGINEER_RESUME.pdf')}
        />
      </Section>

      {/* Education Section */}
      <Section
        id="education"
        title="Academic Background"
        subtitle="Education and research achievements"
        backgroundColor={theme.palette.background.default}
        fullWidth
      >
        <SectionContainer>
          <AcademicProfile />
          <Education education={education} />
          <AcademicAchievements />
        </SectionContainer>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Projects & Research"
        subtitle="A comprehensive showcase of research work, academic projects, and personal initiatives"
        fullWidth
      >
        <SectionContainer>
          <ProjectsSection projects={projects} />
        </SectionContainer>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Professional Experience"
        subtitle="Work history with research relevance"
        backgroundColor={theme.palette.background.default}
        fullWidth
      >
        <SectionContainer>
          <Experience />
        </SectionContainer>
      </Section>

      {/* Skills Section */}
      <Section
        id="skills"
        title="Skills & Expertise"
        subtitle="Technical skills and competencies"
        fullWidth
      >
        <SectionContainer>
          <Skills />
        </SectionContainer>
      </Section>

      {/* Personal Interests Section - Placeholder */}
      <Section
        id="interests"
        title="Personal Interests"
        subtitle="Music and other dimensions"
        backgroundColor={theme.palette.background.default}
        fullWidth
      >
        <SectionContainer>
          <PersonalInterests />
        </SectionContainer>
      </Section>

      
    </Layout>
  );
}

export default App;
