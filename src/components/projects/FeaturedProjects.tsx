import React from 'react';
import {
    Box,
    Typography,
    useTheme,
    Card,
    CardContent,
    Chip,
    Button,
    Divider,
    Link
} from '@mui/material';
import {
    Star as StarIcon,
    GitHub as GitHubIcon,
    Launch as LaunchIcon,
    Description as DescriptionIcon,
    Science as ScienceIcon,
    School as SchoolIcon,
    Person as PersonIcon
} from '@mui/icons-material';
import { Project } from '../../data/types';
import { getAssetPath } from '../../utils/assetUtils';

interface FeaturedProjectsProps {
    projects: Project[];
}

/**
 * Featured Projects component
 * Displays the most impressive projects across all categories
 */
const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ projects }) => {
    const theme = useTheme();

    const featuredProjects = projects.filter(project => project.featured);

    if (featuredProjects.length === 0) {
        return null;
    }

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

    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <StarIcon sx={{ mr: 2, color: theme.palette.warning.main, fontSize: '2rem' }} />
                <Typography variant="h4" component="h2" fontWeight={700}>
                    Featured Projects
                </Typography>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                A curated selection of my most significant projects showcasing research excellence,
                technical innovation, and creative problem-solving across different domains.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 4, alignItems: 'stretch' }}>
                {featuredProjects.map((project) => (
                    <Card
                        key={project.id}
                        elevation={6}
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            borderRadius: 2,
                            border: `3px solid ${theme.palette.warning.main}`,
                            background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.warning.light}10 100%)`,
                            transition: 'all 0.3s ease-in-out',
                            position: 'relative',
                            '&:hover': {
                                transform: 'translateY(-6px)',
                                boxShadow: 8,
                            },
                        }}
                    >
                        <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            {/* Project Header */}
                            <Box sx={{ mb: 3 }}>
                                {/* Badges Row */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                    <Chip
                                        icon={<StarIcon />}
                                        label="Featured"
                                        size="small"
                                        sx={{
                                            backgroundColor: theme.palette.warning.main,
                                            color: 'white',
                                            fontWeight: 700,
                                            '& .MuiChip-icon': {
                                                color: 'white',
                                            },
                                        }}
                                    />
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
                                </Box>

                                <Typography
                                    variant="h5"
                                    component="h3"
                                    gutterBottom
                                    fontWeight={600}
                                    sx={{ color: theme.palette.primary.main, mb: 2 }}
                                >
                                    {project.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{ lineHeight: 1.6, mb: 3 }}
                                >
                                    {project.description}
                                </Typography>
                            </Box>

                            {/* Project Video (if available) */}
                            {project.videoUrl && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 2 }}>
                                        Demo Video
                                    </Typography>
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            borderRadius: 2,
                                            overflow: 'hidden',
                                            boxShadow: 2,
                                        }}
                                    >
                                        <video
                                            controls
                                            preload="metadata"
                                            playsInline
                                            style={{
                                                width: '100%',
                                                height: 'auto',
                                                display: 'block',
                                            }}
                                        >
                                            <source src={getAssetPath(project.videoUrl)} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Box>
                                </Box>
                            )}

                            {/* Research Areas (if applicable) */}
                            {project.researchAreas && project.researchAreas.length > 0 && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                                        Research Areas
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
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                                    Technologies
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
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                                        Achievements
                                    </Typography>
                                    {project.achievements.map((achievement, index) => (
                                        <Typography key={index} variant="body2" sx={{ fontSize: '0.8rem', mb: 0.5 }}>
                                            • {achievement}
                                        </Typography>
                                    ))}
                                </Box>
                            )}

                            <Divider sx={{ my: 3 }} />

                            {/* Methodology (for research projects) */}
                            {project.methodology && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: theme.palette.primary.main }}>
                                        Methodology
                                    </Typography>
                                    <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                                        {project.methodology}
                                    </Typography>
                                </Box>
                            )}

                            {/* Results (for research projects) */}
                            {project.results && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: theme.palette.secondary.main }}>
                                        Results & Impact
                                    </Typography>
                                    <Typography variant="body2" sx={{ lineHeight: 1.6, fontSize: '0.9rem' }}>
                                        {project.results}
                                    </Typography>
                                </Box>
                            )}

                            {/* Academic Significance */}
                            {project.academicSignificance && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                                        Significance
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: '0.85rem', fontStyle: 'italic', lineHeight: 1.6 }}>
                                        {project.academicSignificance}
                                    </Typography>
                                </Box>
                            )}

                            {/* Action Buttons */}
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 4 }}>
                                {project.githubUrl && (
                                    <Button
                                        variant="outlined"
                                        startIcon={<GitHubIcon />}
                                        component={Link}
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textTransform: 'none', flex: 1 }}
                                    >
                                        Source Code
                                    </Button>
                                )}

                                {project.liveUrl && (
                                    <Button
                                        variant="outlined"
                                        startIcon={<LaunchIcon />}
                                        component={Link}
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textTransform: 'none', flex: 1 }}
                                    >
                                        Visit Website
                                    </Button>
                                )}

                                {project.documentationUrl && (
                                    <Button
                                        variant="outlined"
                                        startIcon={<DescriptionIcon />}
                                        component={Link}
                                        href={project.documentationUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ textTransform: 'none', flex: 1 }}
                                    >
                                        Documentation
                                    </Button>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Featured Projects Summary */}
            <Box
                sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: theme.palette.warning.light + '20',
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.warning.light}`,
                }}
            >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.palette.warning.dark }}>
                    Why These Projects Stand Out
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    These featured projects represent the pinnacle of my technical and research capabilities,
                    spanning from groundbreaking HCI research to innovative AR applications and complex multiplayer systems.
                    Each project demonstrates unique problem-solving approaches, technical excellence, and significant
                    contributions to their respective domains.
                </Typography>
            </Box>
        </Box>
    );
};

export default FeaturedProjects;