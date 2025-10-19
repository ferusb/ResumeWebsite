import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SkillMeter } from '../SkillMeter';
import { SkillData } from '../../../types/components.types';

const theme = createTheme({
  palette: {
    primary: { main: '#9333ea' },
    secondary: { main: '#ec4899' },
    text: {
      primary: '#1a202c',
      secondary: '#718096',
    },
  },
});

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

const mockSkill: SkillData = {
  name: 'TypeScript',
  level: 90,
  category: 'Programming',
};

describe('SkillMeter', () => {
  describe('Rendering', () => {
    it('should render skill name', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} />);
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });

    it('should render skill level percentage by default', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} />);
      expect(screen.getByText('90%')).toBeInTheDocument();
    });

    it('should render progress bar', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} />);
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
    });

    it('should render progress bar with correct value', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} />);
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '90');
    });
  });

  describe('showPercentage prop', () => {
    it('should show percentage when showPercentage is true', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} showPercentage={true} />);
      expect(screen.getByText('90%')).toBeInTheDocument();
    });

    it('should hide percentage when showPercentage is false', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} showPercentage={false} />);
      expect(screen.queryByText('90%')).not.toBeInTheDocument();
    });

    it('should show percentage by default', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} />);
      expect(screen.getByText('90%')).toBeInTheDocument();
    });
  });

  describe('Different skill levels', () => {
    it('should render skill with 0% level', () => {
      const beginnerSkill: SkillData = { name: 'New Skill', level: 0 };
      renderWithTheme(<SkillMeter skill={beginnerSkill} />);

      expect(screen.getByText('New Skill')).toBeInTheDocument();
      expect(screen.getByText('0%')).toBeInTheDocument();
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '0');
    });

    it('should render skill with 50% level', () => {
      const intermediateSkill: SkillData = { name: 'Python', level: 50 };
      renderWithTheme(<SkillMeter skill={intermediateSkill} />);

      expect(screen.getByText('Python')).toBeInTheDocument();
      expect(screen.getByText('50%')).toBeInTheDocument();
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    });

    it('should render skill with 100% level', () => {
      const expertSkill: SkillData = { name: 'JavaScript', level: 100 };
      renderWithTheme(<SkillMeter skill={expertSkill} />);

      expect(screen.getByText('JavaScript')).toBeInTheDocument();
      expect(screen.getByText('100%')).toBeInTheDocument();
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    });
  });

  describe('Skill with additional properties', () => {
    it('should render skill with icon property', () => {
      const skillWithIcon: SkillData = {
        name: 'React',
        level: 95,
        icon: '⚛️',
      };
      renderWithTheme(<SkillMeter skill={skillWithIcon} />);
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('should render skill with category property', () => {
      const skillWithCategory: SkillData = {
        name: 'Node.js',
        level: 85,
        category: 'Backend',
      };
      renderWithTheme(<SkillMeter skill={skillWithCategory} />);
      expect(screen.getByText('Node.js')).toBeInTheDocument();
    });
  });

  describe('Multiple skills', () => {
    it('should render multiple SkillMeter components independently', () => {
      const skill1: SkillData = { name: 'HTML', level: 95 };
      const skill2: SkillData = { name: 'CSS', level: 90 };

      renderWithTheme(
        <>
          <SkillMeter skill={skill1} />
          <SkillMeter skill={skill2} />
        </>
      );

      expect(screen.getByText('HTML')).toBeInTheDocument();
      expect(screen.getByText('95%')).toBeInTheDocument();
      expect(screen.getByText('CSS')).toBeInTheDocument();
      expect(screen.getByText('90%')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have correct display name', () => {
      expect(SkillMeter.displayName).toBe('SkillMeter');
    });

    it('should have accessible progress bar', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} />);
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toHaveAttribute('aria-valuenow', '90');
      expect(progressBar).toHaveAttribute('aria-valuemin', '0');
      expect(progressBar).toHaveAttribute('aria-valuemax', '100');
    });

    it('should have proper text hierarchy', () => {
      renderWithTheme(<SkillMeter skill={mockSkill} />);
      const skillName = screen.getByText('TypeScript');
      expect(skillName).toBeInTheDocument();
    });
  });

  describe('Layout and spacing', () => {
    it('should render skill name and percentage in same row', () => {
      const { container } = renderWithTheme(<SkillMeter skill={mockSkill} />);
      expect(container.querySelector('.MuiStack-root')).toBeInTheDocument();
    });

    it('should render progress bar below the text', () => {
      const { container } = renderWithTheme(<SkillMeter skill={mockSkill} />);
      const progressBar = screen.getByRole('progressbar');
      expect(progressBar).toBeInTheDocument();
    });
  });

  describe('Edge cases', () => {
    it('should handle long skill names', () => {
      const longNameSkill: SkillData = {
        name: 'Very Long Technology Name That Might Wrap',
        level: 75,
      };
      renderWithTheme(<SkillMeter skill={longNameSkill} />);
      expect(screen.getByText('Very Long Technology Name That Might Wrap')).toBeInTheDocument();
    });

    it('should handle decimal level values', () => {
      const decimalSkill: SkillData = { name: 'AWS', level: 87.5 };
      renderWithTheme(<SkillMeter skill={decimalSkill} />);
      expect(screen.getByText('87.5%')).toBeInTheDocument();
    });
  });
});
