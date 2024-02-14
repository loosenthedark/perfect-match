import FormStepWrapper from './FormStepWrapper';
import logoBackground from '../images/perfect-match-logo_square_no-text.png';
import { useGlobalContext } from './Context';

const ChildrenForm = ({ numberOfChildren, updateFields }) => {
  const { setHowManyKids } = useGlobalContext();

  const handleChange = (event) => {
    updateFields({ numberOfChildren: event.target.value });
    setHowManyKids(event.target.value);
  };

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
        Your Children
      </h3>
      <div
        style={{
          height: '17.5vh',
          width: '17.5vh',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '2vh',
          backgroundImage: 'url(' + logoBackground + ')',
          backgroundSize: 'cover',
        }}
      ></div>
      <div
        className="form-row"
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label
          className="form-input"
          htmlFor="howManyKids"
          style={{
            borderRadius: 'unset',
            border: 'unset',
            marginBottom: '.125rem',
            paddingLeft: '.75rem',
          }}
        >
          How many children do you have?
        </label>
        <input
          id="howManyKids"
          className="form-input"
          min={1}
          max={8}
          type="number"
          value={numberOfChildren}
          onChange={handleChange}
        />
      </div>
    </FormStepWrapper>
  );
};
export default ChildrenForm;
