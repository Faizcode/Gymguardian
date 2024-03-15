import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Home from "./pages/home";
import { THEME_MAIN_BACKGROUND_COLOR } from "./styles";
import { Box } from "@mui/material";
import DashboardHome from "./pages/dashboard/home";
import {
  DASHBOARD_PAGE_ROUTE,
  HOME_PAGE_ROUTE,
  LOGIN_PAGE_ROUTE,
  ProtectedRoutes,
} from "./routes";

function App() {
  return (
    <Box sx={{ backgroundColor: THEME_MAIN_BACKGROUND_COLOR }}>
      <Routes>
        <Route path={HOME_PAGE_ROUTE} element={<Home />} />
        <Route path={LOGIN_PAGE_ROUTE} element={<Login />} />
        <Route
          path={DASHBOARD_PAGE_ROUTE}
          element={
            <ProtectedRoutes>
              <DashboardHome />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Box>
  );
}

export default App;
