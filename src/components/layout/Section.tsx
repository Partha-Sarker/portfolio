import React, { ReactNode } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  backgroundColor?: string;
  fullWidth?: boolean;
  minHeight?: string | number;
  paddingY?: number | { xs?: number; sm?: number; md?: number; lg?: number };
}

/**
 * Reusable Section component for content sections
 * Provides consistent styling and structure for all sections
 */
const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  backgroundColor,
  fullWidth = false,
  minHeight,
  paddingY = { xs: 6, sm: 8, md: 10 },
}) => {
  const theme = useTheme();

  return (
    <Box
      id={id}
      component="section"
      sx={{
        backgroundColor: backgroundColor || 'transparent',
        py: paddingY,
        minHeight: minHeight,
        scrollMarginTop: '64px', // Offset for fixed header
      }}
    >
      <Container maxWidth={fullWidth ? false : 'lg'} disableGutters={fullWidth}>
        {(title || subtitle) && (
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            {title && (
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                  position: 'relative',
                  display: 'inline-block',
                  mb: 2,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: '50%',
                    width: '80px',
                    height: '4px',
                    backgroundColor: theme.palette.primary.main,
                    transform: 'translateX(-50%)',
                  },
                }}
              >
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography
                variant="h5"
                component="p"
                color="text.secondary"
                sx={{
                  maxWidth: '800px',
                  mx: 'auto',
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section;