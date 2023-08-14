import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';

const EmployedForm = ({ startDate, updateFields }) => {
  const {
    employedChecked,
    setEmployedChecked,
  } = useGlobalContext();

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-5.8vh',
        }}
      >
        Your Availability
      </h3>
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
          onChange={(e) => updateFields({ startDate: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default EmployedForm;
