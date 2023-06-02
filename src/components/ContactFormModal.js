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
            name="contactForm"
            method="POST"
            className="form"
            data-netlify="true"
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
            <button
              type="submit"
              className="btn hero-btn hero-btn__contact-form"
            >
              Find your Perfect Match!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactFormModal;
