import React, { memo } from 'react';
import { Chip, ChipProps, alpha } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface TechBadgeProps extends Omit<ChipProps, 'color'> {
  technology: string;
  colorScheme?: 'primary' | 'secondary' | 'accent';
  glowing?: boolean;
}

const AnimatedChip = styled(motion(Chip))<{ colorScheme?: string; glowing?: boolean }>(
  ({ theme, colorScheme = 'primary', glowing }) => {
    const color = colorScheme === 'accent'
      ? theme.palette.accent?.main || theme.palette.primary.main
      : theme.palette[colorScheme as 'primary' | 'secondary'].main;

    return {
      backgroundColor: alpha(color, 0.12),
      color: color,
      border: `1px solid ${alpha(color, 0.3)}`,
      fontWeight: 600,
      fontSize: '0.875rem',
      padding: '4px 12px',
      ...(glowing && {
        boxShadow: `0 0 12px ${alpha(color, 0.4)}`,
      }),
      '&:hover': {
        backgroundColor: alpha(color, 0.2),
        transform: 'translateY(-2px)',
        boxShadow: `0 4px 12px ${alpha(color, 0.3)}`,
      },
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  }
);

export const TechBadge = memo<TechBadgeProps>(({
  technology,
  colorScheme = 'primary',
  glowing = false,
  ...props
}) => {
  return (
    <AnimatedChip
      label={technology}
      colorScheme={colorScheme}
      glowing={glowing}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    />
  );
});

TechBadge.displayName = 'TechBadge';
