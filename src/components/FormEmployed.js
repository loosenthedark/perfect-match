import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import { useEffect, useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import DatePicker from "react-datepicker";

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
      ? "Your proposed start date must be within the next year"
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
// const minDateStringified = addDaysOrMonths(new Date(), 1, "days")
//   .toISOString()
//   .split("T")[0];
const maxDate = addDaysOrMonths(new Date(), 12, "months");
// const maxDateStringified = addDaysOrMonths(new Date(), 12, "months")
//   .toISOString()
//   .split("T")[0];

const EmployedForm = ({ startDate, updateFields }) => {
  // eslint-disable-next-line no-unused-vars
  const [isStartDateValid, setIsStartDateValid] = useState(false);
  const { employedChecked, setEmployedChecked, setIsFormValid } =
    useGlobalContext();

  const handleStartDateChange = (datepickerDate) => {
    const datepickerDateFormatted = datepickerDate.toISOString().split("T")[0];
    setIsStartDateValid(
      datepickerDate > minDate &&
        datepickerDate < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          datepickerDateFormatted
        )
    );
    setIsFormValid(
      datepickerDate > minDate &&
        datepickerDate < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          datepickerDateFormatted
        )
    );
    updateFields({ startDate: datepickerDateFormatted });
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
      <div className="form-row form-row__permit">
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
      <div className="form-row form-row__nationality">
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
        {/* <input
          className="form-input form-input__date"
          id="start-date"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        /> */}
        <DatePicker
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
          filterDate={(d) => {
            return d > new Date();
          }}
          selected={startDate}
          onChange={(date) => {
            handleStartDateChange(date);
          }}
          timeZoneOffsetInMinutes={new Date().getTimezoneOffset()}
        />
      </div>
    </FormStepWrapper>
  );
};
export default EmployedForm;
