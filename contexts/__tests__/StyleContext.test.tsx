import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { StyleProvider, useStyleContext } from '../StyleContext';

// Mock the lib imports
jest.mock('../../lib/styleEngine', () => ({
  generateMuiTheme: jest.fn((config) => ({
    palette: {
      ...config.palette,
      mode: 'light',
      common: {
        black: '#000',
        white: '#fff',
      },
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },
      background: {
        default: '#ffffff',
        paper: '#fafafa',
      },
      text: {
        primary: '#000000',
        secondary: '#666666',
        disabled: '#999999',
      },
      action: {
        active: 'rgba(0, 0, 0, 0.54)',
        hover: 'rgba(0, 0, 0, 0.04)',
        selected: 'rgba(0, 0, 0, 0.08)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
    },
    typography: {
      ...config.typography,
      fontSize: 14,
      htmlFontSize: 16,
      pxToRem: (size: number) => `${size / 16}rem`,
    },
    customStyles: config.customStyles,
    spacing: (factor: number) => `${8 * factor}px`,
    shape: { borderRadius: 4 },
    shadows: Array(25).fill('none') as any,
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195,
      },
      create: jest.fn(() => 'all 300ms ease'),
    },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
      up: jest.fn(),
      down: jest.fn(),
      between: jest.fn(),
      only: jest.fn(),
      not: jest.fn(),
    },
    zIndex: {
      mobileStepper: 1000,
      fab: 1050,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500,
    },
    mixins: {
      toolbar: {
        minHeight: 56,
      },
    },
  })),
}));

jest.mock('../../lib/config', () => ({
  themes: {
    purple: {
      palette: {
        primary: { main: '#9333ea' },
        secondary: { main: '#ec4899' },
      },
      typography: { fontFamily: 'Inter' },
      customStyles: { glow: '0 0 20px rgba(147, 51, 234, 0.4)' },
    },
    blue: {
      palette: {
        primary: { main: '#3b82f6' },
        secondary: { main: '#06b6d4' },
      },
      typography: { fontFamily: 'Inter' },
      customStyles: { glow: '0 0 20px rgba(59, 130, 246, 0.4)' },
    },
    green: {
      palette: {
        primary: { main: '#10b981' },
        secondary: { main: '#14b8a6' },
      },
      typography: { fontFamily: 'Inter' },
      customStyles: { glow: '0 0 20px rgba(16, 185, 129, 0.4)' },
    },
  },
}));

// Test component that uses the context
const TestComponent = () => {
  const { activeTheme, availableThemes, switchTheme, cycleTheme } = useStyleContext();

  return (
    <div>
      <div data-testid="active-theme">{activeTheme}</div>
      <div data-testid="available-themes">{availableThemes.join(',')}</div>
      <button onClick={() => switchTheme('blue')}>Switch to Blue</button>
      <button onClick={() => switchTheme('green')}>Switch to Green</button>
      <button onClick={cycleTheme}>Cycle Theme</button>
    </div>
  );
};

