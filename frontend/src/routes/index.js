import React from "react";
import { Navigate } from "react-router";

export const HOME_PAGE_ROUTE = "/";

export const LOGIN_PAGE_ROUTE = "/auth";
export const DASHBOARD_PAGE_ROUTE = "/dashboard";

export const ProtectedRoutes = ({ children }) => {
  let IsAuth = localStorage.getItem(process.env.REACT_APP_USER_DASHBOARD_TOKEN);
  if (!IsAuth) {
    return <Navigate to="/" replace />;
  }
  return children;
};
