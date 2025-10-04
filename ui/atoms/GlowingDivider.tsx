import React, { memo } from 'react';
import { Divider, DividerProps } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

interface GlowingDividerProps extends DividerProps {
  glowIntensity?: 'low' | 'medium' | 'high';
  colorScheme?: 'primary' | 'secondary' | 'accent';
}

const intensityMap = {
  low: 0.2,
  medium: 0.4,
  high: 0.6,
};

const StyledDivider = styled(Divider)<{
  glowIntensity: number;
  colorScheme: string;
}>(({ theme, glowIntensity, colorScheme }) => {
  const color = colorScheme === 'accent'
    ? theme.palette.accent?.main || theme.palette.primary.main
    : theme.palette[colorScheme as 'primary' | 'secondary'].main;

  return {
    borderColor: color,
    boxShadow: `0 0 12px ${alpha(color, glowIntensity)}`,
    '&::before, &::after': {
      borderColor: color,
    },
  };
});

export const GlowingDivider = memo<GlowingDividerProps>(({
  glowIntensity = 'medium',
  colorScheme = 'primary',
  ...props
}) => {
  return (
    <StyledDivider
      glowIntensity={intensityMap[glowIntensity]}
      colorScheme={colorScheme}
      {...props}
    />
  );
});

GlowingDivider.displayName = 'GlowingDivider';
