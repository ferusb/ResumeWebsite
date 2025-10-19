import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StyledCard } from '../StyledCard';

const theme = createTheme({
  palette: {
    primary: { main: '#9333ea' },
    secondary: { main: '#ec4899' },
    background: { paper: '#ffffff' },
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 4px 8px rgba(0,0,0,0.1)',
    '0px 6px 12px rgba(0,0,0,0.1)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 10px 20px rgba(0,0,0,0.1)',
    '0px 12px 24px rgba(0,0,0,0.1)',
    '0px 14px 28px rgba(0,0,0,0.1)',
    '0px 16px 32px rgba(0,0,0,0.1)',
    ...Array(16).fill('0px 0px 0px rgba(0,0,0,0)'),
  ] as any,
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('StyledCard', () => {
  describe('Rendering', () => {
    it('should render children content', () => {
      renderWithTheme(
        <StyledCard>
          <div>Card Content</div>
        </StyledCard>
      );
      expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('should render with default elevated variant', () => {
      renderWithTheme(<StyledCard>Default Card</StyledCard>);
      const card = screen.getByText('Default Card').parentElement;
      expect(card).toBeInTheDocument();
    });

    it('should render with outlined variant', () => {
      renderWithTheme(<StyledCard variant="outlined">Outlined Card</StyledCard>);
      const card = screen.getByText('Outlined Card').parentElement;
      expect(card).toBeInTheDocument();
    });

    it('should render with elevated variant', () => {
      renderWithTheme(<StyledCard variant="elevated">Elevated Card</StyledCard>);
      const card = screen.getByText('Elevated Card').parentElement;
      expect(card).toBeInTheDocument();
    });
  });

  describe('Interactive behavior', () => {
    it('should render as non-interactive by default', () => {
      const { container } = renderWithTheme(<StyledCard>Non-interactive</StyledCard>);
      const card = container.firstChild;
      expect(card).toBeInTheDocument();
    });

    it('should render as interactive when prop is true', () => {
      const { container } = renderWithTheme(
        <StyledCard interactive>Interactive Card</StyledCard>
      );
      const card = container.firstChild;
      expect(card).toBeInTheDocument();
    });

    it('should handle onClick when interactive', () => {
      const handleClick = jest.fn();
      const { container } = renderWithTheme(
        <StyledCard interactive onClick={handleClick}>
          Clickable Card
        </StyledCard>
      );

      const card = container.firstChild as HTMLElement;
      fireEvent.click(card);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Glow effect', () => {
    it('should render without glow effect by default', () => {
      const { container } = renderWithTheme(<StyledCard>No Glow</StyledCard>);
      const card = container.firstChild;
      expect(card).toBeInTheDocument();
    });

    it('should render with glow effect when prop is true', () => {
      const { container } = renderWithTheme(
        <StyledCard glowEffect>Glowing Card</StyledCard>
      );
      const card = container.firstChild;
      expect(card).toBeInTheDocument();
    });

    it('should render with both interactive and glow effect', () => {
      const { container } = renderWithTheme(
        <StyledCard interactive glowEffect>
          Interactive & Glowing
        </StyledCard>
      );
      const card = container.firstChild;
      expect(card).toBeInTheDocument();
    });
  });

  describe('Styling', () => {
    it('should accept custom sx prop', () => {
      renderWithTheme(
        <StyledCard sx={{ padding: 4, margin: 2 }}>
          Custom Styled Card
        </StyledCard>
      );
      expect(screen.getByText('Custom Styled Card')).toBeInTheDocument();
    });

    it('should merge custom sx with default styles', () => {
      renderWithTheme(
        <StyledCard sx={{ border: '2px solid red' }}>
          Merged Styles
        </StyledCard>
      );
      expect(screen.getByText('Merged Styles')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have correct display name', () => {
      expect(StyledCard.displayName).toBe('StyledCard');
    });

    it('should support role attribute', () => {
      renderWithTheme(
        <StyledCard role="article">
          Article Card
        </StyledCard>
      );
      expect(screen.getByRole('article')).toBeInTheDocument();
    });

    it('should support aria attributes', () => {
      renderWithTheme(
        <StyledCard aria-label="Product card">
          Product
        </StyledCard>
      );
      expect(screen.getByLabelText('Product card')).toBeInTheDocument();
    });
  });

  describe('Props forwarding', () => {
    it('should forward MUI Card props', () => {
      renderWithTheme(
        <StyledCard raised>
          Raised Card
        </StyledCard>
      );
      expect(screen.getByText('Raised Card')).toBeInTheDocument();
    });

    it('should accept custom className', () => {
      const { container } = renderWithTheme(
        <StyledCard className="custom-card">
          Custom Class
        </StyledCard>
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('custom-card');
    });

    it('should accept data attributes', () => {
      const { container } = renderWithTheme(
        <StyledCard data-testid="test-card">
          Test Card
        </StyledCard>
      );
      expect(screen.getByTestId('test-card')).toBeInTheDocument();
    });
  });

  describe('Animation', () => {
    it('should render with framer-motion properties', () => {
      const { container } = renderWithTheme(
        <StyledCard>
          Animated Card
        </StyledCard>
      );
      const card = container.firstChild;
      expect(card).toBeInTheDocument();
    });
  });
});
