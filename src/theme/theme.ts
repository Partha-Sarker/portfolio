import { createTheme } from '@mui/material/styles';

// Define the color palette based on the design document
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Deep blue - Representing professionalism and trust
    },
    secondary: {
      main: '#009688', // Teal - Representing growth and innovation
    },
    background: {
      default: '#f5f5f5', // Light gray - For readability and clean appearance
      paper: '#ffffff',
    },
    text: {
      primary: '#333333', // Dark gray - For optimal readability
    },
    warning: {
      main: '#ffc107', // Amber - For highlighting important elements
    },
  },
  typography: {
    fontFamily: '"Roboto", "Open Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"Open Sans", sans-serif',
      lineHeight: 1.6,
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      lineHeight: 1.5,
    },
  },
  components: {
    // Global component overrides
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase transformation
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1200,
      lg: 1440,
      xl: 1920,
    },
  },
});

export default theme;