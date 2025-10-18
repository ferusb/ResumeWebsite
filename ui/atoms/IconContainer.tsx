import React, { memo, ReactNode } from 'react';
import { Box, BoxProps } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';

interface IconContainerProps extends BoxProps {
  icon: ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'circular' | 'rounded' | 'square';
  colorScheme?: 'primary' | 'secondary' | 'accent';
  glowing?: boolean;
}

const sizeMap = {
  small: 32,
  medium: 48,
  large: 64,
};

const radiusMap = {
  circular: '50%',
  rounded: '12px',
  square: '4px',
};

const StyledBox = styled(motion(Box) as any)<{
  containerSize: number;
  variant: string;
  colorScheme: string;
  glowing?: boolean;
}>(({ theme, containerSize, variant, colorScheme, glowing }) => {
  const color = colorScheme === 'accent'
    ? theme.palette.accent?.main || theme.palette.primary.main
    : theme.palette[colorScheme as 'primary' | 'secondary'].main;

  return {
    width: containerSize,
    height: containerSize,
    borderRadius: radiusMap[variant as keyof typeof radiusMap],
    background: `linear-gradient(135deg, ${color}, ${alpha(color, 0.7)})`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
    transition: 'all 0.3s ease',
    ...(glowing && {
      boxShadow: `0 0 20px ${alpha(color, 0.5)}`,
    }),
    '&:hover': {
      transform: 'scale(1.1) rotate(5deg)',
      boxShadow: `0 8px 24px ${alpha(color, 0.4)}`,
    },
  };
});

export const IconContainer = memo<IconContainerProps>(({
  icon,
  size = 'medium',
  variant = 'rounded',
  colorScheme = 'primary',
  glowing = false,
  ...props
}) => {
  return (
    <StyledBox
      containerSize={sizeMap[size]}
      variant={variant}
      colorScheme={colorScheme}
      glowing={glowing}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {icon}
    </StyledBox>
  );
});

IconContainer.displayName = 'IconContainer';
