import FormStepWrapper from './FormStepWrapper';

const Parent2DetailsForm = ({
  firstNameParent2,
  lastNameParent2,
  phoneParent2,
  emailParent2,
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
          lineHeight: '1.5',
        }}
      >
        Parent #2 Details
      </h3>
      <div className="form-row">
        <input
          className="form-input"
          type="text"
          placeholder="First Name"
          name="Parent #2 First Name:"
          value={firstNameParent2}
          onChange={(e) => updateFields({ firstNameParent2: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          className="form-input"
          type="text"
          placeholder="Last Name"
          name="Parent #2 Last Name:"
          value={lastNameParent2}
          onChange={(e) => updateFields({ lastNameParent2: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          className="form-input"
          type="tel"
          pattern="\+?[0-9]{6,20}"
          placeholder="Phone"
          name="Parent #2 Phone Number:"
          value={phoneParent2}
          onChange={(e) => updateFields({ phoneParent2: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          name="Parent #2 Email Address:"
          value={emailParent2}
          onChange={(e) => updateFields({ emailParent2: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default Parent2DetailsForm;
