import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';
// import logoBackground from '../images/perfect-match-logo_square_no-text.png';

const OtherRequirementsForm = ({
  firstNameParent1,
  lastNameParent1,
  phoneParent1,
  emailParent1,
  firstNameParent2,
  lastNameParent2,
  phoneParent2,
  emailParent2,
  address1,
  address2,
  address3,
  address4,
  numberOfChildren,
}) => {
  const { inputFieldsChildren } = useGlobalContext();

  const formatDateString = (dateString) => {
    const dateArray = dateString.split('-');
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  };

  return (
    <FormStepWrapper>
      <input
        type="hidden"
        value={firstNameParent1 + ' ' + lastNameParent1}
        name="Parent #1 name:"
      />
      <input
        type="hidden"
        value={phoneParent1}
        name="Parent #1 phone number:"
      />
      <input
        type="hidden"
        value={emailParent1}
        name="Parent #1 email address:"
      />
      <input
        type="hidden"
        value={firstNameParent2 + ' ' + lastNameParent2}
        name="Parent #2 name:"
      />
      <input
        type="hidden"
        value={phoneParent2}
        name="Parent #2 phone number:"
      />
      <input
        type="hidden"
        value={emailParent2}
        name="Parent #2 email address:"
      />
      <input
        type="hidden"
        value={
          address1 + ',\n' + address2 + ',\n' + address3 + ',\n' + address4
        }
        name="Address:"
      />
      <input type="hidden" value={numberOfChildren} name="How many children?" />
      {inputFieldsChildren.map((inputGroup, index) => {
        return (
          <div key={index} className="current-child-wrapper">
            <input
              type="hidden"
              value={inputGroup.nameChild}
              name={'Child #' + (index + 1) + ' name:'}
            />
            <input
              type="hidden"
              value={formatDateString(inputGroup.dobChild)}
              name={'Child #' + (index + 1) + ' date of birth:'}
            />
            <input
              type="hidden"
              value={inputGroup.schoolLocationChild}
              name={'Child #' + (index + 1) + ' school/Montessori location:'}
            />
          </div>
        );
      })}
      {/* <input type="hidden" value={nationality} name="Nationality:" />
      <input
        type="hidden"
        value={permitChecked ? 'Yes' : 'No'}
        name="Work Permit?"
      />
      <input
        type="hidden"
        value={licenceChecked ? 'Yes' : 'No'}
        name="Driving Licence?"
      />
      <input type="hidden" value={carChecked ? 'Yes' : 'No'} name="Car?" />
      <input
        type="hidden"
        value={experienceChecked ? 'Yes' : 'No'}
        name="Childcare experience?"
      />
      <input
        type="hidden"
        value={qualificationsChecked ? 'Yes' : 'No'}
        name="Formal childcare qualifications?"
      />
      <input
        type="hidden"
        value={qualificationDetails}
        name="Details of formal childcare qualifications:"
      />
      <input
        type="hidden"
        value={availability
          .map((timePeriod) =>
            timePeriod
              .toLocaleDateString('en-gb', {
                weekday: 'long',
                hour: 'numeric',
                hour12: true,
              })
              .replace(', ', ' @ ')
              .replace('0 pm', '12 pm')
          )
          .join('\n')}
        name="Availability:"
      />
      <input
        type="hidden"
        value={employedChecked ? 'Yes' : 'No'}
        name="Currently employed?"
      /> */}

      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-5vh',
          fontSize: '1.125rem',
        }}
      >
        Other Requirements
      </h3>
      {/* <div
        style={{
          height: '17.5vh',
          width: '17.5vh',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2vh',
          backgroundImage: 'url(' + logoBackground + ')',
          backgroundSize: 'cover',
        }}
      ></div>
      <div className="form-row">
        <label
          htmlFor="cv-upload"
          className="label-q form-input"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            paddingTop: 'unset',
            paddingLeft: 'unset',
            paddingRight: 'unset',
            paddingBottom: '.25rem',
            display: 'block',
          }}
        >
          Please upload a copy of your CV:
        </label>
        <input
          required
          className="form-input"
          id="cv-upload"
          type="file"
          name="CV upload:"
        />
      </div>
      <p
        className="modal-footer-text modal-footer-text__application-form"
        style={{
          marginTop: '1vh',
          marginLeft: '4%',
          marginRight: '4%',
        }}
      >
        By submitting this form, you are agreeing to our{' '}
        <a
          target="_blank"
          href="https://loosenthedark.tech/perfect-match-nanny-agency/terms-and-conditions/"
          rel="noreferrer"
        >
          <span>Terms and Conditions</span>
        </a>
      </p> */}
    </FormStepWrapper>
  );
};
export default OtherRequirementsForm;
