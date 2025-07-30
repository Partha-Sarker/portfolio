import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Chip,
    useTheme
} from '@mui/material';
import {
    Code as CodeIcon,
    Build as BuildIcon,
    Cloud as CloudIcon,
    Science as ScienceIcon,
    Psychology as PsychologyIcon,
    Palette as PaletteIcon,
    Storage as StorageIcon,
    Settings as SettingsIcon,
    SmartToy as SmartToyIcon
} from '@mui/icons-material';
import skills from '../../data/skills';

/**
 * Skills component that displays technical skills and expertise
 * organized by category in a clean, consistent design
 */
const Skills: React.FC = () => {
    const theme = useTheme();

    // Group skills by category
    const skillsByCategory = {
        programming: skills.filter(skill => skill.category === 'programming'),
        frameworks: skills.filter(skill => skill.category === 'frameworks'),
        cloud: skills.filter(skill => skill.category === 'cloud'),
        databases: skills.filter(skill => skill.category === 'databases'),
        tools: skills.filter(skill => skill.category === 'tools'),
        design: skills.filter(skill => skill.category === 'design'),
        research: skills.filter(skill => skill.category === 'research'),
        soft: skills.filter(skill => skill.category === 'soft'),
        ml: skills.filter(skill => skill.category === 'ml'),
    };

    // Get category icon
    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'programming': return <CodeIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            case 'frameworks': return <BuildIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            case 'ml': return <SmartToyIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            case 'cloud': return <CloudIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            case 'databases': return <StorageIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            case 'tools': return <SettingsIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            case 'design': return <PaletteIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            case 'research': return <ScienceIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            case 'soft': return <PsychologyIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
            default: return <SettingsIcon sx={{ mr: 1, color: theme.palette.primary.main }} />;
        }
    };

    // Get category title
    const getCategoryTitle = (category: string) => {
        switch (category) {
            case 'programming': return 'Programming Languages';
            case 'frameworks': return 'Frameworks & Libraries';
            case 'ml': return 'ML/AI';
            case 'cloud': return 'Cloud & DevOps Technologies';
            case 'databases': return 'Databases';
            case 'tools': return 'Development Tools & Technologies';
            case 'design': return 'Design & Creative Tools';
            case 'research': return 'Research & Academic Skills';
            case 'soft': return 'Soft Skills';
            default: return 'Skills';
        }
    };

    const SkillsSection: React.FC<{ category: string; skillsList: any[] }> = ({ category, skillsList }) => (
        <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                {getCategoryIcon(category)}
                <Typography variant="h5" component="h3" fontWeight={600} sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                    {getCategoryTitle(category)}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skillsList.map((skill, index) => (
                    <Chip
                        key={skill.id}
                        label={skill.name}
                        sx={{
                            backgroundColor: theme.palette.background.default,
                            fontSize: '0.9rem',
                            height: 36,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.light,
                                color: 'white'
                            }
                        }}
                    />
                ))}
            </Box>
        </Box>
    );

    return (
        <Grid container spacing={3}>
            <Grid sx={{ xs: 12 }}>
                {/* Programming Languages */}
                <SkillsSection category="programming" skillsList={skillsByCategory.programming} />

                {/* Frameworks & Libraries */}
                <SkillsSection category="frameworks" skillsList={skillsByCategory.frameworks} />

                {/* ML/AI */}
                <SkillsSection category="ml" skillsList={skillsByCategory.ml} />

                {/* Cloud & DevOps Technologies */}
                <SkillsSection category="cloud" skillsList={skillsByCategory.cloud} />

                {/* Databases */}
                <SkillsSection category="databases" skillsList={skillsByCategory.databases} />

                {/* Development Tools & Technologies */}
                <SkillsSection category="tools" skillsList={skillsByCategory.tools} />

                {/* Design & Creative Tools */}
                <SkillsSection category="design" skillsList={skillsByCategory.design} />

                {/* Research & Academic Skills */}
                <SkillsSection category="research" skillsList={skillsByCategory.research} />

                {/* Soft Skills */}
                <SkillsSection category="soft" skillsList={skillsByCategory.soft} />
            </Grid>
        </Grid>
    );
};

export default Skills;