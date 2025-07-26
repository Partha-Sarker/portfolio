import React, { useState } from 'react';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    useTheme,
    Paper,
    Chip,
    TextField,
    InputAdornment,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent
} from '@mui/material';
import {
    Search as SearchIcon,
    Star as StarIcon,
    Science as ScienceIcon,
    School as SchoolIcon,
    Person as PersonIcon,
    FilterList as FilterListIcon
} from '@mui/icons-material';
import { Project } from '../../data/types';
import FeaturedProjects from './FeaturedProjects';
import FeaturedResearchProjects from './FeaturedResearchProjects';
import AcademicProjects from './AcademicProjects';
import PersonalProjects from './PersonalProjects';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
    projects: Project[];
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`projects-tabpanel-${index}`}
            aria-labelledby={`projects-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
        </div>
    );
}

/**
 * Projects Section component
 * Main component that organizes and displays all project categories
 */
const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [technologyFilter, setTechnologyFilter] = useState('');

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleTechnologyFilterChange = (event: SelectChangeEvent) => {
        setTechnologyFilter(event.target.value);
    };

    // Get all unique technologies for filter dropdown
    const allTechnologies = Array.from(
        new Set(projects.flatMap(project => project.technologies))
    ).sort();

    // Filter projects based on search and technology filter
    const filterProjects = (projectList: Project[]) => {
        return projectList.filter(project => {
            const matchesSearch = searchTerm === '' ||
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesTechnology = technologyFilter === '' ||
                project.technologies.includes(technologyFilter);

            return matchesSearch && matchesTechnology;
        });
    };

    const filteredProjects = filterProjects(projects);

    // Project counts for tabs
    const featuredCount = projects.filter(p => p.featured).length;
    const researchCount = projects.filter(p => p.type === 'research').length;
    const academicCount = projects.filter(p => p.type === 'academic').length;
    const personalCount = projects.filter(p => p.type === 'personal').length;

    return (
        <Box sx={{ mb: 4 }}>
            {/* Section Header */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" component="h1" fontWeight={700} sx={{ mb: 2 }}>
                    Projects & Research
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
                    A comprehensive showcase of my research work, academic projects, and personal initiatives
                    spanning Human-Computer Interaction, Computer Vision, and Software Development
                </Typography>
            </Box>

            {/* Search and Filter Controls */}
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    mb: 4,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FilterListIcon sx={{ mr: 1, color: theme.palette.text.secondary }} />
                    <Typography variant="h6" fontWeight={600}>
                        Search & Filter Projects
                    </Typography>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 2 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search projects by title, description, or technology..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <FormControl fullWidth>
                        <InputLabel>Filter by Technology</InputLabel>
                        <Select
                            value={technologyFilter}
                            label="Filter by Technology"
                            onChange={handleTechnologyFilterChange}
                        >
                            <MenuItem value="">All Technologies</MenuItem>
                            {allTechnologies.map((tech) => (
                                <MenuItem key={tech} value={tech}>
                                    {tech}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* Active Filters Display */}
                {(searchTerm || technologyFilter) && (
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                            Active filters:
                        </Typography>
                        {searchTerm && (
                            <Chip
                                label={`Search: "${searchTerm}"`}
                                size="small"
                                onDelete={() => setSearchTerm('')}
                            />
                        )}
                        {technologyFilter && (
                            <Chip
                                label={`Technology: ${technologyFilter}`}
                                size="small"
                                onDelete={() => setTechnologyFilter('')}
                            />
                        )}
                    </Box>
                )}
            </Paper>

            {/* Navigation Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    aria-label="project categories"
                    variant="fullWidth"
                    sx={{
                        '& .MuiTab-root': {
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                        },
                    }}
                >
                    <Tab
                        icon={<StarIcon />}
                        iconPosition="start"
                        label={`Featured (${featuredCount})`}
                        id="projects-tab-0"
                        aria-controls="projects-tabpanel-0"
                    />
                    <Tab
                        icon={<ScienceIcon />}
                        iconPosition="start"
                        label={`Research (${researchCount})`}
                        id="projects-tab-1"
                        aria-controls="projects-tabpanel-1"
                    />
                    <Tab
                        icon={<SchoolIcon />}
                        iconPosition="start"
                        label={`Academic (${academicCount})`}
                        id="projects-tab-2"
                        aria-controls="projects-tabpanel-2"
                    />
                    <Tab
                        icon={<PersonIcon />}
                        iconPosition="start"
                        label={`Personal (${personalCount})`}
                        id="projects-tab-3"
                        aria-controls="projects-tabpanel-3"
                    />
                </Tabs>
            </Box>

            {/* Tab Panels */}
            <TabPanel value={activeTab} index={0}>
                {searchTerm || technologyFilter ? (
                    <Box>
                        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                            Featured Projects ({filterProjects(projects.filter(p => p.featured)).length} results)
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
                            {filterProjects(projects.filter(p => p.featured)).map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </Box>
                    </Box>
                ) : (
                    <FeaturedProjects projects={projects} />
                )}
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
                {searchTerm || technologyFilter ? (
                    <Box>
                        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                            Research Projects ({filterProjects(projects.filter(p => p.type === 'research')).length} results)
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
                            {filterProjects(projects.filter(p => p.type === 'research')).map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </Box>
                    </Box>
                ) : (
                    <FeaturedResearchProjects projects={projects} />
                )}
            </TabPanel>

            <TabPanel value={activeTab} index={2}>
                {searchTerm || technologyFilter ? (
                    <Box>
                        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                            Academic Projects ({filterProjects(projects.filter(p => p.type === 'academic')).length} results)
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
                            {filterProjects(projects.filter(p => p.type === 'academic')).map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </Box>
                    </Box>
                ) : (
                    <AcademicProjects projects={projects} />
                )}
            </TabPanel>

            <TabPanel value={activeTab} index={3}>
                {searchTerm || technologyFilter ? (
                    <Box>
                        <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                            Personal Projects ({filterProjects(projects.filter(p => p.type === 'personal')).length} results)
                        </Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 3 }}>
                            {filterProjects(projects.filter(p => p.type === 'personal')).map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </Box>
                    </Box>
                ) : (
                    <PersonalProjects projects={projects} />
                )}
            </TabPanel>

            {/* No Results Message */}
            {(searchTerm || technologyFilter) && filteredProjects.length === 0 && (
                <Box sx={{ textAlign: 'center', py: 6 }}>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                        No projects found matching your criteria
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Try adjusting your search terms or removing filters
                    </Typography>
                </Box>
            )}

            {/* Project Statistics */}
            <Paper
                elevation={0}
                sx={{
                    mt: 6,
                    p: 3,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    Project Portfolio Summary
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }, gap: 3 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight={700} color="warning.main">
                            {featuredCount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Featured Projects
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight={700} color="primary.main">
                            {researchCount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Research Projects
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight={700} color="secondary.main">
                            {academicCount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Academic Projects
                        </Typography>
                    </Box>

                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight={700} color="info.main">
                            {personalCount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Personal Projects
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default ProjectsSection;