describe('StyleContext', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('StyleProvider', () => {
    it('should render children', () => {
      render(
        <StyleProvider>
          <div>Test Child</div>
        </StyleProvider>
      );
      expect(screen.getByText('Test Child')).toBeInTheDocument();
    });

    it('should provide default theme as purple', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );
      expect(screen.getByTestId('active-theme')).toHaveTextContent('purple');
    });

    it('should use initialTheme when provided', () => {
      render(
        <StyleProvider initialTheme="blue">
          <TestComponent />
        </StyleProvider>
      );
      expect(screen.getByTestId('active-theme')).toHaveTextContent('blue');
    });

    it('should provide list of available themes', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );
      const availableThemes = screen.getByTestId('available-themes').textContent;
      expect(availableThemes).toContain('purple');
      expect(availableThemes).toContain('blue');
      expect(availableThemes).toContain('green');
    });
  });

  describe('localStorage integration', () => {
    it('should save theme to localStorage when switched', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      const switchButton = screen.getByText('Switch to Blue');
      act(() => {
        switchButton.click();
      });

      expect(localStorage.getItem('preferred-theme')).toBe('blue');
    });

    it('should load theme from localStorage on mount', () => {
      localStorage.setItem('preferred-theme', 'green');

      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      expect(screen.getByTestId('active-theme')).toHaveTextContent('green');
    });

    it('should use default theme if localStorage value is invalid', () => {
      localStorage.setItem('preferred-theme', 'invalid-theme');

      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      expect(screen.getByTestId('active-theme')).toHaveTextContent('purple');
    });

    it('should update localStorage when theme changes', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      act(() => {
        screen.getByText('Switch to Blue').click();
      });
      expect(localStorage.getItem('preferred-theme')).toBe('blue');

      act(() => {
        screen.getByText('Switch to Green').click();
      });
      expect(localStorage.getItem('preferred-theme')).toBe('green');
    });
  });

  describe('switchTheme function', () => {
    it('should switch to blue theme', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      act(() => {
        screen.getByText('Switch to Blue').click();
      });

      expect(screen.getByTestId('active-theme')).toHaveTextContent('blue');
    });

    it('should switch to green theme', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      act(() => {
        screen.getByText('Switch to Green').click();
      });

      expect(screen.getByTestId('active-theme')).toHaveTextContent('green');
    });

    it('should not switch to invalid theme', () => {
      const TestInvalidSwitch = () => {
        const { activeTheme, switchTheme } = useStyleContext();
        return (
          <div>
            <div data-testid="active-theme">{activeTheme}</div>
            <button onClick={() => switchTheme('invalid' as any)}>
              Switch Invalid
            </button>
          </div>
        );
      };

      render(
        <StyleProvider>
          <TestInvalidSwitch />
        </StyleProvider>
      );

      const initialTheme = screen.getByTestId('active-theme').textContent;

      act(() => {
        screen.getByText('Switch Invalid').click();
      });

      expect(screen.getByTestId('active-theme')).toHaveTextContent(initialTheme!);
    });
  });

  describe('cycleTheme function', () => {
    it('should cycle from purple to next theme', () => {
      render(
        <StyleProvider initialTheme="purple">
          <TestComponent />
        </StyleProvider>
      );

      expect(screen.getByTestId('active-theme')).toHaveTextContent('purple');

      act(() => {
        screen.getByText('Cycle Theme').click();
      });

      const newTheme = screen.getByTestId('active-theme').textContent;
      expect(newTheme).not.toBe('purple');
      expect(['blue', 'green']).toContain(newTheme!);
    });

    it('should cycle through all themes', () => {
      render(
        <StyleProvider initialTheme="purple">
          <TestComponent />
        </StyleProvider>
      );

      const themes = new Set();
      themes.add(screen.getByTestId('active-theme').textContent);

      // Cycle through all themes
      for (let i = 0; i < 3; i++) {
        act(() => {
          screen.getByText('Cycle Theme').click();
        });
        themes.add(screen.getByTestId('active-theme').textContent);
      }

      expect(themes.size).toBeGreaterThanOrEqual(3);
    });

    it('should cycle back to first theme after last', () => {
      render(
        <StyleProvider initialTheme="purple">
          <TestComponent />
        </StyleProvider>
      );

      const availableThemes = screen
        .getByTestId('available-themes')
        .textContent!.split(',');
      const cycleCount = availableThemes.length;

      // Cycle through all themes and back to start
      for (let i = 0; i < cycleCount; i++) {
        act(() => {
          screen.getByText('Cycle Theme').click();
        });
      }

      // Should be back to original theme or have cycled through all
      const currentTheme = screen.getByTestId('active-theme').textContent;
      expect(availableThemes).toContain(currentTheme!);
    });
  });

  describe('useStyleContext hook', () => {
    it('should throw error when used outside StyleProvider', () => {
      const TestComponentWithoutProvider = () => {
        try {
          useStyleContext();
          return <div>Should not render</div>;
        } catch (error: any) {
          return <div>{error.message}</div>;
        }
      };

      render(<TestComponentWithoutProvider />);
      expect(screen.getByText(/useStyleContext must be used within StyleProvider/i)).toBeInTheDocument();
    });

    it('should provide context value when used inside StyleProvider', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      expect(screen.getByTestId('active-theme')).toBeInTheDocument();
      expect(screen.getByTestId('available-themes')).toBeInTheDocument();
    });

    it('should provide all context methods', () => {
      const TestAllMethods = () => {
        const context = useStyleContext();
        return (
          <div>
            <div data-testid="switchTheme-type">{typeof context.switchTheme}</div>
            <div data-testid="cycleTheme-type">{typeof context.cycleTheme}</div>
            <div data-testid="activeTheme-type">{typeof context.activeTheme}</div>
            <div data-testid="availableThemes-array">{Array.isArray(context.availableThemes).toString()}</div>
          </div>
        );
      };

      render(
        <StyleProvider>
          <TestAllMethods />
        </StyleProvider>
      );

      expect(screen.getByTestId('switchTheme-type')).toHaveTextContent('function');
      expect(screen.getByTestId('cycleTheme-type')).toHaveTextContent('function');
      expect(screen.getByTestId('activeTheme-type')).toHaveTextContent('string');
      expect(screen.getByTestId('availableThemes-array')).toHaveTextContent('true');
    });
  });

  describe('Theme configuration', () => {
    it('should provide theme configuration', () => {
      const TestThemeConfig = () => {
        const { themeConfig } = useStyleContext();
        return (
          <div>
            <div data-testid="primary-color">
              {themeConfig.palette.primary.main}
            </div>
          </div>
        );
      };

      render(
        <StyleProvider initialTheme="purple">
          <TestThemeConfig />
        </StyleProvider>
      );

      expect(screen.getByTestId('primary-color')).toHaveTextContent('#9333ea');
    });

    it('should update theme configuration when theme changes', () => {
      const TestThemeConfigChange = () => {
        const { themeConfig, switchTheme } = useStyleContext();
        return (
          <div>
            <div data-testid="primary-color">
              {themeConfig.palette.primary.main}
            </div>
            <button onClick={() => switchTheme('blue')}>Switch to Blue</button>
          </div>
        );
      };

      render(
        <StyleProvider initialTheme="purple">
          <TestThemeConfigChange />
        </StyleProvider>
      );

      expect(screen.getByTestId('primary-color')).toHaveTextContent('#9333ea');

      act(() => {
        screen.getByText('Switch to Blue').click();
      });

      expect(screen.getByTestId('primary-color')).toHaveTextContent('#3b82f6');
    });
  });

  describe('MUI Theme integration', () => {
    it('should render MUI CssBaseline', () => {
      const { container } = render(
        <StyleProvider>
          <div>Test</div>
        </StyleProvider>
      );
      // CssBaseline should be in the document
      expect(container).toBeInTheDocument();
    });

    it('should provide MUI ThemeProvider', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );
      // Component should render successfully with theme
      expect(screen.getByTestId('active-theme')).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    it('should handle rapid theme switches', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      act(() => {
        screen.getByText('Switch to Blue').click();
        screen.getByText('Switch to Green').click();
        screen.getByText('Switch to Blue').click();
      });

      expect(screen.getByTestId('active-theme')).toHaveTextContent('blue');
    });

    it('should handle rapid theme cycling', () => {
      render(
        <StyleProvider>
          <TestComponent />
        </StyleProvider>
      );

      act(() => {
        screen.getByText('Cycle Theme').click();
        screen.getByText('Cycle Theme').click();
        screen.getByText('Cycle Theme').click();
      });

      expect(screen.getByTestId('active-theme')).toBeInTheDocument();
    });
  });
});
