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

      <div className="form-row">
        <div className="label-q">
          <h6
            className="form-input"
            style={{
              borderRadius: 'unset',
              border: 'unset',
              paddingLeft: 'unset',
              paddingRight: 'unset',
              fontSize: '.775rem',
            }}
          >
            Do you have previous experience in childcare?
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
              checked={experienceChecked}
              type="checkbox"
              onChange={(e) => setExperienceChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
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
              fontSize: '.775rem',
            }}
          >
            Do you hold any formal childcare qualifications?
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
        {/* <input
          required
          className="form-input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        /> */}
        <textarea
          className="form-input"
          placeholder="If yes, please provide details..."
        ></textarea>
      </div>
    </FormStepWrapper>
  );
};
export default ExperienceForm;
