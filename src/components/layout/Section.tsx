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
  paddingY = { xs: 4, sm: 5, md: 6 },
}) => {
  const theme = useTheme();

  return (
    <Box
      id={id}
      component="section"
      sx={{
        backgroundColor: backgroundColor || 'transparent',
        pt: typeof paddingY === 'object' ?
          { xs: paddingY.xs ? paddingY.xs * 0.7 : 2.8, sm: paddingY.sm ? paddingY.sm * 0.7 : 3.5, md: paddingY.md ? paddingY.md * 0.7 : 4.2 } :
          paddingY * 0.7,
        pb: 0,
        minHeight: minHeight,
        scrollMarginTop: '64px', // Offset for fixed header
        borderRadius: 4,
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth={fullWidth ? false : 'lg'} disableGutters={fullWidth}>
        {(title || subtitle) && (
          <Box sx={{ mb: 4, textAlign: 'center' }}>
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