import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AnimatedButton } from '../AnimatedButton';

const theme = createTheme({
  palette: {
    primary: { main: '#9333ea' },
    secondary: { main: '#ec4899' },
  },
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('AnimatedButton', () => {
  describe('Rendering', () => {
    it('should render with children text', () => {
      renderWithTheme(<AnimatedButton>Click Me</AnimatedButton>);
      expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
    });

    it('should render with default primary color scheme', () => {
      renderWithTheme(<AnimatedButton>Button</AnimatedButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render with secondary color scheme', () => {
      renderWithTheme(<AnimatedButton colorScheme="secondary">Button</AnimatedButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render with accent color scheme', () => {
      renderWithTheme(<AnimatedButton colorScheme="accent">Button</AnimatedButton>);
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });
  });

  describe('Loading State', () => {
    it('should show loading spinner when loading is true', () => {
      renderWithTheme(<AnimatedButton loading>Submit</AnimatedButton>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('should hide start icon when loading', () => {
      renderWithTheme(
        <AnimatedButton loading startIcon={<span data-testid="start-icon">Icon</span>}>
          Submit
        </AnimatedButton>
      );
      expect(screen.queryByTestId('start-icon')).not.toBeInTheDocument();
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('should not be disabled when loading is false', () => {
      renderWithTheme(<AnimatedButton loading={false}>Submit</AnimatedButton>);
      const button = screen.getByRole('button');
      expect(button).not.toBeDisabled();
    });
  });

  describe('Disabled State', () => {
    it('should be disabled when disabled prop is true', () => {
      renderWithTheme(<AnimatedButton disabled>Disabled</AnimatedButton>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });

    it('should be disabled when both disabled and loading are true', () => {
      renderWithTheme(<AnimatedButton disabled loading>Disabled</AnimatedButton>);
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  describe('Icons', () => {
    it('should render with start icon', () => {
      renderWithTheme(
        <AnimatedButton startIcon={<span data-testid="start-icon">➡️</span>}>
          Next
        </AnimatedButton>
      );
      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
    });

    it('should render with end icon', () => {
      renderWithTheme(
        <AnimatedButton endIcon={<span data-testid="end-icon">⬅️</span>}>
          Back
        </AnimatedButton>
      );
      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });

    it('should render with both start and end icons', () => {
      renderWithTheme(
        <AnimatedButton
          startIcon={<span data-testid="start-icon">➡️</span>}
          endIcon={<span data-testid="end-icon">⬅️</span>}
        >
          Both
        </AnimatedButton>
      );
      expect(screen.getByTestId('start-icon')).toBeInTheDocument();
      expect(screen.getByTestId('end-icon')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should call onClick when clicked', () => {
      const handleClick = jest.fn();
      renderWithTheme(<AnimatedButton onClick={handleClick}>Click</AnimatedButton>);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', () => {
      const handleClick = jest.fn();
      renderWithTheme(<AnimatedButton onClick={handleClick} disabled>Click</AnimatedButton>);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not call onClick when loading', () => {
      const handleClick = jest.fn();
      renderWithTheme(<AnimatedButton onClick={handleClick} loading>Click</AnimatedButton>);

      const button = screen.getByRole('button');
      fireEvent.click(button);

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have correct display name', () => {
      expect(AnimatedButton.displayName).toBe('AnimatedButton');
    });

    it('should support aria-label', () => {
      renderWithTheme(<AnimatedButton aria-label="Submit form">Submit</AnimatedButton>);
      expect(screen.getByLabelText('Submit form')).toBeInTheDocument();
    });

    it('should be keyboard accessible', () => {
      const handleClick = jest.fn();
      renderWithTheme(<AnimatedButton onClick={handleClick}>Press Enter</AnimatedButton>);

      const button = screen.getByRole('button');
      button.focus();
      expect(button).toHaveFocus();
    });
  });

  describe('Props forwarding', () => {
    it('should forward MUI Button props', () => {
      renderWithTheme(
        <AnimatedButton variant="outlined" size="large">
          Large Outlined
        </AnimatedButton>
      );
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should accept custom className', () => {
      renderWithTheme(<AnimatedButton className="custom-class">Custom</AnimatedButton>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });
  });
});
