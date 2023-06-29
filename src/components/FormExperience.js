import FormStepWrapper from './FormStepWrapper';
import { nationalities } from '../data';
import { useState } from 'react';

const ExperienceForm = ({
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
        Your Experience
      </h3>
      <div className="form-row">
        <span
          className="label-q form-input"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            paddingLeft: 'unset',
            paddingRight: 'unset',
          }}
        >
          Do you have previous experience in childcare?
        </span>
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
          <label htmlFor="experience" className="switch">
            <input
              checked={experienceChecked}
              id="experience"
              type="checkbox"
              onChange={(e) => setExperienceChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <div className="form-row">
        <span
          className="label-q form-input"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            paddingLeft: 'unset',
            paddingRight: 'unset',
          }}
        >
          Do you hold any formal childcare qualifications?
        </span>
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
          <label htmlFor="qualifications" className="switch">
            <input
              checked={qualificationsChecked}
              id="qualifications"
              type="checkbox"
              onChange={(e) => setQualificationsChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <div className="form-row">
        <textarea
          className="form-input"
          placeholder="If yes, please provide details..."
          rows="3"
        ></textarea>
      </div>
    </FormStepWrapper>
  );
};
export default ExperienceForm;
