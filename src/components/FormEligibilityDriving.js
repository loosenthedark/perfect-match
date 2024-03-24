import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";

const EligibilityFormDriving = () => {
  const { licenceChecked, setLicenceChecked, carChecked, setCarChecked } =
    useGlobalContext();

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: "absolute",
          lineHeight: "1.5",
        }}
      >
        Your Mobility
      </h3>
      <div className="form-row form-row__driving-licence">
        <span
          className="label-q form-input"
          style={{
            borderRadius: "unset",
            border: "unset",
            paddingLeft: "unset",
            paddingRight: "unset",
            display: "block",
          }}
        >
          Do you hold a valid Irish driving licence?
        </span>
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <span style={{ textAlign: "right" }}>NO</span>
          <label htmlFor="licence" className="switch">
            <input
              checked={licenceChecked}
              id="licence"
              type="checkbox"
              onChange={(e) => setLicenceChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <div className="form-row form-row__permit">
        <span
          className="label-q form-input"
          style={{
            borderRadius: "unset",
            border: "unset",
            paddingLeft: "unset",
            paddingRight: "unset",
            display: "block",
          }}
        >
          Do you own or have regular access to a car?
        </span>
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <span style={{ textAlign: "right" }}>NO</span>
          <label htmlFor="car" className="switch">
            <input
              checked={carChecked}
              id="car"
              type="checkbox"
              onChange={(e) => setCarChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
    </FormStepWrapper>
  );
};
export default EligibilityFormDriving;
