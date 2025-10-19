import React, { createContext, useContext, useState, useMemo, useCallback, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeMode, ThemeConfiguration } from '../types/theme.types';
import { generateMuiTheme } from '../lib/styleEngine';
import { themes } from '../lib/config';

interface StyleContextValue {
  activeTheme: ThemeMode;
  themeConfig: ThemeConfiguration;
  availableThemes: ThemeMode[];
  switchTheme: (theme: ThemeMode) => void;
  cycleTheme: () => void;
}

const StyleContext = createContext<StyleContextValue | undefined>(undefined);

interface StyleProviderProps {
  children: ReactNode;
  initialTheme?: ThemeMode;
}

export const StyleProvider: React.FC<StyleProviderProps> = ({
  children,
  initialTheme = 'purple'
}) => {
  const [activeTheme, setActiveTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('preferred-theme') as ThemeMode;
      return stored && themes[stored] ? stored : initialTheme;
    }
    return initialTheme;
  });

  const availableThemes = useMemo<ThemeMode[]>(
    () => Object.keys(themes) as ThemeMode[],
    []
  );

  const themeConfig = useMemo<ThemeConfiguration>(
    () => themes[activeTheme],
    [activeTheme]
  );

  const muiTheme = useMemo(
    () => generateMuiTheme(themeConfig),
    [themeConfig]
  );

  const switchTheme = useCallback((theme: ThemeMode) => {
    if (themes[theme]) {
      setActiveTheme(theme);
      if (typeof window !== 'undefined') {
        localStorage.setItem('preferred-theme', theme);
      }
    }
  }, []);

  const cycleTheme = useCallback(() => {
    const currentIndex = availableThemes.indexOf(activeTheme);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    const nextTheme = availableThemes[nextIndex];
    if (nextTheme) {
      switchTheme(nextTheme);
    }
  }, [activeTheme, availableThemes, switchTheme]);

  const contextValue = useMemo<StyleContextValue>(
    () => ({
      activeTheme,
      themeConfig,
      availableThemes,
      switchTheme,
      cycleTheme,
    }),
    [activeTheme, themeConfig, availableThemes, switchTheme, cycleTheme]
  );

  return (
    <StyleContext.Provider value={contextValue}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyleContext.Provider>
  );
};

export const useStyleContext = (): StyleContextValue => {
  const context = useContext(StyleContext);
  if (!context) {
    throw new Error('useStyleContext must be used within StyleProvider');
  }
  return context;
};
