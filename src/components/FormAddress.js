import { useGlobalContext } from './Context';
import FormStepWrapper from './FormStepWrapper';

const AddressForm = ({
  address1,
  address2,
  address3,
  address4,
  updateFields,
}) => {
  const { toggleApplicationFormParentsModal } = useGlobalContext();

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
        {toggleApplicationFormParentsModal ? 'Home Address' : 'Your Address'}
      </h3>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Address line 1"
          value={address1}
          onChange={(e) => updateFields({ address1: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Address line 2"
          value={address2}
          onChange={(e) => updateFields({ address2: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Address line 3"
          value={address3}
          onChange={(e) => updateFields({ address3: e.target.value })}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Address line 4"
          value={address4}
          onChange={(e) => updateFields({ address4: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default AddressForm;
