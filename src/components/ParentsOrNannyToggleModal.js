import { GrFormClose } from "react-icons/gr";
import { useGlobalContext } from "./Context";
import { useState } from "react";
import { MdChildFriendly, MdFamilyRestroom, MdWoman } from "react-icons/md";

const ParentsOrNannyToggleModal = () => {
  const [isParent, setIsParent] = useState(true);
  const [isNanny, setIsNanny] = useState(false);

  const {
    toggleParentsOrNannyToggleModal,
    setToggleParentsOrNannyToggleModal,
    setToggleApplicationFormParentsModal,
    setToggleApplicationFormNannyModal,
  } = useGlobalContext();

  return (
    <div
      className={
        toggleParentsOrNannyToggleModal
          ? "modal-overlay show-modal"
          : "modal-overlay"
      }
    >
      <div
        className="modal-container modal-container__application-form"
        style={{
          top: "1.875rem",
          height: "unset",
          maxHeight: "unset",
          gridTemplateColumns: "unset",
          paddingLeft: "unset",
        }}
      >
        <div
          className="form-row form-row__additional-requirements form-row__agreement form-row__parents-or-nanny"
          style={{
            padding: "3vh 1.5rem 0",
            margin: "3vh auto 1.75vh",
          }}
        >
          {
            <MdChildFriendly
              color="#ffb3d0"
              style={{
                width: "4rem",
                height: "4rem",
                marginBottom: ".5rem",
                transform: "scaleX(-1)",
              }}
            />
          }
          <h5
            style={{
              fontWeight: "900",
              color: "#28283d",
              marginBottom: ".375rem",
              display: "block",
            }}
          >
            Congratulations!
          </h5>
          <p
            style={{
              color: "#87879d",
              fontSize: ".95rem",
              lineHeight: "1.4",
              marginBottom: ".375rem",
              textAlign: "center",
            }}
          >
            You're one step closer to finding your Perfect Match.
          </p>
          <p
            style={{
              color: "#87879d",
              fontSize: ".95rem",
              lineHeight: "1.4",
              marginBottom: ".375rem",
              textAlign: "center",
            }}
          >
            Before we go any further:
          </p>
          <p
            style={{
              color: "#87879d",
              fontSize: ".95rem",
              lineHeight: "1.4",
              textAlign: "center",
              marginBottom: ".5rem",
            }}
          >
            Are you applying as a Parent or as a Nanny?
          </p>
          <div
            className="form-row form-row__additional-requirements form-row__agreement"
            style={{
              display: "inline-flex",
              width: "100%",
              flexWrap: "wrap",
              flexDirection: "row",
              justifyContent: "center",
              rowGap: "1.25rem",
            }}
          >
            <span
              style={{
                width: "30%",
                textAlign: "right",
              }}
            >
              <MdFamilyRestroom
                color="#87879d"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  marginRight: ".375rem",
                }}
              />
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
              <label
                htmlFor="toggle__parents-or-nanny"
                className="switch"
                style={{
                  flex: 1,
                }}
              >
                <input
                  checked={isNanny}
                  onChange={(e) => {
                    setIsNanny(e.target.checked);
                    setIsParent(!e.target.checked);
                  }}
                  id="toggle__parents-or-nanny"
                  type="checkbox"
                />
                <span
                  className="slider round"
                  style={{
                    backgroundColor: "#a2d2ff",
                  }}
                ></span>
              </label>
            </div>
            <span
              style={{
                width: "30%",
                textAlign: "left",
              }}
            >
              <MdWoman
                color="#87879d"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
              />
            </span>
            <button
              className="btn hero-btn next-btn btn-secondary btn-confirm"
              style={{
                marginBottom: "1rem",
              }}
              onClick={() => {
                setToggleParentsOrNannyToggleModal(false);
                isParent
                  ? setToggleApplicationFormParentsModal(true)
                  : setToggleApplicationFormNannyModal(true);
              }}
            >
              Continue
            </button>
          </div>
        </div>
        <button
          className="close-modal-btn"
          onClick={() => setToggleParentsOrNannyToggleModal(false)}
        >
          <GrFormClose />
        </button>
        <div></div>
      </div>
    </div>
  );
};
export default ParentsOrNannyToggleModal;
