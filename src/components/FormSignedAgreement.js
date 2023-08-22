import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import SignatureCanvas from "react-signature-canvas";
import { useState } from "react";
// import logoBackground from '../images/perfect-match-logo_square_no-text.png';
import { LuFileSignature } from "react-icons/lu";

const SignedAgreementForm = ({
  firstNameParent1,
  lastNameParent1,
  phoneParent1,
  emailParent1,
  firstNameParent2,
  lastNameParent2,
  phoneParent2,
  emailParent2,
  address1,
  address2,
  address3,
  address4,
  numberOfChildren,
  dueDate,
  petDetails,
  startDate,
  availability,
  otherRequirements,
  updateFields,
}) => {
  const {
    inputFieldsChildren,
    pregnantChecked,
    petsChecked,
    temporaryOrPermanent,
    partOrFullTime,
    liveInOrOut,
    driver,
    setDriver,
    ownCar,
    setOwnCar,
    nonSmoker,
    setNonSmoker,
    cooking,
    setCooking,
  } = useGlobalContext();

  const [isAgreementShown, setIsAgreementShown] = useState(false);

  const formatDateString = (dateString) => {
    const dateArray = dateString.split("-");
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  };

  return (
    <FormStepWrapper>
      <input
        type="hidden"
        value={firstNameParent1 + " " + lastNameParent1}
        name="Parent #1 name:"
      />
      <input type="hidden" value={phoneParent1} name="Parent #1 phone:" />
      <input type="hidden" value={emailParent1} name="Parent #1 email:" />
      <input
        type="hidden"
        value={firstNameParent2 + " " + lastNameParent2}
        name="Parent #2 name:"
      />
      <input type="hidden" value={phoneParent2} name="Parent #2 phone:" />
      <input type="hidden" value={emailParent2} name="Parent #2 email:" />
      <input
        type="hidden"
        value={
          address1 + ",\n" + address2 + ",\n" + address3 + ",\n" + address4
        }
        name="Address:"
      />
      <input type="hidden" value={numberOfChildren} name="How many children?" />
      {inputFieldsChildren.map((inputGroup, index) => {
        return (
          <div key={index} className="current-child-wrapper">
            <input
              type="hidden"
              value={inputGroup.nameChild}
              name={"Child #" + (index + 1) + " name:"}
            />
            <input
              type="hidden"
              value={formatDateString(inputGroup.dobChild)}
              name={"Child #" + (index + 1) + " date of birth:"}
            />
            <input
              type="hidden"
              value={inputGroup.schoolLocationChild}
              name={"Child #" + (index + 1) + " school/Montessori location:"}
            />
          </div>
        );
      })}
      <input
        type="hidden"
        value={pregnantChecked ? "Yes" : "No"}
        name="Currently pregnant?"
      />
      <input
        type="hidden"
        value={formatDateString(dueDate)}
        name="Pregnancy due date:"
      />
      <input type="hidden" value={petsChecked ? "Yes" : "No"} name="Pet(s)?" />
      <input type="hidden" value={petDetails} name="Details of pet(s):" />
      <input
        type="hidden"
        value={
          (temporaryOrPermanent ? "Permanent" : "Temporary") +
          "\n" +
          (partOrFullTime ? "Full-time" : "Part-time") +
          "\n" +
          (liveInOrOut ? "Live in" : "Live out") +
          "\n" +
          "Preferred start date: " +
          formatDateString(startDate)
        }
        name="Core requirements:"
      />
      <input
        type="hidden"
        value={availability
          .map((timePeriod) =>
            timePeriod
              .toLocaleDateString("en-gb", {
                weekday: "long",
                hour: "numeric",
                hour12: true,
              })
              .replace(", ", " @ ")
              .replace("0 pm", "12 pm")
              .replace(" am", "am")
              .replace(" pm", "pm")
          )
          .join("\n")}
        name="Times required:"
      />
      <h3
        className="form-heading"
        style={{
          position: "absolute",
          width: "100%",
          lineHeight: "1.5",
          visibility: isAgreementShown ? "visible" : "hidden",
        }}
      >
        Agreement
      </h3>
      {/* <div
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
      /> */}

      <div className="form-row form-row__additional-requirements">
        <LuFileSignature
          color="#ffb3d0"
          style={{ width: "2.5rem", height: "2.5rem", marginBottom: ".75rem" }}
        />
        <h5
          style={{
            fontSize: "1.5rem",
            color: "#102a42",
            marginBottom: ".375rem",
          }}
        >
          Thank you!
        </h5>
        <p
          style={{
            color: "#87879d",
            fontSize: ".95rem",
            lineHeight: "1.5625",
            marginBottom: '.375rem'
          }}
        >
          Thanks for joining our agency. We look forward to working with you and
          finding your Perfect Match.
        </p>
        <p
          style={{
            color: "#87879d",
            fontSize: ".95rem",
            lineHeight: "1.5625",
          }}
        >
          Please read and sign the following form so we can begin our search
          for you and your family...
        </p>
        <div
              style={{
                marginTop: '1vh',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                className="btn hero-btn next-btn btn-secondary"
              >
                Sign form
              </button>
            </div>
      </div>
      {/* <SignatureCanvas
        penColor="blue"
        canvasProps={{ width: 500, height: 200 }}
      /> */}
    </FormStepWrapper>
  );
};
export default SignedAgreementForm;
