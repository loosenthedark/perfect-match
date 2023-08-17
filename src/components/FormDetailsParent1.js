import FormStepWrapper from './FormStepWrapper';

const Parent1DetailsForm = ({
  firstNameParent1,
  lastNameParent1,
  phoneParent1,
  emailParent1,
  updateFields,
}) => {
  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-5vh',
          fontSize: '1.125rem',
        }}
      >
        Parent #1 Details
      </h3>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="First Name"
          value={firstNameParent1}
          onChange={(e) => updateFields({ firstNameParent1: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Last Name"
          value={lastNameParent1}
          onChange={(e) => updateFields({ lastNameParent1: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="tel"
          pattern="\+?[0-9]{6,20}"
          placeholder="Phone"
          value={phoneParent1}
          onChange={(e) => updateFields({ phoneParent1: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="email"
          placeholder="Email"
          value={emailParent1}
          onChange={(e) => updateFields({ emailParent1: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default Parent1DetailsForm;
