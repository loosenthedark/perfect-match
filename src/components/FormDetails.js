import FormStepWrapper from './FormStepWrapper';

const DetailsForm = ({
  firstName,
  lastName,
  phone,
  emailNanny,
  updateFields,
}) => {
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
        Your Details
      </h3>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="tel"
          pattern="\+?[0-9]{6,20}"
          placeholder="Phone"
          value={phone}
          onChange={(e) => updateFields({ phone: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="email"
          placeholder="Email"
          value={emailNanny}
          onChange={(e) => updateFields({ emailNanny: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default DetailsForm;
