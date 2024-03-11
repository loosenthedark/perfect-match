import { GrFormClose } from "react-icons/gr";
import { useGlobalContext } from "./Context";
import useMultiStepForm from "../hooks/useMultiStepForm";
import AddressForm from "./FormAddress";
import { useEffect, useRef, useState } from "react";
import { formParentsSteps } from "../data";
import ParentDetailsForm from "./FormDetailsParent";
import CoreRequirementsForm from "./FormRequirementsCore";
import OtherRequirementsForm from "./FormRequirementsOther";
import ChildrenForm from "./FormChildren";
import ChildDetailsForm from "./FormDetailsChild";
import AvailabilityForm from "./FormAvailability";
import AgreementForm from "./FormAgreement";

const INITIAL_FORM_DATA = {
  firstNameParent: "",
  lastNameParent: "",
  phoneParent: "",
  emailParent: "",
  address1: "",
  address2: "",
  address3: "",
  address4: "",
  numberOfChildren: 1,
  startDate: "",
  availability: [],
  otherRequirements: "",
};

const ApplicationFormParentsModal = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const updateFormFields = (fieldsBeingUpdated) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        ...fieldsBeingUpdated,
      };
    });
  };
  const {
    toggleApplicationFormParentsModal,
    setToggleApplicationFormParentsModal,
    howManyKids,
    isAgreementShown,
    isFormValid,
    setIsFormValid,
    isAgreementChecked,
    stripePaymentSubmitted,
    isFinalScreenShown,
    setIsFinalScreenShown,
    toggleStripeCheckout,
    stripeCheckout,
    setStripePaymentSubmitted,
    setHowManyKids,
    setTemporaryOrPermanent,
    setPartOrFullTime,
    setLiveInOrOut,
    setDriver,
    setOwnCar,
    setNonSmoker,
    setCooking,
    setIsAgreementChecked,
    setIsAgreementShown,
  } = useGlobalContext();

  const {
    currentStepIndex,
    // eslint-disable-next-line no-unused-vars
    setCurrentStepIndex,
    currentStep,
    goToPrev,
    goToNext,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <ParentDetailsForm {...formData} updateFields={updateFormFields} />,
    <AddressForm {...formData} updateFields={updateFormFields} />,
    <ChildrenForm {...formData} updateFields={updateFormFields} />,
    <ChildDetailsForm numberOfKids={howManyKids} />,
    <CoreRequirementsForm {...formData} updateFields={updateFormFields} />,
    <AvailabilityForm {...formData} updateFields={updateFormFields} />,
    <OtherRequirementsForm {...formData} updateFields={updateFormFields} />,
    <AgreementForm {...formData} updateFields={updateFormFields} />,
  ]);

  const formElRef = useRef();

  const handleFormReset = () => {
    setFormData(INITIAL_FORM_DATA);
    setHowManyKids(1);
    setTemporaryOrPermanent(false);
    setPartOrFullTime(false);
    setLiveInOrOut(false);
    setDriver(false);
    setOwnCar(false);
    setNonSmoker(false);
    setCooking(false);
    setIsAgreementChecked(false);
    setIsAgreementShown(false);
    setIsFinalScreenShown(false);
  };

  const handleSubmit = (event) => {
    if (!isLastStep) {
      event.preventDefault();
      goToNext();
    } else {
      if (!stripePaymentSubmitted) {
        event.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (stripePaymentSubmitted) {
      setTimeout(() => {
        formElRef.current && formElRef.current.submit();
      }, 4000);
    }
  }, [stripePaymentSubmitted]);

  useEffect(() => {
    if (toggleApplicationFormParentsModal && currentStepIndex) {
      setCurrentStepIndex(0);
      setIsFormValid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleApplicationFormParentsModal]);

  return (
    <div
      className={
        toggleApplicationFormParentsModal
          ? "modal-overlay show-modal"
          : "modal-overlay"
      }
    >
      <div
        className={
          !stripeCheckout
            ? "modal-container modal-container__application-form"
            : "modal-container modal-container__application-form modal-container__stripe"
        }
        style={{
          height: !stripeCheckout ? "66vh" : "auto",
          maxHeight: !stripeCheckout ? "none" : "96vh",
          overflowY: stripeCheckout && "auto",
        }}
      >
        {/* progress bar */}
        <ul
          className="progress-bar progress-bar__parents"
          style={{
            display: !stripeCheckout ? "flex" : "none",
          }}
        >
          {formParentsSteps.map((step) => {
            return (
              <li
                key={step.id}
                className={currentStepIndex + 1 >= step.id ? "active" : null}
              >
                {step.text}
              </li>
            );
          })}
        </ul>
        {/* end progress bar */}
        <button
          className="close-modal-btn close-modal-btn__application-form"
          onClick={() => {
            handleFormReset();
            setToggleApplicationFormParentsModal(false);
          }}
        >
          <GrFormClose />
        </button>
        <form
          action="https://formspree.io/f/xvojklzb"
          method="POST"
          className="form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          id="payment-form"
          ref={formElRef}
        >
          {currentStep}
          <div
            style={{
              marginTop: isLastStep ? "0" : "1vh",
              display:
                isLastStep && (!isAgreementShown || stripeCheckout)
                  ? "none"
                  : "flex",
              justifyContent: isLastStep
                ? "center"
                : !isFirstStep
                ? "space-between"
                : "flex-end",
              gap: ".5rem",
            }}
          >
            {!isFirstStep && !isLastStep && (
              <button
                type="button"
                className="btn hero-btn back-btn"
                onClick={goToPrev}
              >
                Go back
              </button>
            )}
            {!isLastStep ? (
              <button
                type="submit"
                className="btn hero-btn next-btn"
                style={{
                  paddingLeft: ".75rem",
                  paddingRight: ".75rem",
                  width: "calc(50% - .25rem)",
                }}
                disabled={!isFormValid}
              >
                Next step
              </button>
            ) : (
              <button
                type="submit"
                className={
                  !isFinalScreenShown
                    ? "btn hero-btn next-btn"
                    : !stripeCheckout && !stripePaymentSubmitted
                    ? "btn hero-btn next-btn btn-secondary btn-confirm btn-read-agreement btn-proceed-to-payment"
                    : "btn hero-btn next-btn"
                }
                style={{
                  opacity: !isAgreementChecked ? ".625" : 1,
                  display:
                    !stripeCheckout && stripePaymentSubmitted
                      ? "none"
                      : "inline-block",
                }}
                onClick={
                  !stripeCheckout
                    ? !isFinalScreenShown
                      ? () => setIsFinalScreenShown(true)
                      : !stripePaymentSubmitted
                      ? () => toggleStripeCheckout(true)
                      : () => console.log("Registration flow complete!")
                    : () => setStripePaymentSubmitted(true)
                }
                disabled={!isAgreementChecked || !isFormValid}
              >
                {!isFinalScreenShown
                  ? "Next step"
                  : !stripeCheckout && !stripePaymentSubmitted
                  ? "Proceed to payment"
                  : "Complete registration"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default ApplicationFormParentsModal;
