import { createTheme } from '@mui/material/styles';
import { siteConfig } from './config';

const generateMuiTheme = (themeData) => {
  const { colors, styles } = themeData;

  return createTheme({
    palette: {
      mode: colors.background === '#000000' || colors.background.startsWith('#0') || colors.background.startsWith('#1') ? 'dark' : 'light',
      primary: {
        main: colors.primary,
        light: colors.secondary,
        dark: colors.accent,
      },
      secondary: {
        main: colors.secondary,
        light: colors.accent,
        dark: colors.primary,
      },
      background: {
        default: colors.background,
        paper: colors.surface,
      },
      text: {
        primary: colors.text,
        secondary: colors.textSecondary,
      },
      accent: {
        main: colors.accent,
      },
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      h1: {
        fontWeight: parseInt(styles.headingWeight),
        textShadow: styles.glow,
      },
      h2: {
        fontWeight: parseInt(styles.headingWeight),
        textShadow: styles.glow,
      },
      h3: {
        fontWeight: parseInt(styles.headingWeight),
      },
      h4: {
        fontWeight: parseInt(styles.headingWeight),
      },
      h5: {
        fontWeight: parseInt(styles.headingWeight),
      },
      h6: {
        fontWeight: parseInt(styles.headingWeight),
      },
      body1: {
        fontWeight: styles.fontWeight,
      },
      body2: {
        fontWeight: styles.fontWeight,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: styles.shadow,
            border: styles.cardBorder,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: styles.shadow,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: parseInt(styles.headingWeight),
          },
        },
      },
    },
    customStyles: {
      glow: styles.glow,
      shadow: styles.shadow,
      cardBorder: styles.cardBorder,
    },
  });
};

export { generateMuiTheme };
