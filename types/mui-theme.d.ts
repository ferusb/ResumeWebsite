import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }

  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }

  interface Theme {
    customStyles?: {
      fontWeight?: string;
      headingWeight?: string;
      shadow?: string;
      glow?: string;
      cardBorder?: string;
    };
  }

  interface ThemeOptions {
    customStyles?: {
      fontWeight?: string;
      headingWeight?: string;
      shadow?: string;
      glow?: string;
      cardBorder?: string;
    };
  }
}
