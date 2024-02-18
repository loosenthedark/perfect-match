/* eslint-disable no-unused-vars */
import { useState } from "react";
import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";

const ParentDetailsForm = ({
  firstNameParent,
  lastNameParent,
  phoneParent,
  emailParent,
  updateFields,
}) => {
  const [isFirstNameParentValid, setIsFirstNameParentValid] = useState(false);
  const [isLastNameParentValid, setIsLastNameParentValid] = useState(false);
  const [isPhoneParentValid, setIsPhoneParentValid] = useState(false);
  const [isEmailParentValid, setIsEmailParentValid] = useState(false);
  const { setIsFormValid, setUserPhoneForStripeMetadata, setUserEmailForStripeMetadata } = useGlobalContext();

  const handleFirstNameParentChange = (event) => {
    setIsFirstNameParentValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value) &&
        lastNameParent.length > 1 &&
        lastNameParent.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(lastNameParent) &&
        /^\+?[0-9]{6,20}$/.test(phoneParent) &&
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailParent)
    );
    updateFields({ firstNameParent: event.target.value });
  };

  const handleLastNameParentChange = (event) => {
    setIsLastNameParentValid(
      event.target.value.length > 1 &&
        event.target.value.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value) &&
        firstNameParent.length > 1 &&
        firstNameParent.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(firstNameParent) &&
        /^\+?[0-9]{6,20}$/.test(phoneParent) &&
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailParent)
    );
    updateFields({ lastNameParent: event.target.value });
  };

  const handlePhoneParentChange = (event) => {
    setIsPhoneParentValid(/^\+?[0-9]{6,20}$/.test(event.target.value));
    setIsFormValid(
      /^\+?[0-9]{6,20}$/.test(event.target.value) &&
        firstNameParent.length > 1 &&
        firstNameParent.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(firstNameParent) &&
        lastNameParent.length > 1 &&
        lastNameParent.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(lastNameParent) &&
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailParent)
    );
    updateFields({ phoneParent: event.target.value });
    setUserPhoneForStripeMetadata(event.target.value);
  };

  const handleEmailParentChange = (event) => {
    setIsEmailParentValid(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(event.target.value)
    );
    setIsFormValid(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        event.target.value
      ) &&
        firstNameParent.length > 1 &&
        firstNameParent.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(firstNameParent) &&
        lastNameParent.length > 1 &&
        lastNameParent.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(lastNameParent) &&
        /^\+?[0-9]{6,20}$/.test(phoneParent)
    );
    updateFields({ emailParent: event.target.value });
    setUserEmailForStripeMetadata(event.target.value);
  };

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: "absolute",
          width: "100%",
          lineHeight: "1.5",
        }}
      >
        Your Details
      </h3>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="First Name"
          value={firstNameParent}
          minLength={2}
          maxLength={30}
          onChange={handleFirstNameParentChange}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Last Name"
          value={lastNameParent}
          minLength={2}
          maxLength={50}
          onChange={handleLastNameParentChange}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="tel"
          pattern="\+?[0-9]{6,20}"
          placeholder="Phone"
          value={phoneParent}
          onChange={handlePhoneParentChange}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="email"
          placeholder="Email"
          value={emailParent}
          onChange={handleEmailParentChange}
        />
      </div>
    </FormStepWrapper>
  );
};
export default ParentDetailsForm;
