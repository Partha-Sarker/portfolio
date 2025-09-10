import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  Button,
  useMediaQuery,
} from "@mui/material";
import {
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Facebook as FacebookIcon,
  School as SchoolIcon,
  Description as DescriptionIcon,
  Code as CodeIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
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
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <Link
                href="mailto:parthasarker3@gmail.com"
                color="inherit"
                underline="hover"
              >
                parthasarker3@gmail.com
              </Link>
              <Box sx={{ mx: 1 }}>|</Box>
              <Link
                href="mailto:partha.sarker@marginedge.com"
                color="inherit"
                underline="hover"
              >
                partha.sarker@marginedge.com
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2" color="text.secondary">
                +8801521428057
              </Typography>
              <Box sx={{ mx: 1 }}>|</Box>
              <Typography variant="body2" color="text.secondary">
                +8801781431478
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: "1rem" }} />
              <Typography variant="body2" color="text.secondary">
                Dhaka, Bangladesh
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

        {/* Copyright */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 3 }}
        >
          © {new Date().getFullYear()} Academic Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
