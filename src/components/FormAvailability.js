import FormStepWrapper from './FormStepWrapper';
import { nationalities } from '../data';
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
  updateFields,
}) => {
  const [experienceChecked, setExperienceChecked] = useState(false);
  const [qualificationsChecked, setQualificationsChecked] = useState(false);

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

      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '0',
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
          }}
        >
          What days/hours are you available to work?
        </label>
        <input
          required
          className="form-input"
          id="availability"
          type="text"
          placeholder="Please submit your availability..."
        />
      </div>
      <div className="form-row">
        <div className="label-q">
          <h6
            className="form-input"
            style={{
              borderRadius: 'unset',
              border: 'unset',
              paddingLeft: 'unset',
              paddingRight: 'unset',
            }}
          >
            Are you currently employed?
          </h6>
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
          <label className="switch">
            <input
              checked={qualificationsChecked}
              type="checkbox"
              onChange={(e) => setQualificationsChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <div className="form-row">
        <label
          htmlFor="start-date"
          className="label-q form-input"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            paddingLeft: 'unset',
            paddingRight: 'unset',
          }}
        >
          If yes, what is your earliest available start date?
        </label>
        <input
          required
          className="form-input"
          id="start-date"
          type="date"
          placeholder="Please indicate a prospective start date..."
        />
      </div>
    </FormStepWrapper>
  );
};
export default AvailabilityForm;
