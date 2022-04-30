import React, { useState, useContext, createContext } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <AppContext.Provider
      value={{
        modal,
        sidebar,
        openSidebar,
        openModal,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGLobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
