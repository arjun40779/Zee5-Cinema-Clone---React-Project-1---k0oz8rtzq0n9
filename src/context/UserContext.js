import React, { createContext, useContext, useState, useEffect } from "react";
const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [token, setToken] = useState(null);
  const contextValues = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
    token,
    setToken,
  };
  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};
const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within UserProvider");
  }
  return context;
};
export { UserProvider, useUserContext };
