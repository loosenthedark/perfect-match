import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";

const CoreRequirementsForm = ({ startDate, updateFields }) => {
  const {
    temporaryOrPermanent,
    setTemporaryOrPermanent,
    partOrFullTime,
    setPartOrFullTime,
    liveInOrOut,
    setLiveInOrOut,
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
        Core Requirements
      </h3>
      <div className="form-row form-row__requirements">
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <span className="core-requirements" style={{ textAlign: "right" }}>
            TEMPORARY
          </span>
          <label htmlFor="tempOrPerm" className="switch">
            <input
              checked={temporaryOrPermanent}
              id="tempOrPerm"
              type="checkbox"
              onChange={(e) => setTemporaryOrPermanent(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span className="core-requirements" style={{ textAlign: "left" }}>
            PERMANENT
          </span>
        </div>
      </div>
      <div className="form-row form-row__requirements">
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <span className="core-requirements" style={{ textAlign: "right" }}>
            PART-TIME
          </span>
          <label htmlFor="ptOrFt" className="switch">
            <input
              checked={partOrFullTime}
              id="ptOrFt"
              type="checkbox"
              onChange={(e) => setPartOrFullTime(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span className="core-requirements" style={{ textAlign: "left" }}>
            FULL-TIME
          </span>
        </div>
      </div>
      <div className="form-row form-row__requirements">
        <div
          className="slider-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <span className="core-requirements" style={{ textAlign: "right" }}>
            LIVE OUT
          </span>
          <label htmlFor="liveInOrOut" className="switch">
            <input
              checked={liveInOrOut}
              id="liveInOrOut"
              type="checkbox"
              onChange={(e) => setLiveInOrOut(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span className="core-requirements" style={{ textAlign: "left" }}>
            LIVE IN
          </span>
        </div>
      </div>
      <div className="form-row">
        {/* <input
          className="form-input"
          placeholder="What is your preferred start date?"
          value={startDate}
          onFocus={(e) => (e.target.type = "date")}
          onChange={(e) => updateFields({ startDate: e.target.value })}
        /> */}
        <label
          htmlFor="startDate"
          className="label-q form-input"
          style={{
            borderRadius: "unset",
            border: "unset",
            color: "#c7c7d1",
            paddingTop: "unset",
            paddingLeft: ".775rem",
            paddingRight: "unset",
            paddingBottom: ".125rem",
            fontWeight: "400",
            display: "block",
            textAlign: "left",
          }}
        >
          What is your preferred start date?
        </label>
        <input
          className="form-input"
          style={{
            paddingLeft: ".775rem",
            paddingTop: ".7125rem",
            paddingBottom: ".7125rem",
          }}
          id="startDate"
          name="startDate"
          type="date"
          value={startDate}
          onChange={(e) => updateFields({ startDate: e.target.value })}
        />
      </div>
    </FormStepWrapper>
  );
};
export default CoreRequirementsForm;
