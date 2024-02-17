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
    isAgreementChecked,
    stripePaymentSubmitted,
    isFinalScreenShown,
    setIsFinalScreenShown,
    toggleStripeCheckout,
    stripeCheckout,
    setStripePaymentSubmitted,
  } = useGlobalContext();

  const {
    currentStepIndex,
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

  const handleSubmit = (event) => {
    if (!isLastStep) {
      event.preventDefault();
      goToNext();
    } else {
      if (!stripePaymentSubmitted) {
        console.log("BANANAS!");
        event.preventDefault();
      }
      if (isFinalScreenShown) {
        console.log("PANCAKES!");
      }
    }
  };

  useEffect(() => {
    if (stripePaymentSubmitted) {
      console.log("BACON!");
      setTimeout(() => {
        formElRef.current && formElRef.current.submit();
      }, 4000);
    }
  }, [stripePaymentSubmitted]);

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
          maxHeight: !stripeCheckout ? "39rem" : "unset",
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
          onClick={() => setToggleApplicationFormParentsModal(false)}
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
              justifyContent: !isFirstStep ? "center" : "flex-end",
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
                className="btn hero-btn next-btn"
                style={{
                  paddingLeft: "1.375rem",
                  paddingRight: "1.375rem",
                  width: "13rem",
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
