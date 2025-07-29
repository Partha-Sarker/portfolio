import React, { useState } from 'react';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    useTheme,
    useMediaQuery,
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
    Work as WorkIcon,
    Person as PersonIcon,
    FilterList as FilterListIcon
} from '@mui/icons-material';
import { Project } from '../../data/types';
import FeaturedProjects from './FeaturedProjects';
import FeaturedResearchProjects from './FeaturedResearchProjects';
import AcademicProjects from './AcademicProjects';
import ProfessionalProjects from './ProfessionalProjects';
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
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [activeTab, setActiveTab] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [technologyFilter, setTechnologyFilter] = useState('');

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const handleTechnologyFilterChange = (event: SelectChangeEvent) => {
        setTechnologyFilter(event.target.value);
    };

    // Curated filter tags for dropdown (most useful for filtering)
    const filterTags = [
        // Project Types
        'featured', 'research', 'academic', 'professional', 'personal',
        // Technologies & Languages
        'Unity', 'augmented-reality', 'game-development', '3d', 'multiplayer',
        'Java', 'Python', 'JavaScript', 'C#', 'C++', 'PHP', 'Node.js', 'Spring',
        // Frameworks & Tools
        'Android Studio', 'Laravel', 'OpenCV', 'Firebase', 'React', 'jQuery',
        // Domains
        'web-development', 'mobile', 'computer-vision', 'hci',
        // Special Categories
        'award-winning'
    ];

    // Function to format tag labels for display
    const formatTagLabel = (tag: string): string => {
        const tagFormatMap: { [key: string]: string } = {
            'featured': 'Featured',
            'research': 'Research',
            'academic': 'Academic',
            'professional': 'Professional',
            'personal': 'Personal',
            'game-development': 'Game Development',
            'web-development': 'Web Development',
            'mobile': 'Mobile',
            'computer-vision': 'Computer Vision',
            'hci': 'HCI',
            'award-winning': 'Award-Winning',
            '3d': '3D',
            'multiplayer': 'Multiplayer',
            'augmented-reality': 'Augmented Reality'
        };

        return tagFormatMap[tag] || tag;
    };

    // Filter projects based on search and tag filter
    const filterProjects = (projectList: Project[]) => {
        return projectList.filter(project => {
            const matchesSearch = searchTerm === '' ||
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesTag = technologyFilter === '' ||
                project.tags.includes(technologyFilter);

            return matchesSearch && matchesTag;
        });
    };

    const filteredProjects = filterProjects(projects);

    // Project counts for tabs
    const featuredCount = projects.filter(p => p.featured).length;
    const researchCount = projects.filter(p => p.type === 'research').length;
    const academicCount = projects.filter(p => p.type === 'academic').length;
    const professionalCount = projects.filter(p => p.type === 'professional').length;
    const personalCount = projects.filter(p => p.type === 'personal').length;

    return (
        <Box sx={{
            mb: 4,
            width: '100%',
            maxWidth: '100%',
            overflowX: 'hidden',
            boxSizing: 'border-box'
        }}>

            {/* Search and Filter Controls */}
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    mb: 4,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    overflowX: 'hidden',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <FilterListIcon sx={{ mr: 1, color: theme.palette.text.secondary }} />
                    <Typography variant="h6" component="h4" fontWeight={600} sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                        Search & Filter Projects
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '2fr 1fr' },
                    gap: 2,
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search projects by title, description, or tags..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiInputBase-input': {
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                            },
                            '& .MuiInputBase-root': {
                                minHeight: { xs: '40px', sm: '56px' },
                            },
                        }}
                    />

                    <FormControl fullWidth>
                        <InputLabel sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>Filter by Tag</InputLabel>
                        <Select
                            value={technologyFilter}
                            label="Filter by Tag"
                            onChange={handleTechnologyFilterChange}
                            sx={{
                                '& .MuiSelect-select': {
                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                    minHeight: { xs: '40px', sm: '56px' },
                                    display: 'flex',
                                    alignItems: 'center',
                                },
                            }}
                        >
                            <MenuItem value="">All Tags</MenuItem>
                            {filterTags.map((tag) => (
                                <MenuItem key={tag} value={tag}>
                                    {formatTagLabel(tag)}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>

                {/* Active Filters Display */}
                {(searchTerm || technologyFilter) && (
                    <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mr: 1, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                            Active filters:
                        </Typography>
                        {searchTerm && (
                            <Chip
                                label={`Search: "${searchTerm.length > 15 ? searchTerm.substring(0, 15) + '...' : searchTerm}"`}
                                size="small"
                                onDelete={() => setSearchTerm('')}
                                sx={{
                                    maxWidth: { xs: '150px', sm: '200px' },
                                    '& .MuiChip-label': {
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }
                                }}
                            />
                        )}
                        {technologyFilter && (
                            <Chip
                                label={`Tag: ${technologyFilter}`}
                                size="small"
                                onDelete={() => setTechnologyFilter('')}
                                sx={{
                                    maxWidth: { xs: '120px', sm: '150px' },
                                    '& .MuiChip-label': {
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }
                                }}
                            />
                        )}
                    </Box>
                )}
            </Paper>

            {/* Navigation Tabs - Only shown when not filtering */}
            {!searchTerm && !technologyFilter && (
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        aria-label="project categories"
                        variant={isMobile ? 'scrollable' : 'fullWidth'}
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                        centered={!isMobile}
                        sx={{
                            width: '100%',
                            maxWidth: '100%',
                            '& .MuiTabs-root': {
                                maxWidth: '100%',
                            },
                            '& .MuiTabs-scroller': {
                                maxWidth: '100%',
                                overflow: 'hidden',
                            },
                            '& .MuiTabs-flexContainer': {
                                maxWidth: '100%',
                                justifyContent: isMobile ? 'flex-start' : 'center',
                            },
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                                minWidth: { xs: 'auto', sm: 120, md: 'auto' },
                                padding: { xs: '6px 8px', sm: '12px 16px' },
                                whiteSpace: 'nowrap',
                                '& .MuiTab-iconWrapper': {
                                    marginRight: { xs: '4px', sm: '8px' },
                                },
                            },
                            '& .MuiTabs-scrollButtons': {
                                '&.Mui-disabled': {
                                    opacity: 0.3,
                                },
                                display: { md: 'none' },
                            },
                        }}
                    >
                        <Tab
                            icon={<StarIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />}
                            iconPosition="start"
                            label={`Featured${featuredCount > 0 ? ` (${featuredCount})` : ''}`}
                            id="projects-tab-0"
                            aria-controls="projects-tabpanel-0"
                            sx={{
                                whiteSpace: 'nowrap',
                                '& .MuiTab-iconWrapper': {
                                    marginRight: { xs: '4px', sm: '8px' },
                                },
                            }}
                        />
                        <Tab
                            icon={<ScienceIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />}
                            iconPosition="start"
                            label={`Research${researchCount > 0 ? ` (${researchCount})` : ''}`}
                            id="projects-tab-1"
                            aria-controls="projects-tabpanel-1"
                            sx={{
                                whiteSpace: 'nowrap',
                                '& .MuiTab-iconWrapper': {
                                    marginRight: { xs: '4px', sm: '8px' },
                                },
                            }}
                        />
                        <Tab
                            icon={<SchoolIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />}
                            iconPosition="start"
                            label={`Academic${academicCount > 0 ? ` (${academicCount})` : ''}`}
                            id="projects-tab-2"
                            aria-controls="projects-tabpanel-2"
                            sx={{
                                whiteSpace: 'nowrap',
                                '& .MuiTab-iconWrapper': {
                                    marginRight: { xs: '4px', sm: '8px' },
                                },
                            }}
                        />
                        <Tab
                            icon={<WorkIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />}
                            iconPosition="start"
                            label={`Professional${professionalCount > 0 ? ` (${professionalCount})` : ''}`}
                            id="projects-tab-3"
                            aria-controls="projects-tabpanel-3"
                            sx={{
                                whiteSpace: 'nowrap',
                                '& .MuiTab-iconWrapper': {
                                    marginRight: { xs: '4px', sm: '8px' },
                                },
                            }}
                        />
                        <Tab
                            icon={<PersonIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />}
                            iconPosition="start"
                            label={`Personal${personalCount > 0 ? ` (${personalCount})` : ''}`}
                            id="projects-tab-4"
                            aria-controls="projects-tabpanel-4"
                            sx={{
                                whiteSpace: 'nowrap',
                                '& .MuiTab-iconWrapper': {
                                    marginRight: { xs: '4px', sm: '8px' },
                                },
                            }}
                        />
                        <Tab
                            icon={<FilterListIcon sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }} />}
                            iconPosition="start"
                            label={`All (${projects.length})`}
                            id="projects-tab-5"
                            aria-controls="projects-tabpanel-5"
                            sx={{
                                whiteSpace: 'nowrap',
                                '& .MuiTab-iconWrapper': {
                                    marginRight: { xs: '4px', sm: '8px' },
                                },
                            }}
                        />
                    </Tabs>
                </Box>
            )}

            {/* Show all filtered projects together when searching/filtering */}
            {searchTerm || technologyFilter ? (
                <Box>
                    <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                        Search Results ({filteredProjects.length} projects found)
                    </Typography>

                    {filteredProjects.length > 0 ? (
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
                            gap: 3,
                            width: '100%',
                            maxWidth: '100%',
                            boxSizing: 'border-box'
                        }}>
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </Box>
                    ) : (
                        <Box sx={{ textAlign: 'center', py: 6 }}>
                            <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
                                No projects found matching your criteria
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Try adjusting your search terms or removing filters
                            </Typography>
                        </Box>
                    )}
                </Box>
            ) : (
                <>
                    {/* Tab Panels - Only shown when not filtering */}
                    <TabPanel value={activeTab} index={0}>
                        <FeaturedProjects projects={projects} />
                    </TabPanel>

                    <TabPanel value={activeTab} index={1}>
                        <FeaturedResearchProjects projects={projects} />
                    </TabPanel>

                    <TabPanel value={activeTab} index={2}>
                        <AcademicProjects projects={projects} />
                    </TabPanel>

                    <TabPanel value={activeTab} index={3}>
                        <ProfessionalProjects projects={projects} />
                    </TabPanel>

                    <TabPanel value={activeTab} index={4}>
                        <PersonalProjects projects={projects} />
                    </TabPanel>

                    <TabPanel value={activeTab} index={5}>
                        <Box>
                            <Typography variant="h5" component="h3" fontWeight={600} sx={{ mb: 3, fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
                                All Projects ({projects.length} total)
                            </Typography>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
                                gap: 3,
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box'
                            }}>
                                {projects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </Box>
                        </Box>
                    </TabPanel>
                </>
            )}



            {/* Project Statistics */}
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Typography variant="h6" component="h4" fontWeight={600} sx={{ mb: 2, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                    Project Portfolio Summary
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr 1fr', sm: '1fr 1fr 1fr', md: '1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr 1fr' },
                    gap: { xs: 2, sm: 3 },
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h4" fontWeight={700} color="text.primary">
                            {projects.length}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Total Projects
                        </Typography>
                    </Box>

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
                        <Typography variant="h4" fontWeight={700} color="success.main">
                            {professionalCount}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Professional Projects
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