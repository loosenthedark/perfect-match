import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';

const ExperienceForm = ({ qualificationDetails, updateFields }) => {
  const {
    experienceChecked,
    setExperienceChecked,
    qualificationsChecked,
    setQualificationsChecked,
  } = useGlobalContext();

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-5vh',
          fontSize: '1.125rem',
          lineHeight: '1.5',
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
            display: 'block',
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
            paddingTop: 'unset',
            paddingLeft: 'unset',
            paddingRight: 'unset',
            display: 'block',
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
          value={qualificationDetails}
          onChange={(e) =>
            updateFields({ qualificationDetails: e.target.value })
          }
        ></textarea>
      </div>
    </FormStepWrapper>
  );
};
export default ExperienceForm;
