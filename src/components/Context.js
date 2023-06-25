import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleContactFormModal, setToggleContactFormModal] = useState(false);
  const [toggleApplicationFormNannyModal, setToggleApplicationFormNannyModal] =
    useState(false);

  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        toggleContactFormModal,
        setToggleContactFormModal,
        toggleApplicationFormNannyModal,
        setToggleApplicationFormNannyModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(AppContext);
