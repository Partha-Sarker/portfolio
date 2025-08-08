import React from "react";
import { Box, Tooltip, Typography, useTheme } from "@mui/material";
import {
  School as SchoolIcon,
  Science as ScienceIcon,
  Psychology as PsychologyIcon,
  Biotech as BiotechIcon,
  ImportContacts as ImportContactsIcon,
} from "@mui/icons-material";

interface ResearchRelevanceIndicatorProps {
  relevance: "high" | "medium" | "low";
  type?: "computer-vision" | "hci" | "document-analysis" | "general";
  size?: "small" | "medium" | "large";
  showLabel?: boolean;
}

/**
 * Component to visually indicate research relevance of projects or experiences
 */
const ResearchRelevanceIndicator: React.FC<ResearchRelevanceIndicatorProps> = ({
  relevance,
  type = "general",
  size = "medium",
  showLabel = false,
}) => {
  const theme = useTheme();

  // Determine color based on relevance
  const getColor = () => {
    switch (relevance) {
      case "high":
        return theme.palette.primary.main;
      case "medium":
        return theme.palette.secondary.main;
      case "low":
        return theme.palette.text.secondary;
      default:
        return theme.palette.text.secondary;
    }
  };

  // Determine icon based on type
  const getIcon = () => {
    switch (type) {
      case "computer-vision":
        return <BiotechIcon sx={{ fontSize: getIconSize() }} />;
      case "hci":
        return <PsychologyIcon sx={{ fontSize: getIconSize() }} />;
      case "document-analysis":
        return <ImportContactsIcon sx={{ fontSize: getIconSize() }} />;
      default:
        return <ScienceIcon sx={{ fontSize: getIconSize() }} />;
    }
  };

  // Determine icon size
  const getIconSize = () => {
    switch (size) {
      case "small":
        return 16;
      case "large":
        return 24;
      default:
        return 20;
    }
  };

  // Get label text
  const getLabel = () => {
    return `Research Relevance: ${relevance.charAt(0).toUpperCase() + relevance.slice(1)}`;
  };

  // Get tooltip text
  const getTooltipText = () => {
    let baseText = `Research Relevance: ${relevance.charAt(0).toUpperCase() + relevance.slice(1)}`;

    switch (type) {
      case "computer-vision":
        return `${baseText} - Computer Vision Research`;
      case "hci":
        return `${baseText} - Human-Computer Interaction Research`;
      case "document-analysis":
        return `${baseText} - Document Analysis Research`;
      default:
        return baseText;
    }
  };

  return (
    <Tooltip title={getTooltipText()}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <Box sx={{ color: getColor() }}>{getIcon()}</Box>

        {showLabel && (
          <Typography
            variant="caption"
            sx={{
              color: getColor(),
              fontWeight: 500,
            }}
          >
            {getLabel()}
          </Typography>
        )}
      </Box>
    </Tooltip>
  );
};

export default ResearchRelevanceIndicator;
