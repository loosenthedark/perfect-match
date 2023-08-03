import FormStepWrapper from './FormStepWrapper';
import { nationalities } from '../data';
import { useGlobalContext } from './Context';

const EligibilityFormNationality = ({ nationality, updateFields }) => {
  const { permitChecked, setPermitChecked } = useGlobalContext();

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-17vw',
        }}
      >
        Your Eligibility
      </h3>
      <div
        className="form-row"
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: '2rem',
        }}
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
          What is your nationality?
        </label>
        <select
          value={nationality}
          className="form-input form-input__select"
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
      <div className="form-row" style={{ marginBottom: '3rem' }}>
        <span
          className="label-q form-input"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            paddingLeft: 'unset',
            paddingRight: 'unset',
            display: 'block',
          }}
        >
          Do you hold an Irish work permit?
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
          <label htmlFor="permit" className="switch">
            <input
              checked={permitChecked}
              id="permit"
              type="checkbox"
              onChange={(e) => setPermitChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
    </FormStepWrapper>
  );
};
export default EligibilityFormNationality;
