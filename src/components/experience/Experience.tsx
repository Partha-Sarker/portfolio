import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme
} from '@mui/material';
import experience from '../../data/experience';
import ExperienceCard from './ExperienceCard';

/**
 * Experience component that displays professional work history
 * with emphasis on research relevance for academic applications
 */
const Experience: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            id="experience"
            sx={{
                py: 8,
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                <Typography
                    variant="h2"
                    component="h2"
                    align="center"
                    gutterBottom
                    sx={{
                        mb: 6,
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                    }}
                >
                    Professional Experience
                </Typography>

                <Grid container spacing={4}>
                    {experience.map((exp) => (
                        <Grid sx={{ xs: 12 }} key={exp.id}>
                            <ExperienceCard experience={exp} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Experience;