import { useCookies } from "react-cookie";

const CookieConsent = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <div className="modal-overlay show-modal modal-overlay__cookie-consent">
      <div
        className="modal-container modal-container__application-form modal-container__cookie-consent"
        style={{
          position: "absolute",
          bottom: "0",
          maxWidth: "unset",
          gridTemplateColumns: "unset",
          paddingLeft: "unset",
          borderRadius: "unset",
          width: "100vw",
          top: "unset",
        }}
      >
        <div>
          <form
            form-name="contactForm"
            method="POST"
            className="form form__contact form__cookies"
            data-netlify="true"
            data-netlify-recaptcha="true"
            encType="multipart/form-data"
          >
            <div className="form-row form-row__cookies">
              <p className="para__cookies">
                We use cookies to enhance your user experience. By using our
                website, you agree to our use of cookies.{" "}
                <span className="link__learn-more">
                  <a
                    target="_blank"
                    href="https://loosenthedark.tech/perfect-match-nanny-agency/cookie-policy"
                    rel="noreferrer"
                    style={{
                      color: "#ffc8dd",
                      fontWeight: "700",
                    }}
                  >
                    Learn more
                  </a>
                  .
                </span>
              </p>
            </div>
            <div className="cookies-btn-wrapper">
              <div className="hero-btn-container">
                <button
                  type="button"
                  className="btn hero-btn"
                  onClick={giveCookieConsent}
                >
                  Accept
                </button>
              </div>
              <p className="para__learn-more">
                <a
                  target="_blank"
                  href="https://loosenthedark.tech/perfect-match-nanny-agency/cookie-policy"
                  rel="noreferrer"
                  style={{
                    color: "#ffc8dd",
                    fontWeight: "700",
                    letterSpacing: ".0125rem",
                  }}
                >
                  Learn more
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CookieConsent;
