import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Button,
  useMediaQuery
} from '@mui/material';
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  School as SchoolIcon,
  Description as DescriptionIcon,
  Code as CodeIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.grey[100],
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1rem' }} />
              <Link href="mailto:parthasarker3@gmail.com" color="inherit" underline="hover">
                parthasarker3@gmail.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1rem' }} />
              <Typography variant="body2" color="text.secondary">
                Dhaka, Bangladesh
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: '1rem' }} />
              <Typography variant="body2" color="text.secondary">
                +8801521428057
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <IconButton
                aria-label="LinkedIn"
                component="a"
                href="https://www.linkedin.com/in/partha-ahtrap"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ mr: 1 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="GitHub"
                component="a"
                href="https://github.com/Partha-Sarker"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ mr: 1 }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Site Navigation */}
        <Grid container spacing={2} sx={{ justifyContent: "space-between", alignItems: "center" }}>
          <Grid size={{ xs: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography
                variant="body2"
                color="text.secondary"
                component={RouterLink}
                to="/"
                sx={{ textDecoration: 'none', color: 'inherit' }}
              >
                Academic Portfolio
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 'auto' }}>
            <Box sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: 2
            }}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover" variant="body2">
                Home
              </Link>
              <Link component={RouterLink} to="/education" color="inherit" underline="hover" variant="body2">
                Education
              </Link>
              <Link component={RouterLink} to="/projects" color="inherit" underline="hover" variant="body2">
                Research Projects
              </Link>
              <Link component={RouterLink} to="/experience" color="inherit" underline="hover" variant="body2">
                Experience
              </Link>
              <Link component={RouterLink} to="/skills" color="inherit" underline="hover" variant="body2">
                Skills
              </Link>
              <Link component={RouterLink} to="/interests" color="inherit" underline="hover" variant="body2">
                Interests
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3 }}>
          © {new Date().getFullYear()} Academic Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;