import FormStepWrapper from './FormStepWrapper';

const AddressForm = ({ street, city, county, postcode, updateFields }) => {
  return (
    <FormStepWrapper>
      <div className="form-row">
        <input
          required
          autoFocus
          className="form-input"
          id="street"
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          id="city"
          type="text"
          placeholder="Town / City"
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          id="county"
          type="text"
          placeholder="County"
          value={county}
          onChange={(e) => updateFields({ county: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          id="postcode"
          type="text"
          placeholder="Postcode"
          value={postcode}
          onChange={(e) => updateFields({ postcode: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default AddressForm;
