import React, { memo, ReactNode } from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface AnimatedButtonProps extends Omit<ButtonProps, 'color'> {
  colorScheme?: 'primary' | 'secondary' | 'accent';
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const MotionButton = styled(motion(Button))<{ colorScheme?: string }>(
  ({ theme, colorScheme = 'primary' }) => {
    const color = colorScheme === 'accent'
      ? theme.palette.accent?.main || theme.palette.primary.main
      : theme.palette[colorScheme as 'primary' | 'secondary'].main;

    return {
      position: 'relative',
      overflow: 'hidden',
      fontWeight: 600,
      textTransform: 'none',
      padding: '10px 24px',
      borderRadius: '8px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '100%',
        height: '100%',
        background: `linear-gradient(90deg, transparent, ${alpha(color, 0.3)}, transparent)`,
        transition: 'left 0.5s ease',
      },
      '&:hover::before': {
        left: '100%',
      },
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 8px 16px ${alpha(color, 0.3)}`,
      },
    };
  }
);

export const AnimatedButton = memo<AnimatedButtonProps>(({
  children,
  colorScheme = 'primary',
  loading = false,
  disabled,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <MotionButton
      colorScheme={colorScheme}
      disabled={disabled || loading}
      startIcon={loading ? <CircularProgress size={16} color="inherit" /> : startIcon}
      endIcon={endIcon}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </MotionButton>
  );
});

AnimatedButton.displayName = 'AnimatedButton';
