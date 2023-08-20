import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AppContext = React.createContext({
  authToken: null,
  setAuthToken: () => {},
  openAdminPanel: false,
  setOpenAdminPanel: () => {}
});

export const AppProvider = ({ children }) => {
  const [authToken, setAuthToken] = useLocalStorage("authToken", null);
  const [openAdminPanel, setOpenAdminPanel] = useState(false);

  const contextValue = {
    authToken,
    setAuthToken,
    openAdminPanel,
    setOpenAdminPanel
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
