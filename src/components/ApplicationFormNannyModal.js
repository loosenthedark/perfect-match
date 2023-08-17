import { GrFormClose } from 'react-icons/gr';
import { useGlobalContext } from './Context';
import useMultiStepForm from '../hooks/useMultiStepForm';
import DetailsForm from './FormDetails';
import AddressForm from './FormAddress';
import EligibilityFormNationality from './FormEligibilityNationality';
import EligibilityFormDriving from './FormEligibilityDriving';
import ExperienceForm from './FormExperience';
import { useState } from 'react';
import { formNannySteps } from '../data';
import AvailabilityForm from './FormAvailability';
import EmployedForm from './FormEmployed';
import CVForm from './FormCV';

const INITIAL_FORM_DATA = {
  firstName: '',
  lastName: '',
  phone: '',
  emailNanny: '',
  address1: '',
  address2: '',
  address3: '',
  address4: '',
  nationality: 'Irish',
  qualificationDetails: '',
  availability: [],
  startDate: '',
};

const ApplicationFormNannyModal = () => {
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
    toggleApplicationFormNannyModal,
    setToggleApplicationFormNannyModal,
  } = useGlobalContext();

  const {
    currentStepIndex,
    currentStep,
    goToPrev,
    goToNext,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <DetailsForm {...formData} updateFields={updateFormFields} />,
    <AddressForm {...formData} updateFields={updateFormFields} />,
    <EligibilityFormNationality
      {...formData}
      updateFields={updateFormFields}
    />,
    <EligibilityFormDriving {...formData} updateFields={updateFormFields} />,
    <ExperienceForm {...formData} updateFields={updateFormFields} />,
    <AvailabilityForm {...formData} updateFields={updateFormFields} />,
    <EmployedForm {...formData} updateFields={updateFormFields} />,
    <CVForm {...formData} updateFields={updateFormFields} />,
  ]);

  const handleSubmit = (event) => {
    if (!isLastStep) {
      event.preventDefault();
      goToNext();
    }
  };

  return (
    <div
      className={
        toggleApplicationFormNannyModal
          ? 'modal-overlay show-modal'
          : 'modal-overlay'
      }
    >
      <div className="modal-container modal-container__application-form">
        {/* progress bar */}
        <ul className="progress-bar">
          {formNannySteps.map((step) => {
            return (
              <li
                key={step.id}
                className={currentStepIndex + 1 >= step.id ? 'active' : null}
              >
                {step.text}
              </li>
            );
          })}
        </ul>
        {/* end progress bar */}
        <button
          className="close-modal-btn close-modal-btn__application-form"
          onClick={() => setToggleApplicationFormNannyModal(false)}
        >
          <GrFormClose />
        </button>
        <form
          action="https://formspree.io/f/xnqkajby"
          method="POST"
          className="form"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {currentStep}
          <div
            style={{
              marginTop: '1vh',
              display: 'flex',
              gap: '.5rem',
              justifyContent: 'flex-end',
            }}
          >
            {!isFirstStep && (
              <button
                type="button"
                className="btn hero-btn back-btn"
                onClick={goToPrev}
              >
                Go back
              </button>
            )}
            <button type="submit" className="btn hero-btn next-btn">
              {isLastStep ? 'Submit form' : 'Next step'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ApplicationFormNannyModal;
