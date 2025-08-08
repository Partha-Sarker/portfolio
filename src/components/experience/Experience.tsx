import React from "react";
import { Grid } from "@mui/material";
import experience from "../../data/experience";
import ExperienceCard from "./ExperienceCard";

/**
 * Experience component that displays professional work history
 * with emphasis on research relevance for academic applications
 */
const Experience: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {experience.map((exp) => (
        <Grid sx={{ xs: 12 }} key={exp.id}>
          <ExperienceCard experience={exp} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Experience;
