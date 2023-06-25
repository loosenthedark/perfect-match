import FormStepWrapper from './FormStepWrapper';

const UserForm = ({ firstName, lastName, age, updateFields }) => {
  return (
    <FormStepWrapper>
      <div className="form-row">
        <input
          required
          autoFocus
          className="form-input"
          id="firstName"
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
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          min={1}
          max={70}
          className="form-input"
          placeholder="Age"
          id="age"
          type="number"
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default UserForm;
