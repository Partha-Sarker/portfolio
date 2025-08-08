import React, { ReactNode } from "react";
import { Box, Grid, Paper } from "@mui/material";

interface SectionContainerProps {
  children: ReactNode;
  elevation?: number;
  spacing?: number;
  padding?: number | { xs?: number; sm?: number; md?: number; lg?: number };
  backgroundColor?: string;
  variant?: "default" | "outlined" | "elevation";
}

/**
 * Container component for organizing content within sections
 * Provides consistent styling and structure
 */
const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  elevation = 0,
  spacing = 3,
  padding = { xs: 2, sm: 3, md: 4 },
  backgroundColor = "background.paper",
  variant = "default",
}) => {
  // For default variant, just use a Box
  if (variant === "default") {
    return (
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          p: padding,
          backgroundColor,
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <Grid container spacing={spacing}>
          {children}
        </Grid>
      </Box>
    );
  }

  // For outlined or elevation variants, use Paper
  return (
    <Paper
      elevation={variant === "elevation" ? elevation : 0}
      variant={variant === "outlined" ? "outlined" : undefined}
      sx={{
        width: "100%",
        maxWidth: "100%",
        p: padding,
        backgroundColor,
        borderRadius: 2,
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Grid container spacing={spacing}>
        {children}
      </Grid>
    </Paper>
  );
};

export default SectionContainer;
