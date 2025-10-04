import React, { memo } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useStyleContext } from '../../contexts/StyleContext';

interface GradientTypographyProps extends Omit<TypographyProps, 'color'> {
  gradient?: boolean;
  glow?: boolean;
}

const StyledTypography = styled(Typography)<{ hasGradient?: boolean; hasGlow?: boolean }>(
  ({ theme, hasGradient, hasGlow }) => ({
    ...(hasGradient && {
      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      display: 'inline-block',
    }),
    ...(hasGlow && {
      textShadow: theme.customStyles?.glow || `0 0 20px ${theme.palette.primary.main}40`,
    }),
  })
);

export const GradientTypography = memo<GradientTypographyProps>(({
  gradient = false,
  glow = false,
  children,
  ...props
}) => {
  return (
    <StyledTypography hasGradient={gradient} hasGlow={glow} {...props}>
      {children}
    </StyledTypography>
  );
});

GradientTypography.displayName = 'GradientTypography';
