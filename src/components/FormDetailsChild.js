/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import { useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast("Must be between 3 months and 16 years old", {
    className: "toast-position",
    position: "top-center",
    autoClose: 50000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: "warning",
    theme: "dark",
    transition: Bounce
  });

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
  const [isNameChildValid, setIsNameChildValid] = useState(false);
  const [isDobChildValid, setIsDobChildValid] = useState(false);
  const [isSchoolLocationChildValid, setIsSchoolLocationChildValid] =
    useState(true);
  const [canNextChildBeClicked, setCanNextChildBeClicked] = useState(false);
  const { setInputFieldsChildren, inputFieldsChildren, setIsFormValid } =
    useGlobalContext();

  const handleNameChildChange = (event) => {
    const dobNameChild = new Date(
      inputFieldsChildren[currentChild - 1].dobChild
    );
    setIsNameChildValid(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value)
    );
    setCanNextChildBeClicked(
      event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value) &&
        dobNameChild > minDate &&
        dobNameChild < maxDate &&
        (!inputFieldsChildren[currentChild - 1].schoolLocationChild.length ||
          (inputFieldsChildren[currentChild - 1].schoolLocationChild.length >
            1 &&
            inputFieldsChildren[currentChild - 1].schoolLocationChild.length <
              41))
    );
    setIsFormValid(
      currentChild === parseInt(numberOfKids) &&
        event.target.value.length > 1 &&
        event.target.value.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(event.target.value) &&
        dobNameChild > minDate &&
        dobNameChild < maxDate &&
        (!inputFieldsChildren[currentChild - 1].schoolLocationChild.length ||
          (inputFieldsChildren[currentChild - 1].schoolLocationChild.length >
            1 &&
            inputFieldsChildren[currentChild - 1].schoolLocationChild.length <
              41))
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
    setCanNextChildBeClicked(
      dob > minDate &&
        dob < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          event.target.value
        ) &&
        inputFieldsChildren[currentChild - 1].nameChild.length > 1 &&
        inputFieldsChildren[currentChild - 1].nameChild.length < 31 &&
        (!inputFieldsChildren[currentChild - 1].schoolLocationChild.length ||
          (inputFieldsChildren[currentChild - 1].schoolLocationChild.length >
            1 &&
            inputFieldsChildren[currentChild - 1].schoolLocationChild.length <
              41))
    );
    setIsFormValid(
      currentChild === parseInt(numberOfKids) &&
        dob > minDate &&
        dob < maxDate &&
        /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(
          event.target.value
        ) &&
        inputFieldsChildren[currentChild - 1].nameChild.length > 1 &&
        inputFieldsChildren[currentChild - 1].nameChild.length < 31 &&
        (!inputFieldsChildren[currentChild - 1].schoolLocationChild.length ||
          (inputFieldsChildren[currentChild - 1].schoolLocationChild.length >
            1 &&
            inputFieldsChildren[currentChild - 1].schoolLocationChild.length <
              41))
    );
  };

  const handleSchoolLocationChildChange = (event) => {
    const dobSchoolChild = new Date(
      inputFieldsChildren[currentChild - 1].dobChild
    );
    setIsSchoolLocationChildValid(
      !event.target.value.length ||
        (event.target.value.length > 1 &&
          event.target.value.length < 41 &&
          /^[#.0-9a-zA-ZÀ-ú\s',-]+$/.test(event.target.value))
    );
    setCanNextChildBeClicked(
      (!event.target.value.length ||
        (event.target.value.length > 1 &&
          event.target.value.length < 41 &&
          /^[#.0-9a-zA-ZÀ-ú\s',-]+$/.test(event.target.value))) &&
        inputFieldsChildren[currentChild - 1].nameChild.length > 1 &&
        inputFieldsChildren[currentChild - 1].nameChild.length < 31 &&
        dobSchoolChild > minDate &&
        dobSchoolChild < maxDate
    );
    setIsFormValid(currentChild === parseInt(numberOfKids));
  };

  const handlePrevChildClick = () => {
    setCurrentChild((num) => {
      return num - 1;
    });
  };

  const handleNextChildClick = (e) => {
    e.preventDefault();
    setCurrentChild((num) => {
      return num + 1;
    });
  };

  const handleFormChange = (i, e) => {
    let data = [...inputFieldsChildren];
    data[i][e.target.name] = e.target.value;
    setInputFieldsChildren(data);
  };

  useEffect(() => {
    notify();
    setInputFieldsChildren(inputFieldsChildrenConfig.slice(0, numberOfKids));
    const dobInputGroup = new Date(
      inputFieldsChildren[currentChild - 1]?.dobChild
    );
    setIsFormValid(
      currentChild === parseInt(numberOfKids) &&
        inputFieldsChildren[currentChild - 1]?.nameChild.length > 1 &&
        inputFieldsChildren[currentChild - 1].nameChild.length < 31 &&
        /^[a-zA-ZÀ-ú\s'-]+$/.test(
          inputFieldsChildren[currentChild - 1].nameChild
        ) &&
        dobInputGroup > minDate &&
        dobInputGroup < maxDate &&
        (!inputFieldsChildren[currentChild - 1].schoolLocationChild.length ||
          (inputFieldsChildren[currentChild - 1].schoolLocationChild.length >
            1 &&
            inputFieldsChildren[currentChild - 1].schoolLocationChild.length <
              41))
    );
  }, []);

  useEffect(() => {
    const dobUseEffect = new Date(
      inputFieldsChildren[currentChild - 1]?.dobChild
    );
    setCanNextChildBeClicked(
      inputFieldsChildren[currentChild - 1]?.nameChild.length > 1 &&
        inputFieldsChildren[currentChild - 1].nameChild.length < 31 &&
        dobUseEffect > minDate &&
        dobUseEffect < maxDate &&
        (!inputFieldsChildren[currentChild - 1].schoolLocationChild.length ||
          (inputFieldsChildren[currentChild - 1].schoolLocationChild.length >
            1 &&
            inputFieldsChildren[currentChild - 1].schoolLocationChild.length <
              41))
    );
  }, [currentChild]);

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: "absolute",
          lineHeight: "1.5",
        }}
      >
        {numberOfKids === 1
          ? "Child Details"
          : "Child #" + currentChild + " Details"}
      </h3>
      <ToastContainer />
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
                required
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
                onClick={handlePrevChildClick}
                style={{
                  visibility: currentChild === 1 ? "hidden" : "visible",
                }}
              >
                Previous child
              </button>
              <button
                className="btn hero-btn next-btn next-btn__child btn-secondary"
                onClick={handleNextChildClick}
                style={{
                  visibility:
                    currentChild === parseInt(numberOfKids)
                      ? "hidden"
                      : "visible",
                }}
                disabled={!canNextChildBeClicked}
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
