import FormStepWrapper from './FormStepWrapper';
import { nationalities } from '../data';

const EligibilityForm = ({
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
              <option
                key={index}
                selected={nationality === 'Irish'}
                value={nationality}
              >
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
              value={permit}
              type="checkbox"
              name="Work Permit?"
              onChange={(e) => updateFields({ permit: e.target.value })}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
    </FormStepWrapper>
  );
};
export default EligibilityForm;
