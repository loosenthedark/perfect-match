import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';

const PregnantOrPetsForm = ({ petDetails, dueDate, updateFields }) => {
  const { pregnantChecked, setPregnantChecked, petsChecked, setPetsChecked } =
    useGlobalContext();

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
         
          lineHeight: '1.5',
        }}
      >
        Additional Details
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
            Are you currently expecting a child?
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
          <label htmlFor="pregnant" className="switch">
            <input
              checked={pregnantChecked}
              id="pregnant"
              type="checkbox"
              onChange={(e) => setPregnantChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <div className="form-row">
        <input
          className="form-input"
          placeholder="If yes, what is your due date?"
          value={dueDate}
          onFocus={(e) => (e.target.type = 'date')}
          onChange={(e) => updateFields({ dueDate: e.target.value })}
        />
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
          Do you own any pets?
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
          <label htmlFor="pets" className="switch">
            <input
              checked={petsChecked}
              id="pets"
              type="checkbox"
              onChange={(e) => setPetsChecked(e.target.checked)}
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
          value={petDetails}
          onChange={(e) => updateFields({ petDetails: e.target.value })}
        ></textarea>
      </div>
    </FormStepWrapper>
  );
};
export default PregnantOrPetsForm;
