import FormStepWrapper from './FormStepWrapper';

const ParentDetailsForm = ({
  firstNameParent,
  lastNameParent,
  phoneParent,
  emailParent,
  updateFields,
}) => {
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
        Your Details
      </h3>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="First Name"
          value={firstNameParent}
          onChange={(e) => updateFields({ firstNameParent: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Last Name"
          value={lastNameParent}
          onChange={(e) => updateFields({ lastNameParent: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="tel"
          pattern="\+?[0-9]{6,20}"
          placeholder="Phone"
          value={phoneParent}
          onChange={(e) => updateFields({ phoneParent: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="email"
          placeholder="Email"
          value={emailParent}
          onChange={(e) => updateFields({ emailParent: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default ParentDetailsForm;
