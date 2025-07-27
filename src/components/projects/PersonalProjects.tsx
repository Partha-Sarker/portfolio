import React from 'react';
import {
    Box,
    Typography,
    useTheme,
    Paper,
    Chip
} from '@mui/material';
import {
    Person as PersonIcon,
    Lightbulb as LightbulbIcon,
    Code as CodeIcon,
    MusicNote as MusicNoteIcon
} from '@mui/icons-material';
import { Project } from '../../data/types';
import ProjectCard from './ProjectCard';

interface PersonalProjectsProps {
    projects: Project[];
}

/**
 * Personal Projects component
 * Displays self-initiated projects showing creativity and passion
 */
const PersonalProjects: React.FC<PersonalProjectsProps> = ({ projects }) => {
    const theme = useTheme();

    const personalProjects = projects.filter(project => project.type === 'personal');

    if (personalProjects.length === 0) {
        return null;
    }

    // Categorize personal projects by domain
    const gameProjects = personalProjects.filter(project =>
        project.technologies.some(tech => tech.toLowerCase().includes('unity'))
    );

    const webToolProjects = personalProjects.filter(project =>
        project.technologies.some(tech =>
            ['Node.js', 'JavaScript', 'Python', 'Spring'].includes(tech)
        ) && !project.technologies.some(tech => tech.toLowerCase().includes('unity'))
    );

    const creativeProjects = personalProjects.filter(project =>
        project.technologies.some(tech =>
            ['AR', 'VexFlow', 'jQuery'].includes(tech)
        )
    );

    const otherProjects = personalProjects.filter(project =>
        !gameProjects.includes(project) &&
        !webToolProjects.includes(project) &&
        !creativeProjects.includes(project)
    );

    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <PersonIcon sx={{ mr: 2, color: theme.palette.warning.main, fontSize: '2rem' }} />
                <Typography variant="h4" component="h2" fontWeight={700}>
                    Personal Projects
                </Typography>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                These self-initiated projects reflect my passion for technology, creativity, and continuous learning.
                They demonstrate initiative, problem-solving skills, and exploration of diverse technical domains
                beyond academic requirements.
            </Typography>

            {/* Creative & Interactive Projects */}
            {creativeProjects.length > 0 && (
                <Box sx={{ mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <MusicNoteIcon sx={{ mr: 1, color: theme.palette.secondary.main }} />
                        <Typography variant="h5" component="h3" fontWeight={600}>
                            Creative & Interactive Projects
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3, mb: 3 }}>
                        {creativeProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </Box>

                    <Paper
                        elevation={0}
                        sx={{
                            p: 2,
                            backgroundColor: theme.palette.secondary.light + '20',
                            borderRadius: 2,
                            border: `1px solid ${theme.palette.secondary.light}`,
                        }}
                    >
                        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                            These projects combine my technical skills with creative interests, particularly in music and
                            augmented reality, showcasing the intersection of technology and artistic expression.
                        </Typography>
                    </Paper>
                </Box>
            )}

            {/* Game Development Projects */}
            {gameProjects.length > 0 && (
                <Box sx={{ mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <CodeIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
                        <Typography variant="h5" component="h3" fontWeight={600}>
                            Game Development Projects
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
                        {gameProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </Box>
                </Box>
            )}

            {/* Web Tools & Automation */}
            {webToolProjects.length > 0 && (
                <Box sx={{ mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <LightbulbIcon sx={{ mr: 1, color: theme.palette.warning.main }} />
                        <Typography variant="h5" component="h3" fontWeight={600}>
                            Web Tools & Automation
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
                        {webToolProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </Box>
                </Box>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 3 }}>
                        Other Projects
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
                        {otherProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </Box>
                </Box>
            )}

            {/* Personal Development Summary */}
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
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.palette.warning.main }}>
                    Personal Development & Initiative
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                            Self-Directed Learning
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                            These projects demonstrate my commitment to continuous learning and exploration of
                            new technologies beyond formal education requirements.
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            <Chip label="Self-Motivation" size="small" />
                            <Chip label="Problem Solving" size="small" />
                            <Chip label="Technical Exploration" size="small" />
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                            Research Connections
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                            Several projects connect to my research interests, particularly in HCI (AR Girl),
                            automation (CS Ranking Crawler), and creative technology applications.
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            <Chip label="HCI Applications" size="small" />
                            <Chip label="Automation Tools" size="small" />
                            <Chip label="Creative Technology" size="small" />
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default PersonalProjects;