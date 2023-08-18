import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';
import logoBackground from '../images/perfect-match-logo_square_no-text.png';

const CVForm = ({
  firstName,
  lastName,
  phone,
  emailNanny,
  address1,
  address2,
  address3,
  address4,
  nationality,
  qualificationDetails,
  availability,
  startDate,
}) => {
  const {
    permitChecked,
    licenceChecked,
    carChecked,
    experienceChecked,
    qualificationsChecked,
    employedChecked,
  } = useGlobalContext();

  const formatDateString = (dateString) => {
    const dateArray = dateString.split('-');
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  };

  return (
    <FormStepWrapper>
      <input type="hidden" value={firstName + ' ' + lastName} name="Name:" />
      <input type="hidden" value={phone} name="Phone:" />
      <input type="hidden" value={emailNanny} name="Email:" />
      <input
        type="hidden"
        value={
          address1 + ',\n' + address2 + ',\n' + address3 + ',\n' + address4
        }
        name="Address:"
      />
      <input type="hidden" value={nationality} name="Nationality:" />
      <input
        type="hidden"
        value={permitChecked ? 'Yes' : 'No'}
        name="Work permit?"
      />
      <input
        type="hidden"
        value={licenceChecked ? 'Yes' : 'No'}
        name="Driving licence?"
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
              .replace(' am', 'am')
              .replace(' pm', 'pm')
          )
          .join('\n')}
        name="Availability:"
      />
      <input
        type="hidden"
        value={employedChecked ? 'Yes' : 'No'}
        name="Currently employed?"
      />
      <input
        type="hidden"
        value={formatDateString(startDate)}
        name="Earliest available start date:"
      />

      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-5vh',
          fontSize: '1.125rem',
          lineHeight: '1.5',
        }}
      >
        Your CV
      </h3>
      <div
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
      </p>
    </FormStepWrapper>
  );
};
export default CVForm;
