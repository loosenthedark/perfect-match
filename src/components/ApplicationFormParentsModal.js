import { GrFormClose } from 'react-icons/gr';
import { useGlobalContext } from './Context';
import useMultiStepForm from '../hooks/useMultiStepForm';
import AddressForm from './FormAddress';
// import EligibilityFormNationality from './FormEligibilityNationality';
// import EligibilityFormDriving from './FormEligibilityDriving';
// import ExperienceForm from './FormExperience';
import { useState } from 'react';
import { formParentsSteps } from '../data';
import Parent1DetailsForm from './FormDetailsParent1';
import Parent2DetailsForm from './FormDetailsParent2';
import OtherRequirementsForm from './FormRequirementsOther';
import ChildrenForm from './FormChildren';
import ChildDetailsForm from './FormDetailsChild';
// import AvailabilityForm from './FormAvailability';
// import EmployedForm from './FormEmployed';
// import CVForm from './FormCV';

const INITIAL_FORM_DATA = {
  firstNameParent1: '',
  lastNameParent1: '',
  phoneParent1: '',
  emailParent1: '',
  firstNameParent2: '',
  lastNameParent2: '',
  phoneParent2: '',
  emailParent2: '',
  address1: '',
  address2: '',
  address3: '',
  address4: '',
  numberOfChildren: 1,
  // qualificationDetails: '',
  // availability: [],
  // startDate: '',
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
    howManyKids
  } = useGlobalContext();

  const {
    currentStepIndex,
    currentStep,
    goToPrev,
    goToNext,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <Parent1DetailsForm {...formData} updateFields={updateFormFields} />,
    <Parent2DetailsForm {...formData} updateFields={updateFormFields} />,
    <AddressForm {...formData} updateFields={updateFormFields} />,
    <ChildrenForm {...formData} updateFields={updateFormFields} />,
    <ChildDetailsForm {...formData} numberOfKids={howManyKids} updateFields={updateFormFields} />,
    // <EligibilityFormDriving {...formData} updateFields={updateFormFields} />,
    // <ExperienceForm {...formData} updateFields={updateFormFields} />,
    // <AvailabilityForm {...formData} updateFields={updateFormFields} />,
    // <EmployedForm {...formData} updateFields={updateFormFields} />,
    <OtherRequirementsForm {...formData} updateFields={updateFormFields} />,
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
        toggleApplicationFormParentsModal
          ? 'modal-overlay show-modal'
          : 'modal-overlay'
      }
    >
      <div className="modal-container modal-container__application-form">
        {/* progress bar */}
        <ul className="progress-bar">
          {formParentsSteps.map((step) => {
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
export default ApplicationFormParentsModal;
