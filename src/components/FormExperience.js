import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import { useEffect, useState } from "react";

const ExperienceForm = ({ qualificationDetails, updateFields }) => {
  // eslint-disable-next-line no-unused-vars
  const [isQualificationDetailsValid, setIsQualificationDetailsValid] =
    useState(true);
  const {
    experienceChecked,
    setExperienceChecked,
    qualificationsChecked,
    setQualificationsChecked,
    setIsFormValid,
  } = useGlobalContext();

  const handleQualificationDetailsChange = (event) => {
    setIsQualificationDetailsValid(
      !event.target.value.length ||
        (event.target.value.length > 2 &&
          event.target.value.length < 1001 &&
          /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(event.target.value))
    );
    setIsFormValid(
      !event.target.value.length ||
        (event.target.value.length > 2 &&
          event.target.value.length < 1001 &&
          /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(event.target.value))
    );
    updateFields({ qualificationDetails: event.target.value });
  };

  useEffect(() => {
    setIsFormValid(
      !qualificationDetails.length ||
        (qualificationDetails.length > 2 &&
          qualificationDetails.length < 1001 &&
          /^[#.0-9a-zA-ZÀ-ú\s'?,-]+$/.test(qualificationDetails))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        Your Experience
      </h3>
      <div className="form-row">
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
          Do you have previous experience in childcare?
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
          <label htmlFor="experience" className="switch">
            <input
              checked={experienceChecked}
              id="experience"
              type="checkbox"
              onChange={(e) => setExperienceChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <div className="form-row">
        <span
          className="label-q form-input"
          style={{
            borderRadius: "unset",
            border: "unset",
            paddingTop: "unset",
            paddingLeft: "unset",
            paddingRight: "unset",
            display: "block",
          }}
        >
          Do you hold any formal childcare qualifications?
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
          <label htmlFor="qualifications" className="switch">
            <input
              checked={qualificationsChecked}
              id="qualifications"
              type="checkbox"
              onChange={(e) => setQualificationsChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <div className="form-row">
        <textarea
          className="form-input"
          placeholder="If yes, please provide details..."
          rows="3"
          maxLength={1000}
          value={qualificationDetails}
          onChange={handleQualificationDetailsChange}
        ></textarea>
      </div>
    </FormStepWrapper>
  );
};
export default ExperienceForm;
