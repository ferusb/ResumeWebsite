import { ReactNode, ComponentPropsWithoutRef } from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface TypographyVariantProps extends BaseComponentProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption';
  color?: 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error';
  align?: 'left' | 'center' | 'right' | 'justify';
  gutterBottom?: boolean;
  noWrap?: boolean;
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'accent';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
}

export interface CardProps extends BaseComponentProps {
  elevation?: number;
  variant?: 'outlined' | 'elevated';
  interactive?: boolean;
  onClick?: () => void;
}

export interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary' | 'default';
  edge?: 'start' | 'end' | false;
}

export interface NavigationItem {
  label: string;
  href: string;
  icon?: ReactNode;
}

export interface SkillData {
  name: string;
  level: number;
  icon?: string;
  category?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
  impact: string;
  metrics?: string;
  period?: string;
  role?: string;
}

export interface ExperienceData {
  title: string;
  duration: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
}
