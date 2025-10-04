import React, { memo } from 'react';
import { Card as MuiCard, CardProps as MuiCardProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface StyledCardProps extends Omit<MuiCardProps, 'variant'> {
  variant?: 'outlined' | 'elevated';
  interactive?: boolean;
  glowEffect?: boolean;
}

const AnimatedCard = styled(motion(MuiCard))<{ interactive?: boolean; glowEffect?: boolean }>(
  ({ theme, interactive, glowEffect }) => ({
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    ...(interactive && {
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: glowEffect
          ? `0 12px 24px -6px ${theme.palette.primary.main}40`
          : theme.shadows[8],
      },
    }),
    ...(glowEffect && {
      boxShadow: `0 4px 12px -2px ${theme.palette.primary.main}20`,
    }),
  })
);

export const StyledCard = memo<StyledCardProps>(({
  children,
  variant = 'elevated',
  interactive = false,
  glowEffect = false,
  sx,
  ...props
}) => {
  const cardVariant = variant === 'outlined' ? 'outlined' : 'elevation';

  return (
    <AnimatedCard
      variant={cardVariant}
      interactive={interactive}
      glowEffect={glowEffect}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      sx={{
        backgroundColor: 'background.paper',
        borderRadius: 2,
        ...sx,
      }}
      {...props}
    >
      {children}
    </AnimatedCard>
  );
});

StyledCard.displayName = 'StyledCard';
