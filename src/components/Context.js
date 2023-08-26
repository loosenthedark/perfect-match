import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleContactFormModal, setToggleContactFormModal] = useState(false);
  const [toggleApplicationFormNannyModal, setToggleApplicationFormNannyModal] =
    useState(false);
  const [
    toggleApplicationFormParentsModal,
    setToggleApplicationFormParentsModal,
  ] = useState(false);
  const [permitChecked, setPermitChecked] = useState(false);
  const [licenceChecked, setLicenceChecked] = useState(false);
  const [carChecked, setCarChecked] = useState(false);
  const [experienceChecked, setExperienceChecked] = useState(false);
  const [qualificationsChecked, setQualificationsChecked] = useState(false);
  const [employedChecked, setEmployedChecked] = useState(false);
  const [pregnantChecked, setPregnantChecked] = useState(false);
  const [petsChecked, setPetsChecked] = useState(false);
  const [temporaryOrPermanent, setTemporaryOrPermanent] = useState(false);
  const [partOrFullTime, setPartOrFullTime] = useState(false);
  const [liveInOrOut, setLiveInOrOut] = useState(false);
  const [driver, setDriver] = useState(false);
  const [ownCar, setOwnCar] = useState(false);
  const [nonSmoker, setNonSmoker] = useState(false);
  const [cooking, setCooking] = useState(false);
  const [howManyKids, setHowManyKids] = useState(1);
  const [inputFieldsChildren, setInputFieldsChildren] = useState([]);
  const [isAgreementShown, setIsAgreementShown] = useState(false);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFinalScreenShown, setIsFinalScreenShown] = useState(false);
  const [stripeCheckout, toggleStripeCheckout] = useState(true);

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
        pregnantChecked,
        setPregnantChecked,
        petsChecked,
        setPetsChecked,
        temporaryOrPermanent,
        setTemporaryOrPermanent,
        partOrFullTime,
        setPartOrFullTime,
        liveInOrOut,
        setLiveInOrOut,
        howManyKids,
        setHowManyKids,
        inputFieldsChildren,
        setInputFieldsChildren,
        driver,
        setDriver,
        ownCar,
        setOwnCar,
        nonSmoker,
        setNonSmoker,
        cooking,
        setCooking,
        isAgreementShown,
        setIsAgreementShown,
        isAgreementChecked,
        setIsAgreementChecked,
        isFormSubmitted,
        setIsFormSubmitted,
        isFinalScreenShown,
        setIsFinalScreenShown,
        stripeCheckout,
        toggleStripeCheckout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(AppContext);
