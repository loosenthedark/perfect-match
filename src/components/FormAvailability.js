import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';
import { useState } from 'react';

const AvailabilityForm = ({
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
  updateFields,
}) => {
  const {
    permitChecked,
    licenceChecked,
    carChecked,
    experienceChecked,
    qualificationsChecked,
    employedChecked,
    setEmployedChecked,
  } = useGlobalContext();

  const [startDate, setStartDate] = useState('');

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

      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-12.8vw',
        }}
      >
        Your Availability
      </h3>
      <div className="form-row">
        <label
          htmlFor="availability"
          className="label-q form-input"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            paddingLeft: 'unset',
            paddingRight: 'unset',
            paddingBottom: '.25rem',
            display: 'block',
          }}
        >
          What days/hours are you available to work?
        </label>
        <input
          required
          className="form-input"
          id="availability"
          type="text"
          name="Availability:"
          placeholder="Please submit your availability..."
          value={availability}
          onChange={(e) => updateFields({ availability: e.target.value })}
        />
      </div>
      <div className="form-row">
        <div className="label-q">
          <span
            className="label-q form-input"
            style={{
              borderRadius: 'unset',
              border: 'unset',
              paddingTop: 'unset',
              paddingLeft: 'unset',
              paddingRight: 'unset',
              display: 'block',
            }}
          >
            Are you currently employed?
          </span>
        </div>
        <div
          className="slider-wrapper"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <span style={{ textAlign: 'right' }}>NO</span>
          <label htmlFor="employed" className="switch">
            <input
              checked={employedChecked}
              id="employed"
              type="checkbox"
              onChange={(e) => setEmployedChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
        <input
          type="hidden"
          value={employedChecked ? 'Yes' : 'No'}
          name="Currently employed?"
        />
      </div>
      <div className="form-row">
        <label
          htmlFor="start-date"
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
          If yes, what is your earliest available start date?
        </label>
        <input
          className="form-input"
          id="start-date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="hidden"
          value={formatDateString(startDate)}
          name="Earliest available start date:"
        />
      </div>
    </FormStepWrapper>
  );
};
export default AvailabilityForm;
