import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import SignatureCanvas from "react-signature-canvas";
import { useRef, useState } from "react";
import logoBackground from "../images/perfect-match-logo_square_no-text.png";
import { LuFileSignature, LuHeartHandshake } from "react-icons/lu";

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
}) => {
  const {
    inputFieldsChildren,
    pregnantChecked,
    petsChecked,
    temporaryOrPermanent,
    partOrFullTime,
    liveInOrOut,
    driver,
    ownCar,
    nonSmoker,
    cooking,
    isAgreementShown,
    setIsAgreementShown,
    isAgreementSigned,
    setIsAgreementSigned,
  } = useGlobalContext();

  const [openModal, setOpenModal] = useState(false);
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef();

  const create = () => {
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    setImageURL(URL);
    setOpenModal(false);
    setIsAgreementSigned(true);
  };

  // const download = () => {
  //   const dlink = document.createElement("a");
  //   dlink.setAttribute("href", imageURL);
  //   dlink.setAttribute("download", "signature.png");
  //   dlink.click();
  // };

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
          (liveInOrOut ? "Live in" : "Live out")
        }
        name="Core requirements:"
      />
      <input
        type="hidden"
        value={formatDateString(startDate)}
        name="Preferred start date:"
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
      />
      <h3
        className="form-heading"
        style={{
          position: "absolute",
          width: "100%",
          lineHeight: "1.5",
          visibility:
            isAgreementShown && !isAgreementSigned ? "visible" : "hidden",
        }}
      >
        Agreement Form
      </h3>
      <div className="form-row form-row__additional-requirements">
        {!isAgreementShown ? (
          <LuFileSignature
            color="#ffb3d0"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              marginBottom: ".75rem",
            }}
          />
        ) : !imageURL ? (
          <div
            style={{
              backgroundImage: "url(" + logoBackground + ")",
              height: "10vh",
              width: "10vh",
              backgroundSize: "cover",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "2vh",
            }}
          ></div>
        ) : (
          <LuHeartHandshake
            color="#ffb3d0"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              marginBottom: ".75rem",
            }}
          />
        )}
        <h5
          style={{
            fontSize: "1.5rem",
            color: "#102a42",
            marginBottom: ".375rem",
            display: isAgreementShown && !isAgreementSigned ? "none" : "block",
          }}
        >
          {!isAgreementSigned ? "Almost there!" : "Thank you!"}
        </h5>
        <p
          style={{
            color: !isAgreementShown || isAgreementSigned ? "#87879d" : "#666",
            fontSize: !isAgreementShown || isAgreementSigned ? ".95rem" : ".825rem",
            lineHeight: !isAgreementShown || isAgreementSigned ? "1.5625" : "1.4",
            marginBottom: !isAgreementShown || isAgreementSigned ? ".375rem" : ".25rem",
            textAlign: !isAgreementShown || isAgreementSigned ? "center" : "left",
          }}
        >
          {!isAgreementShown
            ? "Thanks for joining our agency. We look forward to working with you and finding your Perfect Match."
            : !isAgreementSigned
            ? "In the event of us deciding to employ one of your nannies, we agree to settle your account in full within seven days of receiving your invoice."
            : "We have received your Application details and signed Agreement form, and will be in contact with you soon."}
        </p>
        <p
          style={{
            color: !isAgreementShown || isAgreementSigned ? "#87879d" : "#666",
            fontSize: !isAgreementShown || isAgreementSigned ? ".95rem" : ".825rem",
            lineHeight: !isAgreementShown || isAgreementSigned ? "1.5625" : "1.4",
            textAlign: !isAgreementShown || isAgreementSigned ? "center" : "left",
          }}
        >
          {!isAgreementShown
            ? "Please read and sign the following form so we can begin our search for you and your family..."
            : !isAgreementSigned
            ? "We confirm that we have read and are in agreement with the Terms & Conditions of the agency."
            : "Please submit a Registration fee of €100 (VAT included), which will be deducted from our placement fee if you employ one of our nannies."}
        </p>
        <button
          className="btn hero-btn next-btn btn-secondary"
          style={{
            width: "9.6875rem",
            display:
              isAgreementShown && !isAgreementSigned ? "inline-block" : "none",
          }}
          onClick={() => setOpenModal(true)}
        >
          Create signature
        </button>
        <br />
        {/* {imageURL && (
          <>
            <img
              src={imageURL}
              height="100"
              width="auto"
              alt="signature"
              className="signature"
            />
            <br />
            <button
              onClick={download}
              style={{ padding: ".3125rem", marginTop: ".3125rem" }}
            >
              Download
            </button>
          </>
        )}
        <br /> */}
        {openModal && (
          <div
            className="modal-container"
            style={{
              position: "fixed",
              width: "100vw",
              height: "100%",
              display: "flex",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <div
              className="modal"
              style={{
                width: "90%",
                maxWidth: "31.25rem",
                border: ".3125rem",
                padding: ".625rem",
                backgroundColor: "#fff",
                boxSizing: "border-box",
              }}
            >
              <div className="sigPadContainer">
                <SignatureCanvas
                  penColor="blue"
                  canvasProps={{ className: "sigCanvas" }}
                  ref={sigCanvas}
                />
                <hr />
                <button onClick={() => sigCanvas.current.clear()}>Clear</button>
              </div>
              <div
                className="modal__bottom"
                style={{
                  marginTop: "1vh",
                  display: "flex",
                  gap: ".5rem",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  className="btn hero-btn back-btn"
                  onClick={() => setOpenModal(false)}
                >
                  Cancel
                </button>
                <button className="btn hero-btn next-btn" onClick={create}>
                  Create
                </button>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            marginTop: "1vh",
            display: !isAgreementShown ? "flex" : "none",
            justifyContent: "center",
          }}
        >
          <button
            className="btn hero-btn next-btn btn-secondary"
            onClick={() => setIsAgreementShown(true)}
          >
            Sign form
          </button>
        </div>
      </div>
    </FormStepWrapper>
  );
};
export default SignedAgreementForm;
