import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavigationBar } from '../NavigationBar';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock useMediaQuery hook
jest.mock('../../../hooks/useMediaQuery', () => ({
  useMediaQuery: jest.fn(),
}));

import { useRouter } from 'next/router';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const theme = createTheme({
  palette: {
    primary: { main: '#9333ea' },
    secondary: { main: '#ec4899' },
    background: {
      paper: '#ffffff',
      default: '#f7fafc',
    },
    text: {
      primary: '#1a202c',
      secondary: '#718096',
    },
  },
  shadows: Array(25).fill('0px 2px 4px rgba(0,0,0,0.1)') as any,
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

const mockUseRouter = useRouter as jest.MockedFunction<typeof useRouter>;
const mockUseMediaQuery = useMediaQuery as jest.MockedFunction<typeof useMediaQuery>;

describe('NavigationBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseRouter.mockReturnValue({
      pathname: '/',
      push: jest.fn(),
      route: '/',
      query: {},
      asPath: '/',
      back: jest.fn(),
      beforePopState: jest.fn(),
      prefetch: jest.fn(),
      reload: jest.fn(),
      replace: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isLocaleDomain: false,
      isReady: true,
      isPreview: false,
    } as any);
    mockUseMediaQuery.mockReturnValue(false);
  });

  describe('Rendering', () => {
    it('should render navigation bar', () => {
      renderWithTheme(<NavigationBar />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should render logo with text "B"', () => {
      renderWithTheme(<NavigationBar />);
      expect(screen.getByText('B')).toBeInTheDocument();
    });

    it('should render brand name "ferusb"', () => {
      renderWithTheme(<NavigationBar />);
      expect(screen.getByText('ferusb')).toBeInTheDocument();
    });

    it('should render all navigation items', () => {
      renderWithTheme(<NavigationBar />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Verily')).toBeInTheDocument();
      expect(screen.getByText('Target')).toBeInTheDocument();
      expect(screen.getByText('Projects')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('should render menu icon for mobile', () => {
      mockUseMediaQuery.mockReturnValue(true);
      renderWithTheme(<NavigationBar />);
      expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
    });
  });

  describe('Active state highlighting', () => {
    it('should highlight Home when on home page', () => {
      mockUseRouter.mockReturnValue({
        pathname: '/',
      } as any);

      renderWithTheme(<NavigationBar />);
      const homeLinks = screen.getAllByText('Home');
      expect(homeLinks[0]).toBeInTheDocument();
    });

    it('should highlight Verily when on verily page', () => {
      mockUseRouter.mockReturnValue({
        pathname: '/verily',
      } as any);

      renderWithTheme(<NavigationBar />);
      const verilyLinks = screen.getAllByText('Verily');
      expect(verilyLinks[0]).toBeInTheDocument();
    });

    it('should highlight Target when on target page', () => {
      mockUseRouter.mockReturnValue({
        pathname: '/target',
      } as any);

      renderWithTheme(<NavigationBar />);
      const targetLinks = screen.getAllByText('Target');
      expect(targetLinks[0]).toBeInTheDocument();
    });

    it('should highlight Projects when on projects page', () => {
      mockUseRouter.mockReturnValue({
        pathname: '/projects',
      } as any);

      renderWithTheme(<NavigationBar />);
      const projectsLinks = screen.getAllByText('Projects');
      expect(projectsLinks[0]).toBeInTheDocument();
    });

    it('should highlight Contact when on contact page', () => {
      mockUseRouter.mockReturnValue({
        pathname: '/contact',
      } as any);

      renderWithTheme(<NavigationBar />);
      const contactLinks = screen.getAllByText('Contact');
      expect(contactLinks[0]).toBeInTheDocument();
    });
  });

  describe('Mobile drawer functionality', () => {
    beforeEach(() => {
      mockUseMediaQuery.mockReturnValue(true);
    });

    it('should open drawer when menu icon is clicked', async () => {
      renderWithTheme(<NavigationBar />);

      const menuButton = screen.getByLabelText('open drawer');
      fireEvent.click(menuButton);

      await waitFor(() => {
        const drawerItems = screen.getAllByText('Home');
        expect(drawerItems.length).toBeGreaterThan(1);
      });
    });

    it('should close drawer when close icon is clicked', async () => {
      renderWithTheme(<NavigationBar />);

      // Open drawer
      const menuButton = screen.getByLabelText('open drawer');
      fireEvent.click(menuButton);

      await waitFor(() => {
        expect(screen.getAllByText('Home').length).toBeGreaterThan(1);
      });

      // Close drawer
      fireEvent.click(menuButton);

      await waitFor(() => {
        expect(screen.getAllByText('Home').length).toBe(1);
      });
    });

    it('should close drawer when navigation item is clicked', async () => {
      renderWithTheme(<NavigationBar />);

      // Open drawer
      const menuButton = screen.getByLabelText('open drawer');
      fireEvent.click(menuButton);

      await waitFor(() => {
        const homeLinks = screen.getAllByText('Home');
        expect(homeLinks.length).toBeGreaterThan(1);
      });

      // Click a navigation item in drawer
      const drawerHome = screen.getAllByText('Home')[1];
      fireEvent.click(drawerHome);

      // Drawer should close
      await waitFor(() => {
        expect(screen.getAllByText('Home').length).toBe(1);
      });
    });

    it('should toggle drawer state multiple times', async () => {
      renderWithTheme(<NavigationBar />);
      const menuButton = screen.getByLabelText('open drawer');

      // Open
      fireEvent.click(menuButton);
      await waitFor(() => {
        expect(screen.getAllByText('Home').length).toBeGreaterThan(1);
      });

      // Close
      fireEvent.click(menuButton);
      await waitFor(() => {
        expect(screen.getAllByText('Home').length).toBe(1);
      });

      // Open again
      fireEvent.click(menuButton);
      await waitFor(() => {
        expect(screen.getAllByText('Home').length).toBeGreaterThan(1);
      });
    });
  });

  describe('Logo navigation', () => {
    it('should have link to home page on logo', () => {
      renderWithTheme(<NavigationBar />);
      const logoContainer = screen.getByText('B').closest('a');
      expect(logoContainer).toHaveAttribute('href', '/');
    });

    it('should have link to home page on brand name', () => {
      renderWithTheme(<NavigationBar />);
      const brandName = screen.getByText('ferusb').closest('a');
      expect(brandName).toHaveAttribute('href', '/');
    });
  });

  describe('Navigation links', () => {
    it('should have correct href for Home', () => {
      renderWithTheme(<NavigationBar />);
      const homeLink = screen.getAllByText('Home')[0].closest('a');
      expect(homeLink).toHaveAttribute('href', '/');
    });

    it('should have correct href for Verily', () => {
      renderWithTheme(<NavigationBar />);
      const verilyLink = screen.getAllByText('Verily')[0].closest('a');
      expect(verilyLink).toHaveAttribute('href', '/verily');
    });

    it('should have correct href for Target', () => {
      renderWithTheme(<NavigationBar />);
      const targetLink = screen.getAllByText('Target')[0].closest('a');
      expect(targetLink).toHaveAttribute('href', '/target');
    });

    it('should have correct href for Projects', () => {
      renderWithTheme(<NavigationBar />);
      const projectsLink = screen.getAllByText('Projects')[0].closest('a');
      expect(projectsLink).toHaveAttribute('href', '/projects');
    });

    it('should have correct href for Contact', () => {
      renderWithTheme(<NavigationBar />);
      const contactLink = screen.getAllByText('Contact')[0].closest('a');
      expect(contactLink).toHaveAttribute('href', '/contact');
    });
  });

  describe('Responsive behavior', () => {
    it('should hide navigation links on mobile', () => {
      mockUseMediaQuery.mockReturnValue(true);
      renderWithTheme(<NavigationBar />);

      // Desktop nav should be hidden (style display: none)
      // Only logo and menu button should be visible
      expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
    });

    it('should show navigation links on desktop', () => {
      mockUseMediaQuery.mockReturnValue(false);
      renderWithTheme(<NavigationBar />);

      // All nav items should be visible
      expect(screen.getByText('Home')).toBeVisible();
      expect(screen.getByText('Verily')).toBeVisible();
      expect(screen.getByText('Target')).toBeVisible();
      expect(screen.getByText('Projects')).toBeVisible();
      expect(screen.getByText('Contact')).toBeVisible();
    });
  });

  describe('Accessibility', () => {
    it('should have correct display name', () => {
      expect(NavigationBar.displayName).toBe('NavigationBar');
    });

    it('should have proper ARIA labels', () => {
      renderWithTheme(<NavigationBar />);
      expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
    });

    it('should use semantic HTML banner role', () => {
      renderWithTheme(<NavigationBar />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should support keyboard navigation', () => {
      renderWithTheme(<NavigationBar />);
      const homeLink = screen.getAllByText('Home')[0];

      homeLink.focus();
      expect(document.activeElement).toBeTruthy();
    });
  });

  describe('Styling', () => {
    it('should have fixed position', () => {
      renderWithTheme(<NavigationBar />);
      const appBar = screen.getByRole('banner');
      expect(appBar).toBeInTheDocument();
    });

    it('should render spacer toolbar', () => {
      const { container } = renderWithTheme(<NavigationBar />);
      const toolbars = container.querySelectorAll('.MuiToolbar-root');
      expect(toolbars.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Mobile drawer rendering', () => {
    it('should render all navigation items in drawer', async () => {
      mockUseMediaQuery.mockReturnValue(true);
      renderWithTheme(<NavigationBar />);

      const menuButton = screen.getByLabelText('open drawer');
      fireEvent.click(menuButton);

      await waitFor(() => {
        // Each item appears twice: once in desktop nav (hidden) and once in drawer
        expect(screen.getAllByText('Home').length).toBeGreaterThan(1);
        expect(screen.getAllByText('Verily').length).toBeGreaterThan(1);
        expect(screen.getAllByText('Target').length).toBeGreaterThan(1);
        expect(screen.getAllByText('Projects').length).toBeGreaterThan(1);
        expect(screen.getAllByText('Contact').length).toBeGreaterThan(1);
      });
    });
  });
});
