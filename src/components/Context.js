import { useState, createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleContactFormModal, setToggleContactFormModal] = useState(false);
  const [toggleParentsOrNannyToggleModal, setToggleParentsOrNannyToggleModal] =
    useState(false);
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
  const [isFormValid, setIsFormValid] = useState(false);
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isFinalScreenShown, setIsFinalScreenShown] = useState(false);
  const [stripeCheckout, toggleStripeCheckout] = useState(false);
  const [stripePaymentSubmitted, setStripePaymentSubmitted] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [CVPath, setCVPath] = useState("");
  const [userEmailForStripeMetadata, setUserEmailForStripeMetadata] =
    useState("");
  const [userPhoneForStripeMetadata, setUserPhoneForStripeMetadata] =
    useState("");
  const [isParent, setIsParent] = useState(true);
  const [isNanny, setIsNanny] = useState(false);
  const [isApplySubmenuShown, setIsApplySubmenuShown] = useState(false);

  return (
    <AppContext.Provider
      value={{
        toggleSidebar,
        setToggleSidebar,
        toggleContactFormModal,
        setToggleContactFormModal,
        toggleParentsOrNannyToggleModal,
        setToggleParentsOrNannyToggleModal,
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
        CVPath,
        setCVPath,
        userEmailForStripeMetadata,
        setUserEmailForStripeMetadata,
        userPhoneForStripeMetadata,
        setUserPhoneForStripeMetadata,
        temporaryOrPermanent,
        setTemporaryOrPermanent,
        partOrFullTime,
        setPartOrFullTime,
        liveInOrOut,
        setLiveInOrOut,
        howManyKids,
        setHowManyKids,
        isFormValid,
        setIsFormValid,
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
        stripePaymentSubmitted,
        setStripePaymentSubmitted,
        clientSecret,
        setClientSecret,
        isLoading,
        setIsLoading,
        message,
        setMessage,
        isParent,
        setIsParent,
        isNanny,
        setIsNanny,
        isApplySubmenuShown,
        setIsApplySubmenuShown
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(AppContext);
