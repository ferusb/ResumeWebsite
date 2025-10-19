import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ProjectCard } from '../ProjectCard';
import { ProjectData } from '../../../types/components.types';

const theme = createTheme({
  palette: {
    primary: { main: '#9333ea' },
    secondary: { main: '#ec4899' },
    accent: { main: '#3b82f6' },
    background: {
      paper: '#ffffff',
      default: '#f7fafc',
    },
    text: {
      primary: '#1a202c',
      secondary: '#718096',
    },
  },
  shape: { borderRadius: 8 },
  spacing: (factor: number) => `${8 * factor}px`,
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

const mockProject: ProjectData = {
  id: '1',
  title: 'E-Commerce Platform',
  description: 'A full-stack e-commerce solution',
  role: 'Senior Full-Stack Developer',
  period: '2023 - Present',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  achievements: [
    'Increased conversion rate by 35%',
    'Reduced page load time by 50%',
    'Implemented microservices architecture',
  ],
  impact: 'Generated $2M in additional revenue',
  metrics: '1M+ monthly active users',
};

describe('ProjectCard', () => {
  describe('Rendering', () => {
    it('should render project title', () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    });

    it('should render project description', () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      expect(screen.getByText('A full-stack e-commerce solution')).toBeInTheDocument();
    });

    it('should render role and period', () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      expect(screen.getByText(/Senior Full-Stack Developer/)).toBeInTheDocument();
      expect(screen.getByText(/2023 - Present/)).toBeInTheDocument();
    });

    it('should render metrics when provided', () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      expect(screen.getByText(/1M\+ monthly active users/)).toBeInTheDocument();
    });

    it('should render without metrics when not provided', () => {
      const projectWithoutMetrics = { ...mockProject, metrics: undefined };
      renderWithTheme(<ProjectCard project={projectWithoutMetrics} />);
      expect(screen.queryByText('Key Metrics:')).not.toBeInTheDocument();
    });

    it('should render without period when not provided', () => {
      const projectWithoutPeriod = { ...mockProject, period: undefined };
      renderWithTheme(<ProjectCard project={projectWithoutPeriod} />);
      expect(screen.queryByText('2023 - Present')).not.toBeInTheDocument();
    });
  });

  describe('Expand/Collapse functionality', () => {
    it('should start collapsed by default', () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      expect(screen.queryByText('Technologies Used')).not.toBeInTheDocument();
      expect(screen.queryByText('Key Achievements')).not.toBeInTheDocument();
    });

    it('should start expanded when defaultExpanded is true', () => {
      renderWithTheme(<ProjectCard project={mockProject} defaultExpanded />);
      expect(screen.getByText('Technologies Used')).toBeInTheDocument();
      expect(screen.getByText('Key Achievements')).toBeInTheDocument();
    });

    it('should expand when clicking the card', async () => {
      renderWithTheme(<ProjectCard project={mockProject} />);

      const card = screen.getByText('E-Commerce Platform').closest('.MuiBox-root');
      fireEvent.click(card!);

      await waitFor(() => {
        expect(screen.getByText('Technologies Used')).toBeInTheDocument();
      });
    });

    it('should expand when clicking the expand button', async () => {
      renderWithTheme(<ProjectCard project={mockProject} />);

      const expandButton = screen.getByLabelText('show more');
      fireEvent.click(expandButton);

      await waitFor(() => {
        expect(screen.getByText('Technologies Used')).toBeInTheDocument();
      });
    });

    it('should collapse when clicking expanded card', async () => {
      renderWithTheme(<ProjectCard project={mockProject} defaultExpanded />);

      expect(screen.getByText('Technologies Used')).toBeInTheDocument();

      const card = screen.getByText('E-Commerce Platform').closest('.MuiBox-root');
      fireEvent.click(card!);

      await waitFor(() => {
        expect(screen.queryByText('Technologies Used')).not.toBeInTheDocument();
      });
    });

    it('should toggle expanded state when clicking expand button', async () => {
      renderWithTheme(<ProjectCard project={mockProject} />);

      const expandButton = screen.getByLabelText('show more');

      // Expand
      fireEvent.click(expandButton);
      await waitFor(() => {
        expect(screen.getByText('Technologies Used')).toBeInTheDocument();
      });

      // Collapse
      fireEvent.click(expandButton);
      await waitFor(() => {
        expect(screen.queryByText('Technologies Used')).not.toBeInTheDocument();
      });
    });

    it('should handle expand button click without triggering card click', async () => {
      renderWithTheme(<ProjectCard project={mockProject} />);

      const expandButton = screen.getByLabelText('show more');

      // Initially collapsed
      expect(screen.queryByText('Technologies Used')).not.toBeInTheDocument();

      // Click expand button
      fireEvent.click(expandButton);

      // Should expand
      await waitFor(() => {
        expect(screen.getByText('Technologies Used')).toBeInTheDocument();
      });
    });
  });

  describe('Expanded content', () => {
    beforeEach(() => {
      renderWithTheme(<ProjectCard project={mockProject} defaultExpanded />);
    });

    it('should display all technologies', () => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Node.js')).toBeInTheDocument();
      expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    });

    it('should display all achievements', () => {
      expect(screen.getByText(/Increased conversion rate by 35%/)).toBeInTheDocument();
      expect(screen.getByText(/Reduced page load time by 50%/)).toBeInTheDocument();
      expect(screen.getByText(/Implemented microservices architecture/)).toBeInTheDocument();
    });

    it('should display business impact', () => {
      expect(screen.getByText('Business Impact')).toBeInTheDocument();
      expect(screen.getByText('Generated $2M in additional revenue')).toBeInTheDocument();
    });

    it('should render achievements as a list', () => {
      const achievements = screen.getAllByRole('listitem');
      expect(achievements).toHaveLength(3);
    });
  });

  describe('Technologies rendering', () => {
    it('should render single technology', () => {
      const singleTechProject = { ...mockProject, technologies: ['React'] };
      renderWithTheme(<ProjectCard project={singleTechProject} defaultExpanded />);
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('should render multiple technologies', () => {
      renderWithTheme(<ProjectCard project={mockProject} defaultExpanded />);
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('Node.js')).toBeInTheDocument();
      expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    });

    it('should render many technologies', () => {
      const manyTechProject = {
        ...mockProject,
        technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
      };
      renderWithTheme(<ProjectCard project={manyTechProject} defaultExpanded />);
      expect(screen.getByText('Docker')).toBeInTheDocument();
      expect(screen.getByText('Redis')).toBeInTheDocument();
    });
  });

  describe('Achievements rendering', () => {
    it('should render single achievement', () => {
      const singleAchievement = {
        ...mockProject,
        achievements: ['Launched MVP in 3 months'],
      };
      renderWithTheme(<ProjectCard project={singleAchievement} defaultExpanded />);
      expect(screen.getByText('Launched MVP in 3 months')).toBeInTheDocument();
    });

    it('should render multiple achievements', () => {
      renderWithTheme(<ProjectCard project={mockProject} defaultExpanded />);
      const achievements = screen.getAllByRole('listitem');
      expect(achievements.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Accessibility', () => {
    it('should have correct display name', () => {
      expect(ProjectCard.displayName).toBe('ProjectCard');
    });

    it('should have proper aria-expanded attribute', () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      const expandButton = screen.getByLabelText('show more');
      expect(expandButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('should update aria-expanded when expanded', async () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      const expandButton = screen.getByLabelText('show more');

      fireEvent.click(expandButton);

      await waitFor(() => {
        expect(expandButton).toHaveAttribute('aria-expanded', 'true');
      });
    });

    it('should have accessible button label', () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      expect(screen.getByLabelText('show more')).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    it('should handle project with empty achievements array', () => {
      const noAchievements = { ...mockProject, achievements: [] };
      renderWithTheme(<ProjectCard project={noAchievements} defaultExpanded />);
      expect(screen.getByText('Key Achievements')).toBeInTheDocument();
    });

    it('should handle project with empty technologies array', () => {
      const noTechnologies = { ...mockProject, technologies: [] };
      renderWithTheme(<ProjectCard project={noTechnologies} defaultExpanded />);
      expect(screen.getByText('Technologies Used')).toBeInTheDocument();
    });

    it('should handle very long project title', () => {
      const longTitle = {
        ...mockProject,
        title: 'Very Long Project Title That Should Still Display Properly Without Breaking Layout',
      };
      renderWithTheme(<ProjectCard project={longTitle} />);
      expect(screen.getByText(/Very Long Project Title/)).toBeInTheDocument();
    });

    it('should handle very long description', () => {
      const longDescription = {
        ...mockProject,
        description: 'A'.repeat(500),
      };
      renderWithTheme(<ProjectCard project={longDescription} />);
      expect(screen.getByText('A'.repeat(500))).toBeInTheDocument();
    });

    it('should handle very long impact statement', () => {
      const longImpact = {
        ...mockProject,
        impact: 'This project had a massive impact on the company by doing many things. '.repeat(10),
      };
      renderWithTheme(<ProjectCard project={longImpact} defaultExpanded />);
      expect(screen.getByText(/This project had a massive impact/)).toBeInTheDocument();
    });
  });

  describe('Styling and appearance', () => {
    it('should render with StyledCard component', () => {
      const { container } = renderWithTheme(<ProjectCard project={mockProject} />);
      expect(container.querySelector('.MuiCard-root')).toBeInTheDocument();
    });

    it('should have proper spacing', () => {
      renderWithTheme(<ProjectCard project={mockProject} />);
      const title = screen.getByText('E-Commerce Platform');
      expect(title).toBeInTheDocument();
    });
  });
});
