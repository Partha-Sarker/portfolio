import React from 'react';
import { 
  SvgIcon, 
  SvgIconProps,
  useTheme
} from '@mui/material';

/**
 * Custom academic-themed icons for the portfolio
 */

// Graduation Cap Icon
export const GraduationCapIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        fill={props.color || theme.palette.primary.main}
        d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" 
      />
    </SvgIcon>
  );
};

// Research Paper Icon
export const ResearchPaperIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        fill={props.color || theme.palette.primary.main}
        d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M16,11H8V9H16V11M16,15H8V13H16V15M16,19H8V17H16V19Z" 
      />
    </SvgIcon>
  );
};

// Academic Citation Icon
export const CitationIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        fill={props.color || theme.palette.primary.main}
        d="M6,17H8L9,13H11L10,17H12L13,13H15L14,17H16L17,13H19L18,17H20V19H17L16,23H14L15,19H13L12,23H10L11,19H9L8,23H6L7,19H5V17H6M9,15H11L12,11H10L9,15M13,15H15L16,11H14L13,15Z" 
      />
    </SvgIcon>
  );
};

// University Icon
export const UniversityIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        fill={props.color || theme.palette.primary.main}
        d="M12,3L1,9L12,15L23,9L12,3M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" 
      />
    </SvgIcon>
  );
};

// Thesis Icon
export const ThesisIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        fill={props.color || theme.palette.primary.main}
        d="M19,1L14,6V17L19,12.5V1M21,5V18.5C19.9,18.15 18.7,18 17.5,18C15.8,18 13.35,18.65 12,19.5V6C10.55,4.9 8.45,4.5 6.5,4.5C4.55,4.5 2.45,4.9 1,6V20.65C1,20.9 1.25,21.15 1.5,21.15C1.6,21.15 1.65,21.1 1.75,21.1C3.1,20.45 5.05,20 6.5,20C8.45,20 10.55,20.4 12,21.5C13.35,20.65 15.8,20 17.5,20C19.15,20 20.85,20.3 22.25,21.05C22.35,21.1 22.4,21.1 22.5,21.1C22.75,21.1 23,20.85 23,20.6V6C22.4,5.55 21.75,5.25 21,5M10,18.5C8.65,17.65 6.2,17 4.5,17C3.3,17 2.1,17.15 1,17.5V7.2C2.1,6.65 3.3,6.5 4.5,6.5C6.2,6.5 8.65,7.15 10,8V18.5Z" 
      />
    </SvgIcon>
  );
};

// Academic Award Icon
export const AcademicAwardIcon: React.FC<SvgIconProps> = (props) => {
  const theme = useTheme();
  
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path 
        fill={props.color || theme.palette.primary.main}
        d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,8H13V14H11V8M11,16H13V18H11V16Z" 
      />
    </SvgIcon>
  );
};