import { GrFormClose } from "react-icons/gr";
import { useGlobalContext } from "./Context";

const ContactFormModal = () => {
  const { toggleContactFormModal, setToggleContactFormModal } =
    useGlobalContext();
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
          height: "auto",
        }}
      >
        <h3
          className="form-heading"
          style={{
            width: "100%",
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
            className="form"
            data-netlify="true"
            data-netlify-recaptcha="true"
            encType="multipart/form-data"
            style={{
              marginBottom: "2.75vh",
            }}
          >
            {/* first name */}
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
                id="firstName"
                name="firstName"
                required
              />
            </div>
            {/* last name */}
            <div className="form-row">
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
                id="lastName"
                name="lastName"
                required
              />
            </div>
            {/* phone */}
            <div className="form-row">
              <input
                className="form-input"
                type="tel"
                pattern="\+?[0-9]{6,20}"
                placeholder="Phone"
                name="phone"
              />
            </div>
            {/* email */}
            <div className="form-row">
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                id="email"
                name="email"
                required
              />
            </div>
            {/* query */}
            <div
              className="form-row"
              style={{
                marginBottom: "5vh",
              }}
            >
              <textarea
                className="form-input"
                placeholder="Please submit your query and we will get back to you as soon as possible..."
                rows="4"
                name="query"
                required
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
              className="btn hero-btn next-btn"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                borderRadius: ".3125rem",
              }}
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
