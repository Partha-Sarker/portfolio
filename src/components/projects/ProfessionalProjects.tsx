import React from 'react';
import {
    Box,
    Typography,
    useTheme,
    Paper
} from '@mui/material';
import {
    Work as WorkIcon
} from '@mui/icons-material';
import { Project } from '../../data/types';
import ProjectCard from './ProjectCard';

interface ProfessionalProjectsProps {
    projects: Project[];
}

/**
 * Professional Projects component
 * Displays work-related projects and professional contributions
 */
const ProfessionalProjects: React.FC<ProfessionalProjectsProps> = ({ projects }) => {
    const theme = useTheme();

    const professionalProjects = projects.filter(project => project.type === 'professional');

    if (professionalProjects.length === 0) {
        return null;
    }



    return (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <WorkIcon sx={{ mr: 2, color: theme.palette.success.main, fontSize: '2rem' }} />
                <Typography variant="h4" component="h2" fontWeight={700}>
                    Professional Projects
                </Typography>
            </Box>

            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                These projects represent my professional work experience, showcasing contributions to
                enterprise-level applications, government systems, and business-critical software solutions.
                They demonstrate expertise in scalable architecture, system integration, and real-world
                problem-solving in production environments.
            </Typography>

            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
                {professionalProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </Box>

            {/* Professional Impact Summary */}
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
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: theme.palette.success.main }}>
                    Professional Impact & Expertise
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                            Technical Leadership
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                            Led development of enterprise-scale applications serving millions of users,
                            with focus on system architecture, performance optimization, and scalable solutions.
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                            Business Impact
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mb: 2 }}>
                            Delivered solutions that improved operational efficiency, reduced manual processes,
                            and enabled data-driven decision making for businesses and government organizations.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                        Key Technologies & Domains
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        • Enterprise Java Development (Spring Boot, Microservices)<br />
                        • Cloud Infrastructure (AWS, Kubernetes)<br />
                        • Database Systems (PostgreSQL, MS SQL Server, Oracle)<br />
                        • Frontend Technologies (React, Next.js, AngularJS)<br />
                        • Government & Education Technology Solutions<br />
                        • Restaurant & Hospitality Management Systems
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default ProfessionalProjects;