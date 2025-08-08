import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import routes from "./routes";

// Loading component for suspense fallback
const LoadingScreen = () => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}
  >
    <CircularProgress />
  </Box>
);

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
