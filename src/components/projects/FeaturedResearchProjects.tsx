import React from 'react';
import {
    Box,
    Typography,
    Paper,
    Chip,
    Button,
    useTheme,
    Card,
    CardContent,
    Divider,
    Link
} from '@mui/material';
import {
    GitHub as GitHubIcon,
    Description as DescriptionIcon,
    Science as ScienceIcon,
    TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { Project } from '../../data/types';
import ProjectCard from './ProjectCard';

interface FeaturedResearchProjectsProps {
    projects: Project[];
}

/**
 * Featured Research Projects component
 * Displays research projects with enhanced detail and academic significance
 */
const FeaturedResearchProjects: React.FC<FeaturedResearchProjectsProps> = ({ projects }) => {
    const theme = useTheme();

    const featuredResearchProjects = projects.filter(
        project => project.type === 'research' && project.featured
    );

    if (featuredResearchProjects.length === 0) {
        return null;
    }

    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <ScienceIcon sx={{ mr: 2, color: theme.palette.primary.main, fontSize: '2rem' }} />
                <Typography variant="h4" component="h2" fontWeight={700}>
                    Featured Research Projects
                </Typography>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '800px' }}>
                These research projects represent my core academic work, demonstrating expertise in
                Human-Computer Interaction, Computer Vision, and applied research methodologies.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 4 }}>
                {featuredResearchProjects.map((project) => (
                    <Card
                        key={project.id}
                        elevation={4}
                        sx={{
                            height: 'fit-content',
                            borderRadius: 2,
                            border: `2px solid ${theme.palette.primary.main}`,
                            background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: 6,
                            },
                        }}
                    >
                        <CardContent sx={{ p: 4 }}>
                            {/* Project Header */}
                            <Box sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                    <Chip
                                        label="Featured Research"
                                        size="small"
                                        sx={{
                                            backgroundColor: theme.palette.warning.main,
                                            color: 'white',
                                            fontWeight: 600,
                                        }}
                                    />
                                    <Chip
                                        icon={<ScienceIcon />}
                                        label="Research"
                                        size="small"
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
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

                            {/* Research Areas */}
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

                            <Divider sx={{ my: 3 }} />

                            {/* Methodology Section */}
                            {project.methodology && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: theme.palette.primary.main }}>
                                        Methodology
                                    </Typography>
                                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                        {project.methodology}
                                    </Typography>
                                </Box>
                            )}

                            {/* Results Section */}
                            {project.results && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: theme.palette.secondary.main }}>
                                        Results & Impact
                                    </Typography>
                                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                                        {project.results}
                                    </Typography>
                                </Box>
                            )}

                            {/* Academic Significance */}
                            {project.academicSignificance && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                                        Academic Significance
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontSize: '0.9rem', fontStyle: 'italic', lineHeight: 1.6 }}>
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
                                        Research Paper
                                    </Button>
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* Research Impact Summary */}
            <Paper
                elevation={0}
                sx={{
                    mt: 4,
                    p: 3,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TrendingUpIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                    <Typography variant="h6" fontWeight={600}>
                        Research Impact & Future Directions
                    </Typography>
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    These research projects demonstrate a strong foundation in empirical research methods,
                    user-centered design, and technical implementation. The work contributes to the growing
                    field of digital wellbeing and accessibility technology, with potential for further
                    development in graduate-level research focusing on Human-Computer Interaction and
                    Computer Vision applications.
                </Typography>
            </Paper>
        </Box>
    );
};

export default FeaturedResearchProjects;