import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';

const CVForm = ({
  firstName,
  lastName,
  phone,
  emailNanny,
  street,
  city,
  county,
  postcode,
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
      <input type="hidden" value={firstName} name="First Name:" />
      <input type="hidden" value={lastName} name="Last Name:" />
      <input type="hidden" value={phone} name="Phone Number:" />
      <input type="hidden" value={emailNanny} name="Email Address:" />
      <input type="hidden" value={street} name="Address line 1:" />
      <input type="hidden" value={city} name="Address line 2:" />
      <input type="hidden" value={county} name="Address line 3:" />
      <input type="hidden" value={postcode} name="Address line 4:" />
      <input type="hidden" value={nationality} name="Nationality:" />
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
          top: '-17vw',
        }}
      >
        Your CV
      </h3>
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
          className="form-input"
          id="cv-upload"
          type="file"
          name="CV upload:"
        />
      </div>
    </FormStepWrapper>
  );
};
export default CVForm;
