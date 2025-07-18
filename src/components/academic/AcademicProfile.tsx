import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Chip, 
  Grid, 
  Divider,
  useTheme
} from '@mui/material';
import { 
  School as SchoolIcon,
  Science as ScienceIcon,
  Psychology as PsychologyIcon,
  Biotech as BiotechIcon,
  ImportContacts as ImportContactsIcon
} from '@mui/icons-material';

interface ResearchInterest {
  title: string;
  description: string;
  icon: React.ReactNode;
}

/**
 * Academic Profile component that showcases research interests and academic focus
 */
const AcademicProfile: React.FC = () => {
  const theme = useTheme();

  // Research interests data
  const researchInterests: ResearchInterest[] = [
    {
      title: 'Computer Vision',
      description: 'Research on image processing techniques for document analysis and segmentation.',
      icon: <BiotechIcon color="primary" />
    },
    {
      title: 'Human-Computer Interaction',
      description: 'Exploring intuitive and effective user interface design for educational applications.',
      icon: <PsychologyIcon color="primary" />
    },
    {
      title: 'Document Analysis',
      description: 'Techniques for processing and analyzing handwritten documents, particularly in Bengali script.',
      icon: <ImportContactsIcon color="primary" />
    }
  ];

  return (
    <Box sx={{ mb: 4 }}>
      {/* Academic Credentials Banner */}
      <Paper 
        elevation={0}
        sx={{ 
          p: 3, 
          mb: 4, 
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          borderRadius: 2,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            top: -20, 
            right: -20, 
            opacity: 0.1, 
            transform: 'rotate(15deg)'
          }}
        >
          <SchoolIcon sx={{ fontSize: 180 }} />
        </Box>
        
        <Typography variant="h4" component="h2" gutterBottom fontWeight={700}>
          Academic Focus
        </Typography>
        
        <Typography variant="body1" sx={{ maxWidth: '80%', mb: 2 }}>
          Dedicated to advancing research in computer vision and human-computer interaction, 
          with a particular interest in document analysis and educational technology.
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          <Chip 
            icon={<SchoolIcon />} 
            label="B.Sc. in Computer Science" 
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              color: 'white',
              '& .MuiChip-icon': { color: 'white' }
            }} 
          />
          <Chip 
            icon={<ScienceIcon />} 
            label="Research Focus" 
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              color: 'white',
              '& .MuiChip-icon': { color: 'white' }
            }} 
          />
        </Box>
      </Paper>

      {/* Research Interests */}
      <Typography variant="h5" component="h3" gutterBottom fontWeight={600} sx={{ mb: 3 }}>
        Research Interests
      </Typography>
      
      <Grid container spacing={3}>
        {researchInterests.map((interest, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Paper 
              elevation={1}
              sx={{ 
                p: 3, 
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ mr: 1 }}>
                  {interest.icon}
                </Box>
                <Typography variant="h6" component="h4" fontWeight={600}>
                  {interest.title}
                </Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">
                {interest.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AcademicProfile;