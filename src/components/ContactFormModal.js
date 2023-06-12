import { GrFormClose } from 'react-icons/gr';
import { useGlobalContext } from './Context';

const ContactFormModal = () => {
  const { toggleContactFormModal, setToggleContactFormModal } =
    useGlobalContext();
  return (
    <div
      className={
        toggleContactFormModal ? 'modal-overlay show-modal' : 'modal-overlay'
      }
    >
      <div className="modal-container">
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
          >
            {/* first name */}
            <div className="form-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
                id="firstName"
                name="firstName"
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
              />
            </div>
            {/* email */}
            <div className="form-row">
              <input
                type="email"
                placeholder="Email Address"
                className="form-input"
                id="email"
                name="email"
              />
            </div>
            {/* file upload */}
            <div className="form-row">
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
            </div>
            {/* Netlify spam filtering */}
            <div className="form-row">
              <div data-netlify-recaptcha="true"></div>
            </div>
            <input type="hidden" name="form-name" value="contactForm" />
            <button
              type="submit"
              className="btn hero-btn hero-btn__contact-form"
            >
              Find your Perfect Match!
            </button>
          </form>
          <footer className="modal-footer">
            <p className="modal-footer-text">
              By clicking the button, you are agreeing to our{' '}
              <a
                target="_blank"
                href="https://loosenthedark.tech/perfect-match-nanny-agency/terms-and-conditions/"
                rel="noreferrer"
              >
                <span>Terms and Conditions</span>
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default ContactFormModal;
