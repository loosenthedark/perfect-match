import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleContactFormModal, setToggleContactFormModal] = useState(false);
  const [toggleApplicationFormNannyModal, setToggleApplicationFormNannyModal] =
    useState(false);
  const [toggleApplicationFormParentsModal, setToggleApplicationFormParentsModal] =
    useState(false);
  const [permitChecked, setPermitChecked] = useState(false);
  const [licenceChecked, setLicenceChecked] = useState(false);
  const [carChecked, setCarChecked] = useState(false);
  const [experienceChecked, setExperienceChecked] = useState(false);
  const [qualificationsChecked, setQualificationsChecked] = useState(false);
  const [employedChecked, setEmployedChecked] = useState(false);

  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        toggleContactFormModal,
        setToggleContactFormModal,
        toggleApplicationFormNannyModal,
        toggleApplicationFormParentsModal,
        setToggleApplicationFormNannyModal,
        setToggleApplicationFormParentsModal,
        permitChecked,
        setPermitChecked,
        licenceChecked,
        setLicenceChecked,
        carChecked,
        setCarChecked,
        experienceChecked,
        setExperienceChecked,
        qualificationsChecked,
        setQualificationsChecked,
        employedChecked,
        setEmployedChecked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(AppContext);
