import React, { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      width: '100%',
      maxWidth: '100vw',
      overflowX: 'hidden',
    }}>
      <Header />
      <Box component="main" sx={{
        flexGrow: 1,
        py: { xs: 2, sm: 4 },
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
      }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;