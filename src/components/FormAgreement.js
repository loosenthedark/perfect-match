import FormStepWrapper from "./FormStepWrapper";
import { useGlobalContext } from "./Context";
import logoBackground from "../images/perfect-match-logo_square_no-text.png";
import { LuFileSignature, LuHeartHandshake } from "react-icons/lu";
import { FaCcStripe } from "react-icons/fa";
import styled from "styled-components";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";

const SignedAgreementForm = ({
  firstNameParent,
  lastNameParent,
  phoneParent,
  emailParent,
  address1,
  address2,
  address3,
  address4,
  numberOfChildren,
  startDate,
  availability,
  otherRequirements,
}) => {
  const {
    inputFieldsChildren,
    temporaryOrPermanent,
    partOrFullTime,
    liveInOrOut,
    driver,
    ownCar,
    nonSmoker,
    cooking,
    isAgreementShown,
    setIsAgreementShown,
    isAgreementChecked,
    setIsAgreementChecked,
    isFinalScreenShown,
    stripeCheckout,
    clientSecret,
    setClientSecret,
    stripePaymentSubmitted,
  } = useGlobalContext();

  const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const { clientSecret, toggleStripeCheckout, setStripePaymentSubmitted } =
      useGlobalContext();

    useEffect(() => {
      // console.log(clientSecret);
      if (!stripe) {
        return;
      }
      if (!clientSecret) {
        return;
      }
      stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
        switch (paymentIntent.status) {
          case "succeeded":
            setMessage("Payment succeeded!");
            break;
          case "processing":
            setMessage("Your payment is processing.");
            break;
          // case "requires_payment_method":
          //   setMessage("Your payment was not successful, please try again.");
          //   break;
          default:
            setMessage("Please enter your payment details above");
            break;
        }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stripe]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }

      setIsLoading(true);

      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          // return_url: "http://localhost:8888",
        },
        redirect: "if_required",
      });

      // This point will only be reached if there is an immediate error when
      // confirming the payment. Otherwise, your customer will be redirected to
      // your `return_url`. For some payment methods like iDEAL, your customer will
      // be redirected to an intermediate site first to authorize the payment, then
      // redirected to the `return_url`.
      if (error?.type === "card_error" || error?.type === "validation_error") {
        setMessage(error.message);
      } else {
        // setMessage("An unexpected error occurred.");
        toggleStripeCheckout(false);
        setStripePaymentSubmitted(true);
      }

      setIsLoading(false);
    };

    const paymentElementOptions = {
      layout: "tabs",
    };

    return (
      <>
        {/* <LinkAuthenticationElement
          id="link-authentication-element"
          onChange={(e) => setEmail(e.target?.value)}
        /> */}
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          onClick={handleSubmit}
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
        {/* <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
          />
          <button
            disabled={processing || disabled || succeeded}
            type="submit"
            id="submit"
          >
            <span id="button-text">
              {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
            </span>
          </button>
          {error && (
            <div className="card-error" role="alert">
              {error}
            </div>
          )}
          <p className={succeeded ? "result-message" : "result-message hidden"}>
            Payment succeeded! See the result in your{" "}
            <a
              href="https://dashboard.stripe.com/test/payments"
              target="_blank"
              rel="noreferrer"
            >
              Stripe dashboard
            </a>
            .<br />
            Refresh the page to pay again.
          </p> */}
      </>
    );
  };

  const formatDateString = (dateString) => {
    const dateArray = dateString.split("-");
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
  };

  const { userEmailForStripeMetadata, userPhoneForStripeMetadata } =
    useGlobalContext();

  const createPaymentIntent = async () => {
    try {
      const data = await axios.post(
        "/.netlify/functions/create-payment-intent",
        JSON.stringify({
          payment_amount: 10000,
          email: userEmailForStripeMetadata,
          phone: userPhoneForStripeMetadata,
        })
      );
      // console.log(data);
      setClientSecret(data.data.clientSecret);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    createPaymentIntent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <FormStepWrapper>
      <input
        type="hidden"
        value={firstNameParent + " " + lastNameParent}
        name="Contact name:"
      />
      <input type="hidden" value={phoneParent} name="Contact phone:" />
      <input type="hidden" value={emailParent} name="Contact email:" />
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
          .sort((a, b) => new Date(a) - new Date(b))
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
            isAgreementShown && !isFinalScreenShown ? "visible" : "hidden",
        }}
      >
        Agreement
      </h3>
      {!stripeCheckout ? (
        <div className="form-row form-row__additional-requirements form-row__agreement">
          {!isAgreementShown ? (
            <LuFileSignature
              color="#ffb3d0"
              style={{
                width: "2.5rem",
                height: "2.5rem",
                marginBottom: ".75rem",
              }}
            />
          ) : !isFinalScreenShown ? (
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
          ) : !stripePaymentSubmitted ? (
            <FaCcStripe
              color="#ffb3d0"
              style={{
                width: "4rem",
                height: "auto",
                marginBottom: ".25rem",
              }}
            />
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
              display:
                isAgreementShown && !isFinalScreenShown ? "none" : "block",
            }}
          >
            {!isFinalScreenShown
              ? "Almost there!"
              : !stripePaymentSubmitted
              ? "Registration fee"
              : "Thank you!"}
          </h5>
          <p
            style={{
              color:
                !isAgreementShown || isFinalScreenShown ? "#87879d" : "#666",
              fontSize:
                !isAgreementShown || isFinalScreenShown ? ".95rem" : ".825rem",
              lineHeight: "1.4",
              marginBottom:
                !isAgreementShown || isFinalScreenShown ? ".375rem" : ".25rem",
              textAlign:
                !isAgreementShown || isFinalScreenShown ? "center" : "left",
            }}
          >
            {!isAgreementShown
              ? "Thanks for joining our agency. We look forward to working with you and finding your Perfect Match."
              : !isFinalScreenShown
              ? "In the event of us deciding to employ one of your nannies, we agree to settle our account in full within seven days of receiving your invoice."
              : !stripePaymentSubmitted
              ? ""
              : "We have received your application details and will be in contact with you soon."}
          </p>
          {!isAgreementShown ? (
            <p
              style={{
                color: "#87879d",
                fontSize: ".95rem",
                lineHeight: "1.4",
                textAlign: "center",
              }}
            >
              Please read and confirm the following agreement so we can begin
              our search for you and your family...
            </p>
          ) : !isFinalScreenShown ? (
            <p
              style={{
                color: "#666",
                fontSize: ".825rem",
                lineHeight: "1.4",
                textAlign: "left",
              }}
            >
              We confirm that we have read and are in agreement with the{" "}
              <a
                target="_blank"
                href="https://loosenthedark.tech/perfect-match-nanny-agency/terms-and-conditions/"
                rel="noreferrer"
              >
                <span
                  style={{
                    color: "#ffb3d0",
                    fontWeight: "500",
                  }}
                >
                  Terms and Conditions
                </span>
              </a>{" "}
              of the agency.
            </p>
          ) : !stripePaymentSubmitted ? (
            <p
              style={{
                color: "#87879d",
                fontSize: ".95rem",
                lineHeight: "1.4",
                textAlign: "center",
              }}
            >
              Please submit a registration fee of €100 (VAT included), which
              will be deducted from our placement fee if you employ one of our
              nannies.
            </p>
          ) : (
            ""
          )}
          {/* <button
          className="btn hero-btn next-btn btn-secondary"
          style={{
            width: "9.6875rem",
            display:
              isAgreementShown && !isAgreementChecked ? "inline-block" : "none",
          }}
          onClick={() => {
            setIsAgreementChecked(!isAgreementChecked);
          }}
        >
          Create signature
        </button> */}
          <div className="form-row form-row__additional-requirements form-row__agreement">
            <div
              className="slider-wrapper"
              style={{
                display:
                  isAgreementShown && !isFinalScreenShown ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                gap: ".5rem",
              }}
            >
              <label htmlFor="agreed" className="switch">
                <input
                  checked={isAgreementChecked}
                  id="agreed"
                  type="checkbox"
                  onChange={(e) => setIsAgreementChecked(e.target.checked)}
                />
                <span className="slider round"></span>
              </label>
              <span
                className="slider-label-additional slider-label-confirm"
                style={{ textAlign: "left" }}
              >
                CONFIRM
              </span>
            </div>
          </div>
          {/* <br /> */}
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
          {/* {openModal && (
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
        )} */}
          <div
            style={{
              marginTop: "1vh",
              display: !isAgreementShown ? "flex" : "none",
              justifyContent: "center",
            }}
          >
            <button
              className="btn hero-btn next-btn btn-secondary btn-confirm"
              onClick={() => setIsAgreementShown(true)}
            >
              Confirm agreement
            </button>
          </div>
        </div>
      ) : (
        <Wrapper>
          {clientSecret && (
            <Elements options={options} stripe={promise}>
              <CheckoutForm />
            </Elements>
          )}
        </Wrapper>
      )}
      <input
        type="hidden"
        value={isAgreementChecked ? "Yes" : "No"}
        name="Agreement confirmed?"
      />
    </FormStepWrapper>
  );
};

