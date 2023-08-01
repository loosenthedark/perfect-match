import FormStepWrapper from './FormStepWrapper';
import ScheduleSelector from 'react-schedule-selector';

const AvailabilityForm = ({ availability, updateFields }) => {
  const renderCustomDateCell = (time, selected, innerRef) => (
    <div
      style={{
        height: '2.5vh',
        width: '100%',
        background: selected ? '#71c0d4' : '#b18bdd',
        borderRadius: '.125rem',
      }}
      ref={innerRef}
    ></div>
  );

  const renderCustomTimeLabel = (time) => (
    <div
      style={{
        lineHeight: '2.5vh',
        width: '100%',
        fontSize: '.7rem',
        paddingRight: '.5rem',
        color: '#87879d',
      }}
    >
      {time
        .toLocaleString('en-gb', {
          hour: 'numeric',
          hour12: true,
        })
        .replace('0 pm', '12 pm')
        .toLowerCase()}
    </div>
  );

  const renderCustomDateLabel = (date) => (
    <div
      style={{
        fontSize: '.75rem',
        color: '#87879d',
      }}
    >
      {date.toLocaleString('en-gb', {
        weekday: 'short',
      })}
    </div>
  );

  const handleChange = (newAvailability) => {
    updateFields({ availability: newAvailability });
  };

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-12.8vw',
        }}
      >
        Your Availability
      </h3>
      <div className="form-row" style={{ top: '-1vh' }}>
        <label
          htmlFor="available"
          className="label-q form-input"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            padding: '0 0 .75rem',
            display: 'block',
          }}
        >
          What days/hours are you available to work?
        </label>
        <ScheduleSelector
          id="available"
          selection={availability}
          startDate={new Date('01-05-2060')}
          dateFormat="ddd"
          numDays={5}
          minTime={8}
          maxTime={20}
          hourlyChunks={1}
          rowGap={'2px'}
          columnGap={'2px'}
          renderDateCell={renderCustomDateCell}
          renderTimeLabel={renderCustomTimeLabel}
          renderDateLabel={renderCustomDateLabel}
          onChange={handleChange}
        />
      </div>
    </FormStepWrapper>
  );
};
export default AvailabilityForm;
