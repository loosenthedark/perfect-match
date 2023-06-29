import FormStepWrapper from './FormStepWrapper';
import { nationalities } from '../data';
import { useState } from 'react';

const EligibilityFormDriving = ({
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
  const [licenceChecked, setLicenceChecked] = useState(false);
  const [carChecked, setCarChecked] = useState(false);

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
              paddingLeft: '.75rem',
            }}
          >
            Do you hold a valid Irish driving licence?
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
              checked={licenceChecked}
              type="checkbox"
              onChange={(e) => setLicenceChecked(e.target.checked)}
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
              paddingLeft: '.75rem',
            }}
          >
            Do you own or have regular access to a car?
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
              checked={carChecked}
              type="checkbox"
              onChange={(e) => setCarChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
    </FormStepWrapper>
  );
};
export default EligibilityFormDriving;
