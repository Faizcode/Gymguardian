import React, { useCallback } from "react";

// let logoutTimer;

const AuthContext = React.createContext();

export const AuthContextProvider = (children) => {
  const logoutHandler = useCallback(() => {
    localStorage.clear();
  }, []);

  const loginHandler = (token) => {
    localStorage.setItem("token", token);
  };

  const contextValue = {
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
