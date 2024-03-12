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
  const [startDateFromPicker, setStartDateFromPicker] = useState(startDate);
  // eslint-disable-next-line no-unused-vars
  const [isStartDateValid, setIsStartDateValid] = useState(false);
  const { employedChecked, setEmployedChecked, setIsFormValid } =
    useGlobalContext();

  const handleStartDateChange = (datepickerDate) => {
    const newDatepickerDate = new Date(
      datepickerDate.getTime() +
        Math.abs(datepickerDate.getTimezoneOffset() * 60000)
    );
    const datepickerDateFormatted = newDatepickerDate
      ?.toISOString()
      .split("T")[0];
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
          className="form-input form-input__date"
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
          selected={startDateFromPicker}
          onChange={(date) => {
            setStartDateFromPicker(date);
            handleStartDateChange(date);
          }}
          minDate={new Date().setDate(new Date().getDate() + 1)}
          maxDate={new Date().setDate(new Date().getDate() + 365)}
          showIcon
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <mask id="ipSApplication0">
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                  <path
                    fill="#fff"
                    d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                  ></path>
                </g>
              </mask>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSApplication0)"
              ></path>
            </svg>
          }
          toggleCalendarOnIconClick
        />
        {/* <DatePicker
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/mm/yyyy"
          selected={startDate}
          onChange={(date) => {
            handleStartDateChange(date);
          }}
          minDate={new Date().setDate(new Date().getDate() + 1)}
          maxDate={new Date().setDate(new Date().getDate() + 365)}
        /> */}
      </div>
    </FormStepWrapper>
  );
};
export default EmployedForm;
