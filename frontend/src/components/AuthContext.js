// frontend/src/components/AuthContext.js

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    // Persist login state through localStorage/sessionStorage or cookies
  };

  const logout = () => {
    setUser(null);
    // Remove persisted login state
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
