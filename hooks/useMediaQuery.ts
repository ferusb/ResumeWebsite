import { useState, useEffect } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const breakpoints: Record<Breakpoint, string> = {
  xs: '(max-width: 599px)',
  sm: '(min-width: 600px) and (max-width: 959px)',
  md: '(min-width: 960px) and (max-width: 1279px)',
  lg: '(min-width: 1280px) and (max-width: 1919px)',
  xl: '(min-width: 1920px)',
};

export const useMediaQuery = (breakpoint: Breakpoint): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = breakpoints[breakpoint];
    const media = window.matchMedia(query);

    setMatches(media.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', handler);

    return () => media.removeEventListener('change', handler);
  }, [breakpoint]);

  return matches;
};

export const useResponsiveValue = <T,>(
  values: Partial<Record<Breakpoint, T>> & { default: T }
): T => {
  const isXs = useMediaQuery('xs');
  const isSm = useMediaQuery('sm');
  const isMd = useMediaQuery('md');
  const isLg = useMediaQuery('lg');
  const isXl = useMediaQuery('xl');

  if (isXl && values.xl) return values.xl;
  if (isLg && values.lg) return values.lg;
  if (isMd && values.md) return values.md;
  if (isSm && values.sm) return values.sm;
  if (isXs && values.xs) return values.xs;

  return values.default;
};
