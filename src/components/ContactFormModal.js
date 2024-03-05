/* eslint-disable no-unused-vars */
import { GrFormClose } from "react-icons/gr";
import { useGlobalContext } from "./Context";
import { useState } from "react";

const INITIAL_FORM_DATA = {
  firstNameContact: "",
  lastNameContact: "",
  phoneContact: "",
  emailContact: "",
  queryContact: "",
};

const ContactFormModal = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const updateFormFields = (fieldsBeingUpdated) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        ...fieldsBeingUpdated,
      };
    });
  };

  const [isFirstNameContactValid, setIsFirstNameContactValid] = useState(false);
  const [isLastNameContactValid, setIsLastNameContactValid] = useState(false);
  const [isPhoneContactValid, setIsPhoneContactValid] = useState(false);
  const [isEmailContactValid, setIsEmailContactValid] = useState(false);
  const [isQueryContactValid, setIsQueryContactValid] = useState(false);

  const {
    toggleContactFormModal,
    setToggleContactFormModal,
    isFormValid,
    setIsFormValid,
  } = useGlobalContext();

  const handleFirstNameContactChange = (event) => {
    setIsFirstNameContactValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value) &&
        formData.lastNameContact.length > 1 &&
        formData.lastNameContact.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(formData.lastNameContact) &&
        /^\+?[0-9]{6,20}$/.test(formData.phoneContact) &&
        /^[a-zA-ZÀ-ú0-9._-]+@[a-zA-ZÀ-ú0-9.-]+\.[a-zA-Z]{2,4}$/.test(
          formData.emailContact
        ) &&
        formData.queryContact.length > 2 &&
        formData.queryContact.length < 3001 &&
        /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(formData.queryContact)
    );
    updateFormFields({ firstNameContact: event.target.value });
  };

  const handleLastNameContactChange = (event) => {
    setIsLastNameContactValid(
      event.target.value.length > 1 &&
        event.target.value.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value) &&
        formData.firstNameContact.length > 1 &&
        formData.firstNameContact.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(formData.firstNameContact) &&
        /^\+?[0-9]{6,20}$/.test(formData.phoneContact) &&
        /^[a-zA-ZÀ-ú0-9._-]+@[a-zA-ZÀ-ú0-9.-]+\.[a-zA-ZÀ-ú]{2,4}$/.test(
          formData.emailContact
        ) &&
        formData.queryContact.length > 2 &&
        formData.queryContact.length < 3001 &&
        /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(formData.queryContact)
    );
    updateFormFields({ lastNameContact: event.target.value });
  };

  const handlePhoneContactChange = (event) => {
    setIsPhoneContactValid(/^\+?[0-9]{6,20}$/.test(event.target.value));
    setIsFormValid(
      /^\+?[0-9]{6,20}$/.test(event.target.value) &&
        formData.firstNameContact.length > 1 &&
        formData.firstNameContact.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(formData.firstNameContact) &&
        formData.lastNameContact.length > 1 &&
        formData.lastNameContact.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(formData.lastNameContact) &&
        /^[a-zA-ZÀ-ú0-9._-]+@[a-zA-ZÀ-ú0-9.-]+\.[a-zA-ZÀ-ú]{2,4}$/.test(
          formData.emailContact
        ) &&
        formData.queryContact.length > 2 &&
        formData.queryContact.length < 3001 &&
        /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(formData.queryContact)
    );
    updateFormFields({ phoneContact: event.target.value });
  };

  const handleEmailContactChange = (event) => {
    setIsEmailContactValid(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(event.target.value)
    );
    setIsFormValid(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
        event.target.value
      ) &&
        formData.firstNameContact.length > 1 &&
        formData.firstNameContact.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(formData.firstNameContact) &&
        formData.lastNameContact.length > 1 &&
        formData.lastNameContact.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(formData.lastNameContact) &&
        /^\+?[0-9]{6,20}$/.test(formData.phoneContact) &&
        formData.queryContact.length > 2 &&
        formData.queryContact.length < 3001 &&
        /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(formData.queryContact)
    );
    updateFormFields({ emailContact: event.target.value });
  };

  const handleQueryContactChange = (event) => {
    setIsQueryContactValid(
      event.target.value.length > 2 &&
        event.target.value.length < 3001 &&
        /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 2 &&
        event.target.value.length < 3001 &&
        /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(event.target.value) &&
        formData.firstNameContact.length > 1 &&
        formData.firstNameContact.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(formData.firstNameContact) &&
        formData.lastNameContact.length > 1 &&
        formData.lastNameContact.length < 51 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(formData.lastNameContact) &&
        /^\+?[0-9]{6,20}$/.test(formData.phoneContact) &&
        /^[a-zA-ZÀ-ú0-9._-]+@[a-zA-ZÀ-ú0-9.-]+\.[a-zA-ZÀ-ú]{2,4}$/.test(
          formData.emailContact
        )
    );
    updateFormFields({ queryContact: event.target.value });
  };

  return (
    <div
      className={
        toggleContactFormModal ? "modal-overlay show-modal" : "modal-overlay"
      }
    >
      <div
        className="modal-container modal-container__application-form"
        style={{
          top: "1.875rem",
          height: "unset",
          maxHeight: "unset",
          gridTemplateColumns: "unset",
          paddingLeft: "unset",
        }}
      >
        <h3
          className="form-heading"
          style={{
            lineHeight: "1.5",
            marginTop: "1rem",
            marginBottom: "0",
          }}
        >
          Contact us
        </h3>
        <button
          className="close-modal-btn"
          onClick={() => setToggleContactFormModal(false)}
        >
          <GrFormClose />
        </button>
        <div>
          <form
            form-name="contactForm"
            method="POST"
            className="form form__contact"
            data-netlify="true"
            data-netlify-recaptcha="true"
            encType="multipart/form-data"
            style={{
              marginBottom: "3vh",
              marginTop: "1vh",
            }}
          >
            {/* first name */}
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
                id="firstName"
                name="First Name:"
                required
                value={formData.firstNameContact}
                minLength={2}
                maxLength={30}
                onChange={handleFirstNameContactChange}
              />
            </div>
            {/* last name */}
            <div className="form-row">
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
                id="lastName"
                name="Last Name:"
                required
                value={formData.lastNameContact}
                minLength={2}
                maxLength={50}
                onChange={handleLastNameContactChange}
              />
            </div>
            {/* phone */}
            <div className="form-row">
              <input
                className="form-input"
                type="tel"
                pattern="\+?[0-9]{6,20}"
                placeholder="Phone"
                name="Phone:"
                value={formData.phoneContact}
                onChange={handlePhoneContactChange}
              />
            </div>
            {/* email */}
            <div className="form-row">
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                id="email"
                name="Email:"
                required
                value={formData.emailContact}
                onChange={handleEmailContactChange}
              />
            </div>
            {/* query */}
            <div className="form-row">
              <textarea
                className="form-input"
                style={{
                  lineHeight: "1.6",
                  resize: "none",
                }}
                placeholder="Please submit your query and we will get back to you as soon as possible..."
                rows="4"
                name="Query:"
                required
                maxLength={3000}
                value={formData.queryContact}
                onChange={handleQueryContactChange}
              ></textarea>
            </div>
            {/* file upload */}
            {/* <div className="form-row">
              <label htmlFor="upload" className="btn form-label">
                Upload CV
              </label>
              <input
                type="file"
                placeholder="Upload file"
                className="form-input"
                id="upload"
                name="upload"
              />
            </div> */}
            {/* Netlify spam filtering */}
            <div className="form-row">
              <div data-netlify-recaptcha="true"></div>
            </div>
            <input type="hidden" name="form-name" value="contactForm" />
            <button
              type="submit"
              className="btn hero-btn next-btn submit-btn"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                borderRadius: ".3125rem",
              }}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
          {/* <footer className="modal-footer">
            <p className="modal-footer-text">
              By clicking this button, you are agreeing to our{" "}
              <a
                target="_blank"
                href="https://loosenthedark.tech/perfect-match-nanny-agency/terms-and-conditions/"
                rel="noreferrer"
              >
                <span
                  style={{
                    color: "#ffb3d0",
                    fontWeight: "500",
                  }}
                >
                  Terms and Conditions
                </span>
              </a>
            </p>
          </footer> */}
        </div>
      </div>
    </div>
  );
};
export default ContactFormModal;
