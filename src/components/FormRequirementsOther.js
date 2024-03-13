/* eslint-disable no-unused-vars */
import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import { useEffect, useState } from "react";

const OtherRequirementsForm = ({ otherRequirements, updateFields }) => {
  const [isOtherRequirementsValid, setIsOtherRequirementsValid] =
    useState(true);
  const {
    driver,
    setDriver,
    ownCar,
    setOwnCar,
    nonSmoker,
    setNonSmoker,
    cooking,
    setCooking,
    setIsFormValid,
  } = useGlobalContext();

  const handleOtherRequirementsChange = (event) => {
    setIsOtherRequirementsValid(
      !event.target.value.length ||
        (event.target.value.length > 1 &&
          event.target.value.length < 2001 &&
          /^[#.0-9a-zA-ZÀ-ú\s',&?-]+$/.test(event.target.value))
    );
    setIsFormValid(
      !event.target.value.length ||
        (event.target.value.length > 1 &&
          event.target.value.length < 2001 &&
          /^[#.0-9a-zA-ZÀ-ú\s',&?-]+$/.test(event.target.value))
    );
    updateFields({ otherRequirements: event.target.value });
  };

  useEffect(() => {
    setIsFormValid(
      !otherRequirements.length ||
        (otherRequirements.length > 1 &&
          otherRequirements.length < 2001 &&
          /^[#.0-9a-zA-ZÀ-ú\s',&?-]+$/.test(otherRequirements))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: "absolute",
          lineHeight: "1.5",
        }}
      >
        Additional Requirements
      </h3>
      <div
        className="form-row form-row__additional-requirements"
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
            COOKING
          </span>
        </div>
      </div>
      <div className="form-row form-row__additional-requirements__last">
        <textarea
          className="form-input"
          placeholder="Please let us know of any other requirements..."
          rows="3"
          maxLength={2000}
          value={otherRequirements}
          onChange={handleOtherRequirementsChange}
        ></textarea>
      </div>
    </FormStepWrapper>
  );
};
export default OtherRequirementsForm;
