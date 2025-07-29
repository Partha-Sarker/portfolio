import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useScrollTrigger,
  Slide,
  Divider
} from '@mui/material';
import { Menu as MenuIcon, School as SchoolIcon } from '@mui/icons-material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import routes from '../../router/routes';
import { scrollToElement, scrollToTop } from '../../utils/scrollUtils';
import { getAssetPath } from '../../utils/assetUtils';

// Props for the hide on scroll functionality
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

// Component to hide the header on scroll down
function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Navigation items from routes
  const navItems = routes.filter(route => route.showInNav);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle navigation click - either scroll to section or navigate to page
  const handleNavClick = (path: string, sectionId?: string) => {
    if (location.pathname === '/' && sectionId) {
      // If we're on the home page and there's a section ID, scroll to it
      scrollToElement(sectionId);
    } else if (path === '/') {
      // If clicking home, always scroll to top (whether we're on home or not)
      scrollToTop();
    }
    // For other cases, React Router will handle the navigation

    // Close mobile drawer if open
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  // Check if we need to scroll to a section after navigation
  useEffect(() => {
    // Find the route that matches the current path
    const currentRoute = routes.find(route => route.path === location.pathname);

    // If there's a section ID and we just navigated to this route, scroll to the section
    if (currentRoute?.sectionId) {
      const timer = setTimeout(() => {
        scrollToElement(currentRoute.sectionId as string);
      }, 100); // Small delay to ensure the DOM is ready

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // Mobile drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}>
        <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography
          variant="h6"
          component="button"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/', undefined);
          }}
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 'inherit',
            fontFamily: 'inherit'
          }}
        >
          Academic Portfolio
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            component={RouterLink}
            to={item.path}
            key={item.path}
            onClick={() => handleNavClick(item.path, item.sectionId)}
            sx={{
              textAlign: 'center',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.08)',
              },
              backgroundColor: location.pathname === item.path ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
              ...(item.path === '/' && {
                background: 'none',
                border: 'none',
                width: '100%',
                cursor: 'pointer'
              })
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                '& .MuiTypography-root': {
                  fontWeight: location.pathname === item.path ? 700 : 500,
                  color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                }
              }}
            />
          </ListItem>
        ))}
        <ListItem
          component="a"
          href={getAssetPath('/Academic_CV.pdf')}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            textAlign: 'center',
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.08)',
            },
          }}
        >
          <ListItemText
            primary="Academic CV"
            sx={{
              '& .MuiTypography-root': {
                fontWeight: 500,
              }
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          color="default"
          elevation={0}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderBottom: '1px solid',
            borderColor: 'divider',
            backdropFilter: 'blur(8px)',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              {/* Logo and Brand */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
                <SchoolIcon
                  sx={{
                    mr: 1,
                    color: 'primary.main',
                    fontSize: { xs: 24, sm: 28, md: 32 }
                  }}
                />
                <Typography
                  variant="h6"
                  component={RouterLink}
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/', undefined);
                  }}
                  sx={{
                    mr: 2,
                    fontFamily: 'Roboto',
                    fontWeight: 700,
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                    cursor: 'pointer'
                  }}
                >
                  Academic Portfolio
                </Typography>
              </Box>

              {/* Desktop/Tablet Navigation */}
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      onClick={() => handleNavClick(item.path, item.sectionId)}
                      color={location.pathname === item.path ? 'primary' : 'inherit'}
                      sx={{
                        mx: { sm: 0.5, md: 1 },
                        fontSize: { sm: '0.875rem', md: '1rem' },
                        fontWeight: location.pathname === item.path ? 700 : 500,
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                  <Button
                    variant="outlined"
                    color="primary"
                    component="a"
                    href={getAssetPath('/Academic_CV.pdf')}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      ml: { sm: 1, md: 2 },
                      fontSize: { sm: '0.875rem', md: '1rem' }
                    }}
                  >
                    Academic CV
                  </Button>
                </Box>
              )}

              {/* Mobile Navigation Icon */}
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 0.5 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Mobile Navigation Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Toolbar placeholder to prevent content from hiding behind the fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default Header;