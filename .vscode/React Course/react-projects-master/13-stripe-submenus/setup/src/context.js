import React, { useState, useContext, createContext } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState("");
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const openSubmenu = (text, coordinates) => {
    setLocation(coordinates);
    setPage(text);
    setSubmenu(true);
  };
  const closeSubmenu = () => {
    setSubmenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        submenu,
        sidebar,
        openSubmenu,
        openSidebar,
        closeSubmenu,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
