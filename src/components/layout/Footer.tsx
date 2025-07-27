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
  Twitter as TwitterIcon,
  School as SchoolIcon,
  Description as DescriptionIcon,
  Code as CodeIcon
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
              <Link href="mailto:contact@example.com" color="inherit" underline="hover">
                contact@example.com
              </Link>
            </Box>
            <Box sx={{ mt: 2 }}>
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
              <IconButton
                aria-label="LinkedIn"
                component="a"
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{ mr: 1 }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                component="a"
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                size="small"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* CV Download */}
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Curriculum Vitae
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<DescriptionIcon />}
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textTransform: 'none' }}
              >
                Download Academic CV
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<CodeIcon />}
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textTransform: 'none' }}
              >
                View Projects & Research
              </Button>
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
              <Link component={RouterLink} to="/contact" color="inherit" underline="hover" variant="body2">
                Contact
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