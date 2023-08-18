import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';

const CoreRequirementsForm = ({ startDate, updateFields }) => {
  const {
    temporaryOrPermanent,
    setTemporaryOrPermanent,
    partOrFullTime,
    setPartOrFullTime,
    liveInOrOut,
    setLiveInOrOut,
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
        Core Requirements
      </h3>
      <div className="form-row" style={{ marginBottom: '1.5rem' }}>
        <div
          className="slider-wrapper"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <span style={{ textAlign: 'right', width: '6.125rem' }}>
            TEMPORARY
          </span>
          <label htmlFor="tempOrPerm" className="switch">
            <input
              checked={temporaryOrPermanent}
              id="tempOrPerm"
              type="checkbox"
              onChange={(e) => setTemporaryOrPermanent(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span style={{ textAlign: 'left', width: '6.125rem' }}>
            PERMANENT
          </span>
        </div>
      </div>
      <div className="form-row" style={{ marginBottom: '1.5rem' }}>
        <div
          className="slider-wrapper"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <span style={{ textAlign: 'right', width: '6.125rem' }}>
            PART-TIME
          </span>
          <label htmlFor="ptOrFt" className="switch">
            <input
              checked={partOrFullTime}
              id="ptOrFt"
              type="checkbox"
              onChange={(e) => setPartOrFullTime(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span style={{ textAlign: 'left', width: '6.125rem' }}>
            FULL-TIME
          </span>
        </div>
      </div>
      <div className="form-row" style={{ marginBottom: '1.5rem' }}>
        <div
          className="slider-wrapper"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.5rem',
          }}
        >
          <span style={{ textAlign: 'right', width: '6.125rem' }}>
            LIVE OUT
          </span>
          <label htmlFor="liveInOrOut" className="switch">
            <input
              checked={liveInOrOut}
              id="liveInOrOut"
              type="checkbox"
              onChange={(e) => setLiveInOrOut(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span style={{ textAlign: 'left', width: '6.125rem' }}>LIVE IN</span>
        </div>
      </div>
      <div className="form-row">
        <input
          className="form-input"
          placeholder="What is your preferred start date?"
          value={startDate}
          onFocus={(e) => (e.target.type = 'date')}
          onChange={(e) => updateFields({ startDate: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default CoreRequirementsForm;
