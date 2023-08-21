import React, { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const initialProducts = [
  {
    id: 1,
    speaker: "John Snow",
    speechTitle: "How to be more confidence",
    date: "20-08-2023",
    price: "150",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const AppContext = React.createContext({
  authToken: null,
  setAuthToken: () => {},
  openAdminPanel: false,
  setOpenAdminPanel: () => {},
  events: initialProducts,
  setEvents: () => {},
});

export const AppProvider = ({ children }) => {
  const [authToken, setAuthToken] = useLocalStorage("authToken", null);
  const [openAdminPanel, setOpenAdminPanel] = useState(false);
  const [events, setEvents] = useLocalStorage("products", initialProducts);

  const contextValue = {
    authToken,
    setAuthToken,
    openAdminPanel,
    setOpenAdminPanel,
    events,
    setEvents,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
