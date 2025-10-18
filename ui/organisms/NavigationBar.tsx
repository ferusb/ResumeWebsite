import React, { memo, useState, useCallback } from 'react';
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { GradientTypography } from '../atoms/GradientTypography';
import { NavigationItem } from '../../types/components.types';

const navItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Verily', href: '/verily' },
  { label: 'Target', href: '/target' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  backdropFilter: 'blur(12px)',
  boxShadow: theme.shadows[2],
}));

const NavLink = styled(Link)<{ active: boolean }>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  textDecoration: 'none',
  fontWeight: active ? 700 : 500,
  fontSize: '0.95rem',
  position: 'relative',
  padding: '8px 16px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const ActiveIndicator = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 2,
  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: '2px 2px 0 0',
}));

export const NavigationBar = memo(() => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const isActive = useCallback((href: string) => router.pathname === href, [router.pathname]);

  return (
    <>
      <StyledAppBar position="fixed" elevation={0}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1 }}>
              <Link href="/" passHref legacyBehavior>
                <Box component="a" sx={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                    }}
                  >
                    B
                  </Box>
                  <GradientTypography variant="h6" gradient sx={{ display: { xs: 'none', sm: 'block' } }}>
                    ferusb
                  </GradientTypography>
                </Box>
              </Link>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <Box key={item.href} sx={{ position: 'relative' }}>
                  <NavLink href={item.href} active={isActive(item.href)}>
                    {item.label}
                    {isActive(item.href) && (
                      <ActiveIndicator
                        layoutId="activeNav"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </NavLink>
                </Box>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { md: 'none' } }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: 250 },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.href}
              component={Link}
              href={item.href}
              onClick={handleDrawerToggle}
              sx={{
                backgroundColor: isActive(item.href) ? (theme) => alpha(theme.palette.primary.main, 0.1) : 'transparent',
                borderLeft: isActive(item.href) ? (theme) => `4px solid ${theme.palette.primary.main}` : 'none',
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: isActive(item.href) ? 700 : 500,
                  color: isActive(item.href) ? 'primary' : 'text.primary',
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar /> {/* Spacer */}
    </>
  );
});

NavigationBar.displayName = 'NavigationBar';
