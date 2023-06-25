import FormStepWrapper from './FormStepWrapper';

const AccountForm = ({
  firstName,
  lastName,
  age,
  street,
  city,
  county,
  postcode,
  emailNanny,
  password,
  updateFields,
}) => {
  return (
    <FormStepWrapper>
      <input type="hidden" value={firstName} name="First Name" />
      <input type="hidden" value={lastName} name="Last Name" />
      <input type="hidden" value={age} name="Age" />
      <input type="hidden" value={street} name="Address line 1" />
      <input type="hidden" value={city} name="Address line 2" />
      <input type="hidden" value={county} name="Address line 3" />
      <input type="hidden" value={postcode} name="Address line 4" />

      <div className="form-row">
        <input
          required
          autoFocus
          className="form-input"
          id="email-nanny"
          type="email"
          placeholder="Email"
          value={emailNanny}
          name="Email"
          onChange={(e) => updateFields({ emailNanny: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          name="Password"
          onChange={(e) => updateFields({ password: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default AccountForm;
