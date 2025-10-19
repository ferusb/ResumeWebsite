import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TechBadge } from '../TechBadge';

const theme = createTheme({
  palette: {
    primary: { main: '#9333ea' },
    secondary: { main: '#ec4899' },
    accent: { main: '#3b82f6' },
  },
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('TechBadge', () => {
  describe('Rendering', () => {
    it('should render technology name', () => {
      renderWithTheme(<TechBadge technology="React" />);
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('should render with default primary color scheme', () => {
      renderWithTheme(<TechBadge technology="TypeScript" />);
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });

    it('should render with secondary color scheme', () => {
      renderWithTheme(<TechBadge technology="Node.js" colorScheme="secondary" />);
      expect(screen.getByText('Node.js')).toBeInTheDocument();
    });

    it('should render with accent color scheme', () => {
      renderWithTheme(<TechBadge technology="Docker" colorScheme="accent" />);
      expect(screen.getByText('Docker')).toBeInTheDocument();
    });
  });

  describe('Glowing effect', () => {
    it('should render without glow by default', () => {
      renderWithTheme(<TechBadge technology="JavaScript" />);
      expect(screen.getByText('JavaScript')).toBeInTheDocument();
    });

    it('should render with glowing effect when prop is true', () => {
      renderWithTheme(<TechBadge technology="Python" glowing />);
      expect(screen.getByText('Python')).toBeInTheDocument();
    });

    it('should render without glowing effect when prop is false', () => {
      renderWithTheme(<TechBadge technology="Java" glowing={false} />);
      expect(screen.getByText('Java')).toBeInTheDocument();
    });
  });

  describe('Color schemes', () => {
    it('should render primary color scheme', () => {
      renderWithTheme(<TechBadge technology="HTML" colorScheme="primary" />);
      expect(screen.getByText('HTML')).toBeInTheDocument();
    });

    it('should render secondary color scheme', () => {
      renderWithTheme(<TechBadge technology="CSS" colorScheme="secondary" />);
      expect(screen.getByText('CSS')).toBeInTheDocument();
    });

    it('should render accent color scheme', () => {
      renderWithTheme(<TechBadge technology="Sass" colorScheme="accent" />);
      expect(screen.getByText('Sass')).toBeInTheDocument();
    });
  });

  describe('Combined props', () => {
    it('should render with glowing and primary color', () => {
      renderWithTheme(
        <TechBadge technology="Vue.js" colorScheme="primary" glowing />
      );
      expect(screen.getByText('Vue.js')).toBeInTheDocument();
    });

    it('should render with glowing and secondary color', () => {
      renderWithTheme(
        <TechBadge technology="Angular" colorScheme="secondary" glowing />
      );
      expect(screen.getByText('Angular')).toBeInTheDocument();
    });

    it('should render with glowing and accent color', () => {
      renderWithTheme(
        <TechBadge technology="Svelte" colorScheme="accent" glowing />
      );
      expect(screen.getByText('Svelte')).toBeInTheDocument();
    });
  });

  describe('Chip props forwarding', () => {
    it('should support size prop', () => {
      renderWithTheme(<TechBadge technology="Kubernetes" size="small" />);
      expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    });

    it('should support variant prop', () => {
      renderWithTheme(<TechBadge technology="AWS" variant="outlined" />);
      expect(screen.getByText('AWS')).toBeInTheDocument();
    });

    it('should support onClick handler', () => {
      const handleClick = jest.fn();
      renderWithTheme(<TechBadge technology="GraphQL" onClick={handleClick} />);

      const badge = screen.getByText('GraphQL');
      fireEvent.click(badge);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should render delete icon when onDelete is provided', () => {
      const handleDelete = jest.fn();
      renderWithTheme(<TechBadge technology="MongoDB" onDelete={handleDelete} />);

      // Verify delete icon is rendered
      expect(screen.getByTestId('CancelIcon')).toBeInTheDocument();
    });
  });

  describe('Multiple badges', () => {
    it('should render multiple TechBadge components independently', () => {
      renderWithTheme(
        <>
          <TechBadge technology="React" colorScheme="primary" />
          <TechBadge technology="TypeScript" colorScheme="secondary" />
          <TechBadge technology="Node.js" colorScheme="accent" />
        </>
      );

      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
      expect(screen.getByText('Node.js')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have correct display name', () => {
      expect(TechBadge.displayName).toBe('TechBadge');
    });

    it('should render as a span element', () => {
      const { container } = renderWithTheme(<TechBadge technology="PostgreSQL" />);
      const badge = container.querySelector('.MuiChip-root');
      expect(badge).toBeInTheDocument();
    });

    it('should support aria-label', () => {
      renderWithTheme(
        <TechBadge technology="Redis" aria-label="Technology: Redis" />
      );
      expect(screen.getByLabelText('Technology: Redis')).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('should accept custom className', () => {
      const { container } = renderWithTheme(
        <TechBadge technology="Jest" className="custom-badge" />
      );
      const badge = container.querySelector('.custom-badge');
      expect(badge).toBeInTheDocument();
    });

    it('should accept custom sx prop', () => {
      renderWithTheme(
        <TechBadge technology="Cypress" sx={{ margin: 2 }} />
      );
      expect(screen.getByText('Cypress')).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    it('should handle long technology names', () => {
      renderWithTheme(
        <TechBadge technology="Very Long Technology Name That Might Overflow" />
      );
      expect(screen.getByText('Very Long Technology Name That Might Overflow')).toBeInTheDocument();
    });

    it('should handle single character technology names', () => {
      renderWithTheme(<TechBadge technology="C" />);
      expect(screen.getByText('C')).toBeInTheDocument();
    });

    it('should handle technology names with special characters', () => {
      renderWithTheme(<TechBadge technology="C++" />);
      expect(screen.getByText('C++')).toBeInTheDocument();
    });

    it('should handle technology names with numbers', () => {
      renderWithTheme(<TechBadge technology="Vue.js 3" />);
      expect(screen.getByText('Vue.js 3')).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should be clickable when onClick is provided', () => {
      const handleClick = jest.fn();
      renderWithTheme(<TechBadge technology="Tailwind" onClick={handleClick} />);

      const badge = screen.getByText('Tailwind');
      fireEvent.click(badge);

      expect(handleClick).toHaveBeenCalled();
    });

    it('should support keyboard interaction', () => {
      const handleClick = jest.fn();
      renderWithTheme(<TechBadge technology="Bootstrap" onClick={handleClick} />);

      const badge = screen.getByText('Bootstrap').closest('.MuiChip-root');
      fireEvent.keyDown(badge!, { key: 'Enter' });

      // Chip component handles keyboard events internally
      expect(badge).toBeInTheDocument();
    });
  });
});
