import FormStepWrapper from './FormStepWrapper';
import { nationalities } from '../data';
import { useState } from 'react';

const EligibilityFormNationality = ({
  firstName,
  lastName,
  phone,
  emailNanny,
  street,
  city,
  county,
  postcode,
  permit,
  nationality,
  updateFields,
}) => {
  const [permitChecked, setPermitChecked] = useState(false);

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
        Your Eligibility
      </h3>
      <div
        className="form-row"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <label
          className="form-input"
          htmlFor="nationality"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            marginBottom: '.125rem',
            paddingLeft: '.75rem',
          }}
        >
          Nationality
        </label>
        <select
          value={nationality}
          className="form-input form-input__select"
          name="Nationality:"
          id="nationality"
          onChange={(e) => updateFields({ nationality: e.target.value })}
        >
          {nationalities.map((nationality, index) => {
            return (
              <option key={index} value={nationality}>
                {nationality}
              </option>
            );
          })}
        </select>
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
            Do you hold an Irish work permit?
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
              checked={permitChecked}
              type="checkbox"
              onChange={(e) => setPermitChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <input
        type="hidden"
        value={permitChecked ? 'Yes' : 'No'}
        name="Work Permit?"
      />
    </FormStepWrapper>
  );
};
export default EligibilityFormNationality;
