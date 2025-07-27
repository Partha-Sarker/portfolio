import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Button,
    Chip,
    useTheme,
    Paper
} from '@mui/material';
import {
    MusicNote as MusicNoteIcon,
    SportsEsports as GamingIcon,
    Movie as AnimeIcon,
    YouTube as YouTubeIcon,
    Headphones as MusicIcon,
    Build as DevelopmentIcon,
    AutoAwesome as BuildIcon
} from '@mui/icons-material';

interface Interest {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    category: 'music' | 'gaming' | 'development' | 'entertainment';
    links?: Array<{
        title: string;
        url: string;
        type: 'youtube' | 'external' | 'spotify' | 'myanimelist';
    }>;
    tags?: string[];
}

/**
 * Personal Interests component
 * Displays personal interests and hobbies in a visually appealing grid layout
 */
const PersonalInterests: React.FC = () => {
    const theme = useTheme();

    const interests: Interest[] = [
        {
            id: 'music-performance',
            title: 'Musical Performance',
            description: 'I love playing Piano and Guitar, expressing creativity through music and sharing performances with others.',
            icon: <MusicNoteIcon />,
            category: 'music',
            links: [
                {
                    title: 'Watch me play on YouTube',
                    url: 'https://www.youtube.com/@partha.sarker',
                    type: 'youtube'
                }
            ],
            tags: ['Piano', 'Guitar', 'Performance']
        },
        {
            id: 'game-development',
            title: 'Game Development',
            description: 'Have great interest in game development. Developed multiple games during undergraduation and continue exploring new technologies.',
            icon: <DevelopmentIcon />,
            category: 'development',
            tags: ['Unity', 'Unreal Engine', 'Godot', 'Blender']
        },
        {
            id: 'emerging-tech',
            title: 'Emerging Technologies',
            description: 'Love exploring new features such as AR, VR, 3D Modeling, and Environment design. Always staying up to date with the latest developments.',
            icon: <BuildIcon />,
            category: 'development',
            tags: ['AR/VR', '3D Modeling', 'Environment Design']
        },
        {
            id: 'music-discovery',
            title: 'Music Discovery',
            description: 'Love listening to songs and finding new ones. Music is a constant source of inspiration and relaxation.',
            icon: <MusicIcon />,
            category: 'music',
            links: [
                {
                    title: 'Listen with me on Spotify',
                    url: 'https://open.spotify.com/user/21utmxujfftmvmomgf3q3zbkq?si=3f4cda7d045041b5',
                    type: 'spotify'
                }
            ],
            tags: ['Music Discovery', 'Various Genres']
        },
        {
            id: 'competitive-gaming',
            title: 'Competitive Gaming',
            description: 'Playing competitive video games such as Valorant, Overwatch and watching streamers play. Enjoy the strategic and competitive aspects.',
            icon: <GamingIcon />,
            category: 'gaming',
            tags: ['Valorant', 'Overwatch', 'Streaming']
        },
        {
            id: 'anime',
            title: 'Anime Enthusiast',
            description: 'Love to watch anime and reading manga, appreciating the storytelling, art style, and cultural aspects of Japanese animation.',
            icon: <AnimeIcon />,
            category: 'entertainment',
            links: [
                {
                    title: 'View MyAnimeList Profile',
                    url: 'https://myanimelist.net/profile/Ahtrap',
                    type: 'myanimelist'
                }
            ],
            tags: ['Japanese Animation', 'Storytelling']
        }
    ];

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'music':
                return theme.palette.secondary.main;
            case 'gaming':
                return theme.palette.warning.main;
            case 'development':
                return theme.palette.primary.main;
            case 'entertainment':
                return theme.palette.info.main;
            default:
                return theme.palette.grey[500];
        }
    };

    const getCategoryTitle = (category: string) => {
        switch (category) {
            case 'music':
                return 'Musical Interests';
            case 'gaming':
                return 'Gaming & Competition';
            case 'development':
                return 'Creative Development';
            case 'entertainment':
                return 'Entertainment';
            default:
                return 'Other Interests';
        }
    };

    // Group interests by category
    const interestsByCategory = interests.reduce((acc, interest) => {
        if (!acc[interest.category]) {
            acc[interest.category] = [];
        }
        acc[interest.category].push(interest);
        return acc;
    }, {} as Record<string, Interest[]>);

    return (
        <Box>
            

            {/* Interests by Category */}
            {Object.entries(interestsByCategory).map(([category, categoryInterests]) => (
                <Box key={category} sx={{ mb: 5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Box
                            sx={{
                                width: 4,
                                height: 24,
                                backgroundColor: getCategoryColor(category),
                                mr: 2,
                                borderRadius: 2
                            }}
                        />
                        <Typography variant="h5" component="h3" fontWeight={600}>
                            {getCategoryTitle(category)}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                        {categoryInterests.map((interest) => (
                            <Card
                                key={interest.id}
                                elevation={2}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: 4
                                    }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    {/* Icon and Title */}
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Box
                                            sx={{
                                                p: 1,
                                                borderRadius: 2,
                                                backgroundColor: getCategoryColor(interest.category) + '20',
                                                color: getCategoryColor(interest.category),
                                                mr: 2
                                            }}
                                        >
                                            {interest.icon}
                                        </Box>
                                        <Typography variant="h6" component="h4" fontWeight={600}>
                                            {interest.title}
                                        </Typography>
                                    </Box>

                                    {/* Description */}
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.6 }}
                                    >
                                        {interest.description}
                                    </Typography>

                                    {/* Tags */}
                                    {interest.tags && (
                                        <Box sx={{ mb: 3 }}>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {interest.tags.map((tag, index) => (
                                                    <Chip
                                                        key={index}
                                                        label={tag}
                                                        size="small"
                                                        sx={{
                                                            backgroundColor: theme.palette.background.default,
                                                            fontSize: '0.75rem'
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                    )}

                                    {/* Links */}
                                    {interest.links && (
                                        <Box sx={{ mt: 'auto' }}>
                                            {interest.links.map((link, index) => (
                                                <Button
                                                    key={index}
                                                    variant="outlined"
                                                    startIcon={link.type === 'youtube' ? <YouTubeIcon /> : link.type === 'spotify' ? <MusicNoteIcon /> : link.type === 'myanimelist' ? <AnimeIcon /> : undefined}
                                                    component="a"
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{
                                                        textTransform: 'none',
                                                        borderColor: getCategoryColor(interest.category),
                                                        color: getCategoryColor(interest.category),
                                                        '&:hover': {
                                                            backgroundColor: getCategoryColor(interest.category) + '10',
                                                            borderColor: getCategoryColor(interest.category)
                                                        }
                                                    }}
                                                >
                                                    {link.title}
                                                </Button>
                                            ))}
                                        </Box>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            ))}

            {/* Closing Note */}
            <Paper
                elevation={0}
                sx={{
                    p: 3,
                    backgroundColor: theme.palette.primary.light + '10',
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.primary.light}`,
                    textAlign: 'center'
                }}
            >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: theme.palette.primary.main }}>
                    Connecting Interests with Innovation
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    These diverse interests contribute to my holistic approach to problem-solving and creativity.
                    Whether it's the precision required in musical performance, the strategic thinking in competitive gaming,
                    or the artistic vision in game development, each interest enhances my technical and research capabilities.
                </Typography>
            </Paper>
        </Box>
    );
};

export default PersonalInterests;
