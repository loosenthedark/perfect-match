import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import { useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";

function addDaysOrMonths(date, numberOfDaysOrMonths, daysOrMonths) {
  if (daysOrMonths === "days") {
    date.setDate(date.getDate() + numberOfDaysOrMonths);
  } else {
    date.setMonth(date.getMonth() + numberOfDaysOrMonths);
  }
  return date;
}

const notify = () =>
  toast(
    window.innerWidth > 767
      ? "Your preferred start date must be within the next year"
      : "Start date must be within the next year",
    {
      className: "toast-position",
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      type: "warning",
      theme: "dark",
      transition: Slide,
    }
  );

const minDate = new Date();
const minDateStringified = addDaysOrMonths(new Date(), 1, "days")
  .toISOString()
  .split("T")[0];
const maxDate = addDaysOrMonths(new Date(), 12, "months");
const maxDateStringified = addDaysOrMonths(new Date(), 12, "months")
  .toISOString()
  .split("T")[0];
const CoreRequirementsForm = ({ startDate, updateFields }) => {
  // eslint-disable-next-line no-unused-vars
  const [isStartDateValid, setIsStartDateValid] = useState(false);
  const {
    temporaryOrPermanent,
    setTemporaryOrPermanent,
    partOrFullTime,
    setPartOrFullTime,
    liveInOrOut,
    setLiveInOrOut,
    setIsFormValid,
  } = useGlobalContext();

  const handleStartDateChange = (event) => {
    const start = new Date(event.target.value);
    setIsStartDateValid(
      start > minDate &&
        start < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          event.target.value
        )
    );
    setIsFormValid(
      start > minDate &&
        start < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          event.target.value
        )
    );
    updateFields({ startDate: event.target.value });
  };

  useEffect(() => {
    notify();
    const startDateData = new Date(startDate);
    setIsFormValid(
      startDateData > minDate &&
        startDateData < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(startDate)
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
        Core Requirements
      </h3>
      <ToastContainer />
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
      <div className="form-row form-row__core-requirements__last">
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
          className="form-input form-input__date"
          id="startDate"
          name="startDate"
          min={minDateStringified}
          max={maxDateStringified}
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
    </FormStepWrapper>
  );
};
export default CoreRequirementsForm;
