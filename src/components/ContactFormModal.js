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
        <h3>contact form content goes here!</h3>
        <button
          className="close-modal-btn"
          onClick={() => setToggleContactFormModal(false)}
        >
          <GrFormClose />
        </button>
      </div>
    </div>
  );
};
export default ContactFormModal;
