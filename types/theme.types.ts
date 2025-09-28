export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

export interface StyleProperties {
  fontWeight: string;
  headingWeight: string;
  shadow: string;
  glow: string;
  cardBorder: string;
}

export interface ThemeConfiguration {
  name: string;
  colors: ColorPalette;
  styles: StyleProperties;
}

export type ThemeMode =
  | 'purple'
  | 'deepPurple'
  | 'midnight'
  | 'lavender'
  | 'cyberpunk'
  | 'royal'
  | 'ocean'
  | 'dark'
  | 'light'
  | 'neon'
  | 'sunset'
  | 'forest'
  | 'cherry'
  | 'matrix';

export type ThemeRegistry = Record<ThemeMode, ThemeConfiguration>;
