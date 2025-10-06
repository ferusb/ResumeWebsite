import React, { memo, useState, useCallback } from 'react';
import { Box, Typography, Stack, Collapse, IconButton } from '@mui/material';
import { ExpandMore as ExpandIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { StyledCard } from '../atoms/StyledCard';
import { TechBadge } from './TechBadge';
import { GradientTypography } from '../atoms/GradientTypography';
import { ProjectData } from '../../types/components.types';

interface ProjectCardProps {
  project: ProjectData;
  defaultExpanded?: boolean;
}

const ExpandButton = styled(IconButton)<{ expanded: boolean }>(({ expanded }) => ({
  transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 0.3s ease',
}));

const MetricsBadge = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.default,
  borderLeft: `4px solid ${theme.palette.primary.main}`,
}));

export const ProjectCard = memo<ProjectCardProps>(({
  project,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleToggle = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <StyledCard interactive glowEffect onClick={handleToggle}>
      <Box sx={{ p: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={2}>
          <Box flex={1}>
            <GradientTypography variant="h5" gradient glow gutterBottom>
              {project.title}
            </GradientTypography>
            {project.period && (
              <Typography variant="body2" color="text.secondary">
                {project.role} • {project.period}
              </Typography>
            )}
          </Box>
          <ExpandButton
            expanded={expanded}
            onClick={(e) => {
              e.stopPropagation();
              handleToggle();
            }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandIcon />
          </ExpandButton>
        </Stack>

        <Typography variant="body1" color="text.primary" paragraph>
          {project.description}
        </Typography>

        {project.metrics && (
          <MetricsBadge mb={2}>
            <Typography variant="caption" color="primary" fontWeight={600}>
              Key Metrics: <Typography component="span" variant="caption" color="text.secondary">{project.metrics}</Typography>
            </Typography>
          </MetricsBadge>
        )}

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box mt={2}>
            <Typography variant="subtitle2" color="primary" gutterBottom fontWeight={700}>
              Technologies Used
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
              {project.technologies.map((tech) => (
                <TechBadge key={tech} technology={tech} size="small" />
              ))}
            </Stack>

            <Typography variant="subtitle2" color="primary" gutterBottom fontWeight={700}>
              Key Achievements
            </Typography>
            <Box component="ul" sx={{ pl: 2, mb: 2 }}>
              {project.achievements.map((achievement, index) => (
                <Typography component="li" key={index} variant="body2" color="text.primary" sx={{ mb: 0.5 }}>
                  {achievement}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                backgroundColor: 'background.default',
                borderLeft: (theme) => `4px solid ${theme.palette.accent?.main || theme.palette.secondary.main}`,
              }}
            >
              <Typography variant="subtitle2" color="accent.main" fontWeight={700} gutterBottom>
                Business Impact
              </Typography>
              <Typography variant="body2" color="text.primary">
                {project.impact}
              </Typography>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </StyledCard>
  );
});

ProjectCard.displayName = 'ProjectCard';