const Wrapper = styled.section`
  form {
    width: 30vw;
    min-width: 500px;
    align-self: center;
    box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
      0px 2px 5px 0px rgba(50, 50, 93, 0.1),
      0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    padding: 40px;
  }

  #payment-message {
    color: rgb(105, 115, 134);
    font-size: 16px;
    line-height: 20px;
    padding-top: 12px;
    text-align: center;
  }

  #payment-element {
    margin-bottom: 24px;
  }

  /* Buttons and links */
  button {
    background: #5469d4;
    font-family: Arial, sans-serif;
    color: #ffffff;
    border-radius: 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    width: 100%;
  }

  button:hover {
    filter: contrast(115%);
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  /* spinner/processing state, errors */
  .spinner,
  .spinner:before,
  .spinner:after {
    border-radius: 50%;
  }

  .spinner {
    color: #ffffff;
    font-size: 22px;
    text-indent: -99999px;
    margin: 0px auto;
    position: relative;
    width: 20px;
    height: 20px;
    box-shadow: inset 0 0 0 2px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }

  .spinner:before,
  .spinner:after {
    position: absolute;
    content: "";
  }

  .spinner:before {
    width: 10.4px;
    height: 20.4px;
    background: #5469d4;
    border-radius: 20.4px 0 0 20.4px;
    top: -0.2px;
    left: -0.2px;
    -webkit-transform-origin: 10.4px 10.2px;
    transform-origin: 10.4px 10.2px;
    -webkit-animation: loading 2s infinite ease 1.5s;
    animation: loading 2s infinite ease 1.5s;
  }

  .spinner:after {
    width: 10.4px;
    height: 10.2px;
    background: #5469d4;
    border-radius: 0 10.2px 10.2px 0;
    top: -0.1px;
    left: 10.2px;
    -webkit-transform-origin: 0px 10.2px;
    transform-origin: 0px 10.2px;
    -webkit-animation: loading 2s infinite ease;
    animation: loading 2s infinite ease;
  }

  @keyframes loading {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media only screen and (max-width: 600px) {
    form {
      width: 87.2vw;
      min-width: initial;
    }
  }
`;

export default SignedAgreementForm;
