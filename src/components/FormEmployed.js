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
  toast("Start date must be within the next year", {
    className: "toast-position",
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: "warning",
    theme: "dark",
    transition: Slide
  });

const minDate = new Date();
const minDateStringified = addDaysOrMonths(new Date(), 1, "days")
  .toISOString()
  .split("T")[0];
const maxDate = addDaysOrMonths(new Date(), 12, "months");
const maxDateStringified = addDaysOrMonths(new Date(), 12, "months")
  .toISOString()
  .split("T")[0];

const EmployedForm = ({ startDate, updateFields }) => {
  // eslint-disable-next-line no-unused-vars
  const [isStartDateValid, setIsStartDateValid] = useState(false);
  const { employedChecked, setEmployedChecked, setIsFormValid } =
    useGlobalContext();

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
        Your Availability
      </h3>
      <ToastContainer />
      <div className="form-row">
        <div className="label-q">
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
            Are you currently employed?
          </span>
        </div>
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
          <label htmlFor="employed" className="switch">
            <input
              checked={employedChecked}
              id="employed"
              type="checkbox"
              onChange={(e) => setEmployedChecked(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <span>YES</span>
        </div>
      </div>
      <div className="form-row">
        <label
          htmlFor="start-date"
          className="label-q form-input"
          style={{
            borderRadius: "unset",
            border: "unset",
            paddingTop: "unset",
            paddingLeft: "unset",
            paddingRight: "unset",
            paddingBottom: ".25rem",
            display: "block",
          }}
        >
          What is your earliest available start date?
        </label>
        <input
          className="form-input"
          id="start-date"
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
export default EmployedForm;
