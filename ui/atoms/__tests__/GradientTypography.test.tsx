import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GradientTypography } from '../GradientTypography';
import { StyleProvider } from '../../../contexts/StyleContext';

const theme = createTheme({
  palette: {
    primary: { main: '#9333ea' },
    secondary: { main: '#ec4899' },
    text: {
      primary: '#1a202c',
      secondary: '#718096',
    },
  },
  customStyles: {
    glow: '0 0 20px rgba(147, 51, 234, 0.4)',
  },
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('GradientTypography', () => {
  describe('Rendering', () => {
    it('should render text content', () => {
      renderWithTheme(<GradientTypography>Hello World</GradientTypography>);
      expect(screen.getByText('Hello World')).toBeInTheDocument();
    });

    it('should render with default variant', () => {
      renderWithTheme(<GradientTypography>Default Text</GradientTypography>);
      expect(screen.getByText('Default Text')).toBeInTheDocument();
    });

    it('should render with h1 variant', () => {
      renderWithTheme(<GradientTypography variant="h1">Heading 1</GradientTypography>);
      expect(screen.getByText('Heading 1')).toBeInTheDocument();
    });

    it('should render with h2 variant', () => {
      renderWithTheme(<GradientTypography variant="h2">Heading 2</GradientTypography>);
      expect(screen.getByText('Heading 2')).toBeInTheDocument();
    });

    it('should render with body1 variant', () => {
      renderWithTheme(<GradientTypography variant="body1">Body Text</GradientTypography>);
      expect(screen.getByText('Body Text')).toBeInTheDocument();
    });

    it('should render with body2 variant', () => {
      renderWithTheme(<GradientTypography variant="body2">Small Text</GradientTypography>);
      expect(screen.getByText('Small Text')).toBeInTheDocument();
    });
  });

  describe('Gradient effect', () => {
    it('should render without gradient by default', () => {
      renderWithTheme(<GradientTypography>No Gradient</GradientTypography>);
      expect(screen.getByText('No Gradient')).toBeInTheDocument();
    });

    it('should render with gradient when prop is true', () => {
      renderWithTheme(<GradientTypography gradient>Gradient Text</GradientTypography>);
      expect(screen.getByText('Gradient Text')).toBeInTheDocument();
    });

    it('should render with gradient disabled when prop is false', () => {
      renderWithTheme(<GradientTypography gradient={false}>Plain Text</GradientTypography>);
      expect(screen.getByText('Plain Text')).toBeInTheDocument();
    });
  });

  describe('Glow effect', () => {
    it('should render without glow by default', () => {
      renderWithTheme(<GradientTypography>No Glow</GradientTypography>);
      expect(screen.getByText('No Glow')).toBeInTheDocument();
    });

    it('should render with glow when prop is true', () => {
      renderWithTheme(<GradientTypography glow>Glowing Text</GradientTypography>);
      expect(screen.getByText('Glowing Text')).toBeInTheDocument();
    });

    it('should render with glow disabled when prop is false', () => {
      renderWithTheme(<GradientTypography glow={false}>Normal Text</GradientTypography>);
      expect(screen.getByText('Normal Text')).toBeInTheDocument();
    });
  });

  describe('Combined effects', () => {
    it('should render with both gradient and glow', () => {
      renderWithTheme(
        <GradientTypography gradient glow>
          Gradient & Glow
        </GradientTypography>
      );
      expect(screen.getByText('Gradient & Glow')).toBeInTheDocument();
    });

    it('should render gradient without glow', () => {
      renderWithTheme(
        <GradientTypography gradient glow={false}>
          Just Gradient
        </GradientTypography>
      );
      expect(screen.getByText('Just Gradient')).toBeInTheDocument();
    });

    it('should render glow without gradient', () => {
      renderWithTheme(
        <GradientTypography gradient={false} glow>
          Just Glow
        </GradientTypography>
      );
      expect(screen.getByText('Just Glow')).toBeInTheDocument();
    });
  });

  describe('Typography props', () => {
    it('should support align prop', () => {
      renderWithTheme(<GradientTypography align="center">Centered</GradientTypography>);
      expect(screen.getByText('Centered')).toBeInTheDocument();
    });

    it('should support gutterBottom prop', () => {
      renderWithTheme(<GradientTypography gutterBottom>With Margin</GradientTypography>);
      expect(screen.getByText('With Margin')).toBeInTheDocument();
    });

    it('should support noWrap prop', () => {
      renderWithTheme(<GradientTypography noWrap>No Wrap Text</GradientTypography>);
      expect(screen.getByText('No Wrap Text')).toBeInTheDocument();
    });

    it('should support component prop', () => {
      renderWithTheme(
        <GradientTypography component="span">Span Element</GradientTypography>
      );
      const element = screen.getByText('Span Element');
      expect(element.tagName).toBe('SPAN');
    });
  });

  describe('Styling', () => {
    it('should accept custom sx prop', () => {
      renderWithTheme(
        <GradientTypography sx={{ fontSize: 24, fontWeight: 700 }}>
          Custom Style
        </GradientTypography>
      );
      expect(screen.getByText('Custom Style')).toBeInTheDocument();
    });

    it('should accept custom className', () => {
      renderWithTheme(
        <GradientTypography className="custom-typography">
          Custom Class
        </GradientTypography>
      );
      expect(screen.getByText('Custom Class')).toHaveClass('custom-typography');
    });
  });

  describe('Accessibility', () => {
    it('should have correct display name', () => {
      expect(GradientTypography.displayName).toBe('GradientTypography');
    });

    it('should support aria-label', () => {
      renderWithTheme(
        <GradientTypography aria-label="Important message">
          Message
        </GradientTypography>
      );
      expect(screen.getByLabelText('Important message')).toBeInTheDocument();
    });

    it('should render correct heading levels', () => {
      const { rerender } = renderWithTheme(
        <GradientTypography variant="h1">H1</GradientTypography>
      );
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

      rerender(
        <ThemeProvider theme={theme}>
          <GradientTypography variant="h2">H2</GradientTypography>
        </ThemeProvider>
      );
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });
  });

  describe('Children rendering', () => {
    it('should render string children', () => {
      renderWithTheme(<GradientTypography>Simple text</GradientTypography>);
      expect(screen.getByText('Simple text')).toBeInTheDocument();
    });

    it('should render React elements as children', () => {
      renderWithTheme(
        <GradientTypography>
          <span data-testid="child-element">Child Element</span>
        </GradientTypography>
      );
      expect(screen.getByTestId('child-element')).toBeInTheDocument();
    });

    it('should render multiple children', () => {
      renderWithTheme(
        <GradientTypography>
          First <strong>bold</strong> Last
        </GradientTypography>
      );
      expect(screen.getByText(/First/)).toBeInTheDocument();
      expect(screen.getByText(/bold/)).toBeInTheDocument();
    });
  });
});
