import { GlobalStyles as MuiGlobalStyles } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const GlobalStyles = (): React.ReactElement => {
  const theme = useTheme();

  return (
    <MuiGlobalStyles
      styles={{
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
        },
        html: {
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        },
        body: {
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
          backgroundColor: theme.palette.background.default,
        },
        "#root": {
          width: "100%",
          height: "100%",
          maxWidth: "100vw",
          overflowX: "hidden",
        },
        a: {
          textDecoration: "none",
          color: theme.palette.primary.main,
          "&:hover": {
            textDecoration: "underline",
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ".code-block": {
          fontFamily: '"Fira Code", monospace',
          backgroundColor: "#f5f5f5",
          padding: theme.spacing(2),
          borderRadius: theme.spacing(1),
          overflowX: "auto",
        },
      }}
    />
  );
};

export default GlobalStyles;
