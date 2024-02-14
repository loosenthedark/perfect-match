import { useState } from "react";
import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import { useEffect } from "react";

function subtractYearsOrMonths(date, numberOfYearsOrMonths, yearsOrMonths) {
  if (yearsOrMonths === "years") {
    date.setFullYear(date.getFullYear() - numberOfYearsOrMonths);
  } else {
    date.setMonth(date.getMonth() - numberOfYearsOrMonths);
  }
  return date;
}

const minDate = subtractYearsOrMonths(new Date(), 16, "years");
const minDateStringified = subtractYearsOrMonths(new Date(), 16, "years")
  .toISOString()
  .split("T")[0];
const maxDate = subtractYearsOrMonths(new Date(), 3, "months");
const maxDateStringified = subtractYearsOrMonths(new Date(), 3, "months")
  .toISOString()
  .split("T")[0];

const ChildDetailsForm = ({ numberOfKids }) => {
  const inputFieldsChildrenConfig = [
    {
      nameChild: "",
      dobChild: "",
      schoolLocationChild: "",
    },
    {
      nameChild: "",
      dobChild: "",
      schoolLocationChild: "",
    },
    {
      nameChild: "",
      dobChild: "",
      schoolLocationChild: "",
    },
    {
      nameChild: "",
      dobChild: "",
      schoolLocationChild: "",
    },
    {
      nameChild: "",
      dobChild: "",
      schoolLocationChild: "",
    },
    {
      nameChild: "",
      dobChild: "",
      schoolLocationChild: "",
    },
    {
      nameChild: "",
      dobChild: "",
      schoolLocationChild: "",
    },
    {
      nameChild: "",
      dobChild: "",
      schoolLocationChild: "",
    },
  ];

  const [currentChild, setCurrentChild] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [isNameChildValid, setIsNameChildValid] = useState(false);
  const [isDobChildValid, setIsDobChildValid] = useState(false);
  const [isSchoolLocationChildValid, setIsSchoolLocationChildValid] =
    useState(false);
  const { setInputFieldsChildren, inputFieldsChildren, setIsFormValid } =
    useGlobalContext();

  const handleNameChildChange = (event) => {
    setIsNameChildValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-Z\s'-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-Z\s'-]+$/.test(event.target.value) &&
        isDobChildValid &&
        isSchoolLocationChildValid
    );
  };

  const handleDobChildChange = (event) => {
    const dob = new Date(event.target.value);
    setIsDobChildValid(
      dob > minDate &&
        dob < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          event.target.value
        )
    );
    setIsFormValid(
      dob > minDate &&
        dob < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          event.target.value
        ) &&
        isNameChildValid &&
        isSchoolLocationChildValid
    );
  };

  const handleSchoolLocationChildChange = (event) => {
    setIsSchoolLocationChildValid(
      event.target.value.length > 1 &&
        event.target.value.length < 41 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 41 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value) &&
        isNameChildValid &&
        isDobChildValid
    );
  };

  const handleFormChange = (i, e) => {
    let data = [...inputFieldsChildren];
    data[i][e.target.name] = e.target.value;
    setInputFieldsChildren(data);
  };

  useEffect(() => {
    console.log(minDate);
    console.log(maxDate);
    setInputFieldsChildren(inputFieldsChildrenConfig.slice(0, numberOfKids));
    setIsFormValid(
      inputFieldsChildren.forEach(
        (inputGroup) =>
          inputGroup.nameChild.length > 0 &&
          inputGroup.nameChild.length < 31 &&
          /^[#.0-9a-zA-Z\s,-]+$/.test(inputGroup.nameChild)
      )
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
        {numberOfKids === 1
          ? "Child Details"
          : "Child #" + currentChild + " Details"}
      </h3>

      {inputFieldsChildren.map((inputGroup, index) => {
        return (
          <div
            key={index}
            className="current-child-wrapper"
            style={{ display: index + 1 === currentChild ? "block" : "none" }}
          >
            <div className="form-row">
              <input
                required
                className="form-input"
                type="text"
                name="nameChild"
                placeholder="Name"
                minLength={2}
                maxLength={30}
                value={inputGroup.nameChild}
                onChange={(event) => {
                  handleFormChange(index, event);
                  handleNameChildChange(event);
                }}
              />
            </div>
            <div className="form-row">
              {/* <input
                required
                className="form-input"
                name="dobChild"
                placeholder="Date of birth"
                value={inputGroup.dobChild}
                onFocus={(e) => (e.target.type = "date")}
                onChange={(event) => handleFormChange(index, event)}
              /> */}
              <label
                htmlFor="dobChild"
                className="label-q form-input"
                style={{
                  borderRadius: "unset",
                  border: "unset",
                  color: "#c7c7d1",
                  paddingTop: "unset",
                  paddingRight: "unset",
                  paddingBottom: ".125rem",
                  fontWeight: "400",
                  display: "block",
                  textAlign: "left",
                }}
              >
                Date of birth
              </label>
              <input
                className="form-input form-input__date"
                id="dobChild"
                name="dobChild"
                min={minDateStringified}
                max={maxDateStringified}
                type="date"
                value={inputGroup.dobChild}
                onChange={(event) => {
                  handleFormChange(index, event);
                  handleDobChildChange(event);
                }}
              />
            </div>
            <div className="form-row">
              <input
                required
                className="form-input"
                name="schoolLocationChild"
                placeholder="Location of school/Montessori (if applicable)"
                minLength={2}
                maxLength={40}
                value={inputGroup.schoolLocationChild}
                onChange={(event) => {
                  handleFormChange(index, event);
                  handleSchoolLocationChildChange(event);
                }}
              />
            </div>
            <div
              style={{
                marginTop: "1vh",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                className="btn hero-btn back-btn back-btn__child btn-secondary"
                style={{
                  visibility: currentChild === 1 ? "hidden" : "visible",
                }}
              >
                Previous child
              </button>
              <button
                className="btn hero-btn next-btn next-btn__child btn-secondary"
                onClick={() => setCurrentChild(currentChild + 1)}
                style={{
                  visibility:
                    currentChild === numberOfKids ? "hidden" : "visible",
                }}
              >
                Next child
              </button>
            </div>
          </div>
        );
      })}
    </FormStepWrapper>
  );
};
export default ChildDetailsForm;
