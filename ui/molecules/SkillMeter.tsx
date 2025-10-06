import React, { memo } from 'react';
import { Box, Typography, LinearProgress, Stack } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { SkillData } from '../../types/components.types';

interface SkillMeterProps {
  skill: SkillData;
  showPercentage?: boolean;
}

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    backgroundImage: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
}));

export const SkillMeter = memo<SkillMeterProps>(({
  skill,
  showPercentage = true,
}) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="body2" fontWeight={600} color="text.primary">
          {skill.name}
        </Typography>
        {showPercentage && (
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {skill.level}%
          </Typography>
        )}
      </Stack>
      <StyledProgress variant="determinate" value={skill.level} />
    </Box>
  );
});

SkillMeter.displayName = 'SkillMeter';
