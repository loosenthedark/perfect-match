import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
// import logoBackground from '../images/perfect-match-logo_square_no-text.png';

const OtherRequirementsForm = ({
  otherRequirements,
  updateFields,
}) => {
  const {
    driver,
    setDriver,
    ownCar,
    setOwnCar,
    nonSmoker,
    setNonSmoker,
    cooking,
    setCooking,
  } = useGlobalContext();

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: "absolute",
          width: "100%",

          lineHeight: "1.5",
        }}
      >
        Additional Requirements
      </h3>
      <div
        className="form-row form-row__additional-requirements"
        style={{ marginTop: "1.25rem" }}
      >
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <label htmlFor="driver" className="switch">
            <input
              checked={driver}
              id="driver"
              type="checkbox"
              onChange={(e) => setDriver(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span
            className="slider-label-additional"
            style={{ textAlign: "left" }}
          >
            DRIVER
          </span>
        </div>
      </div>
      <div className="form-row form-row__additional-requirements">
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <label htmlFor="own-car" className="switch">
            <input
              checked={ownCar}
              id="own-car"
              type="checkbox"
              onChange={(e) => setOwnCar(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span
            className="slider-label-additional"
            style={{ textAlign: "left" }}
          >
            OWN CAR
          </span>
        </div>
      </div>
      <div className="form-row form-row__additional-requirements">
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <label htmlFor="non-smoker" className="switch">
            <input
              checked={nonSmoker}
              id="non-smoker"
              type="checkbox"
              onChange={(e) => setNonSmoker(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span
            className="slider-label-additional"
            style={{ textAlign: "left" }}
          >
            NON-SMOKER
          </span>
        </div>
      </div>
      <div className="form-row form-row__additional-requirements">
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <label htmlFor="cook" className="switch">
            <input
              checked={cooking}
              id="cook"
              type="checkbox"
              onChange={(e) => setCooking(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span
            className="slider-label-additional"
            style={{ textAlign: "left" }}
          >
            LIVE IN
          </span>
        </div>
      </div>
      <div className="form-row" style={{ marginBottom: ".25rem" }}>
        <textarea
          className="form-input"
          placeholder="Please let us know of any other requirements..."
          rows="3"
          value={otherRequirements}
          onChange={(e) => updateFields({ otherRequirements: e.target.value })}
        ></textarea>
      </div>
      <input
        type="hidden"
        value={
          (driver ? "Driver\n" : "") +
          (ownCar ? "Own car\n" : "") +
          (nonSmoker ? "Non-smoker\n" : "") +
          (cooking ? "Cooking" : "")
        }
        name="Additional requirements:"
      />
      <input
        type="hidden"
        value={otherRequirements}
        name="Other requirements:"
      />
    </FormStepWrapper>
  );
};
export default OtherRequirementsForm;
