import FormStepWrapper from './FormStepWrapper';

const AddressForm = ({ street, city, county, postcode, updateFields }) => {
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
        Your Address
      </h3>
      <div className="form-row">
        <input
          required
          className="form-input"
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
