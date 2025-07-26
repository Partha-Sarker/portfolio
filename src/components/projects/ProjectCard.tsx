import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Chip,
    Button,
    Box,
    useTheme,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    GitHub as GitHubIcon,
    Launch as LaunchIcon,
    Description as DescriptionIcon,
    Science as ScienceIcon,
    School as SchoolIcon,
    Person as PersonIcon
} from '@mui/icons-material';
import { Project } from '../../data/types';

interface ProjectCardProps {
    project: Project;
    variant?: 'standard' | 'featured';
}

/**
 * ProjectCard component for displaying project information
 * Supports different variants for different project types and importance levels
 */
const ProjectCard: React.FC<ProjectCardProps> = ({ project, variant = 'standard' }) => {
    const theme = useTheme();

    const getProjectTypeIcon = (type: string) => {
        switch (type) {
            case 'research':
                return <ScienceIcon />;
            case 'academic':
                return <SchoolIcon />;
            case 'personal':
                return <PersonIcon />;
            default:
                return <ScienceIcon />;
        }
    };

    const getProjectTypeColor = (type: string) => {
        switch (type) {
            case 'research':
                return theme.palette.primary.main;
            case 'academic':
                return theme.palette.secondary.main;
            case 'personal':
                return theme.palette.warning.main;
            default:
                return theme.palette.primary.main;
        }
    };

    const getProjectTypeLabel = (type: string) => {
        switch (type) {
            case 'research':
                return 'Research';
            case 'academic':
                return 'Academic';
            case 'personal':
                return 'Personal';
            default:
                return 'Project';
        }
    };

    const isFeatured = variant === 'featured' || project.featured;

    return (
        <Card
            elevation={isFeatured ? 4 : 2}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                position: 'relative',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isFeatured ? 6 : 4,
                },
                ...(isFeatured && {
                    border: `2px solid ${theme.palette.primary.main}`,
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                }),
            }}
        >
            {/* Project Type Badge */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 12,
                    right: 12,
                    zIndex: 1,
                }}
            >
                <Tooltip title={`${getProjectTypeLabel(project.type)} Project`}>
                    <Chip
                        icon={getProjectTypeIcon(project.type)}
                        label={getProjectTypeLabel(project.type)}
                        size="small"
                        sx={{
                            backgroundColor: getProjectTypeColor(project.type),
                            color: 'white',
                            '& .MuiChip-icon': {
                                color: 'white',
                            },
                        }}
                    />
                </Tooltip>
            </Box>

            {/* Featured Badge */}
            {isFeatured && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 1,
                    }}
                >
                    <Chip
                        label="Featured"
                        size="small"
                        sx={{
                            backgroundColor: theme.palette.warning.main,
                            color: 'white',
                            fontWeight: 600,
                        }}
                    />
                </Box>
            )}

            <CardContent sx={{ flexGrow: 1, pt: isFeatured ? 6 : 3 }}>
                <Typography
                    variant={isFeatured ? 'h5' : 'h6'}
                    component="h3"
                    gutterBottom
                    fontWeight={600}
                    sx={{
                        color: isFeatured ? theme.palette.primary.main : 'text.primary',
                        mb: 2,
                    }}
                >
                    {project.title}
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mb: 2,
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: isFeatured ? 4 : 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                    }}
                >
                    {project.description}
                </Typography>

                {/* Research Areas (for research projects) */}
                {project.researchAreas && project.researchAreas.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                            Research Areas:
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {project.researchAreas.map((area, index) => (
                                <Chip
                                    key={index}
                                    label={area}
                                    size="small"
                                    variant="outlined"
                                    sx={{ fontSize: '0.7rem' }}
                                />
                            ))}
                        </Box>
                    </Box>
                )}

                {/* Technologies */}
                <Box sx={{ mb: 2 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                        Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {project.technologies.map((tech, index) => (
                            <Chip
                                key={index}
                                label={tech}
                                size="small"
                                sx={{
                                    backgroundColor: theme.palette.background.default,
                                    fontSize: '0.7rem',
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Achievements (for academic projects) */}
                {project.achievements && project.achievements.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                            Achievements:
                        </Typography>
                        {project.achievements.map((achievement, index) => (
                            <Typography key={index} variant="body2" sx={{ fontSize: '0.8rem', mb: 0.5 }}>
                                • {achievement}
                            </Typography>
                        ))}
                    </Box>
                )}

                {/* Academic Significance (for research projects) */}
                {project.academicSignificance && isFeatured && (
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                            Academic Significance:
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.8rem', fontStyle: 'italic' }}>
                            {project.academicSignificance}
                        </Typography>
                    </Box>
                )}
            </CardContent>

            <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {project.githubUrl && (
                        <Tooltip title="View Source Code">
                            <IconButton
                                component="a"
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                    )}

                    {project.liveUrl && (
                        <Tooltip title="View Live Demo">
                            <IconButton
                                component="a"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                <LaunchIcon />
                            </IconButton>
                        </Tooltip>
                    )}

                    {project.documentationUrl && (
                        <Tooltip title="View Documentation">
                            <IconButton
                                component="a"
                                href={project.documentationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{ color: theme.palette.text.secondary }}
                            >
                                <DescriptionIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                </Box>

                {isFeatured && (
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            textTransform: 'none',
                            fontWeight: 500,
                        }}
                    >
                        Learn More
                    </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default ProjectCard;