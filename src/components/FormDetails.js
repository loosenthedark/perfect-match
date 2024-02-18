/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useGlobalContext } from "./Context";
import FormStepWrapper from "./FormStepWrapper";

const DetailsForm = ({
  firstName,
  lastName,
  phone,
  emailNanny,
  updateFields,
}) => {
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isEmailNannyValid, setIsEmailNannyValid] = useState(false);
  const { setIsFormValid } = useGlobalContext();

  const handleFirstNameChange = (event) => {
    setIsFirstNameValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value) &&
        lastName.length > 1 &&
        lastName.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(lastName) &&
        /^\+?[0-9]{6,20}$/.test(phone) &&
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailNanny)
    );
    updateFields({ firstName: event.target.value });
  };

  const handleLastNameChange = (event) => {
    setIsLastNameValid(
      event.target.value.length > 1 &&
        event.target.value.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value) &&
        firstName.length > 1 &&
        firstName.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(firstName) &&
        /^\+?[0-9]{6,20}$/.test(phone) &&
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailNanny)
    );
    updateFields({ lastName: event.target.value });
  };

  const handlePhoneChange = (event) => {
    setIsPhoneValid(/^\+?[0-9]{6,20}$/.test(event.target.value));
    setIsFormValid(
      /^\+?[0-9]{6,20}$/.test(event.target.value) &&
        firstName.length > 1 &&
        firstName.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(firstName) &&
        lastName.length > 1 &&
        lastName.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(lastName) &&
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailNanny)
    );
    updateFields({ phone: event.target.value });
  };

  const handleEmailNannyChange = (event) => {
    setIsEmailNannyValid(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(event.target.value)
    );
    setIsFormValid(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        event.target.value
      ) &&
        firstName.length > 1 &&
        firstName.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(firstName) &&
        lastName.length > 1 &&
        lastName.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(lastName) &&
        /^\+?[0-9]{6,20}$/.test(phone)
    );
    updateFields({ emailNanny: event.target.value });
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
          value={firstName}
          minLength={2}
          maxLength={30}
          onChange={handleFirstNameChange}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          minLength={2}
          maxLength={50}
          onChange={handleLastNameChange}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="tel"
          pattern="\+?[0-9]{6,20}"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="email"
          placeholder="Email"
          value={emailNanny}
          onChange={handleEmailNannyChange}
        />
      </div>
    </FormStepWrapper>
  );
};
export default DetailsForm;
