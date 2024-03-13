import { extraLinks, pageLinks, socialLinks } from "../data";
import { useGlobalContext } from "./Context";
import whatsappBtn from "../images/WhatsAppButtonGreenMedium.svg";

const Footer = () => {
  const { setToggleContactFormModal, setToggleParentsOrNannyToggleModal } =
    useGlobalContext();

  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.slice(0, pageLinks.length - 2).map((link) => {
          return (
            <li
              key={link.id}
              style={{
                order:
                  link.text === "Apply"
                    ? 4
                    : link.text === "FAQs"
                    ? 5
                    : link.id,
              }}
            >
              <a
                onClick={
                  link.id === pageLinks.length - 2
                    ? () => setToggleParentsOrNannyToggleModal(true)
                    : null
                }
                href={link.id !== pageLinks.length - 2 ? link.href : null}
                className="footer-link"
                style={{
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                {link.text}
              </a>
            </li>
          );
        })}
        <li
          style={{
            order: 3,
          }}
        >
          {/* <button
            type="button"
            style={{ cursor: "pointer", fontWeight: "500" }}
            className="footer-link footer-link__contact"
            onClick={() => setToggleContactFormModal(true)}
          >
            Contact
          </button> */}
          <a
            href="#contact"
            className="footer-link"
            style={{
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            Contact
          </a>
        </li>
      </ul>
      <ul className="footer-nav footer-nav-contact">
        <li
          className="nav-item"
          style={{
            color: "#28283d",
            marginBottom: ".5rem",
            fontWeight: "500",
          }}
        >
          <i
            className="fas fa-phone"
            style={{
              position: "relative",
              top: ".125rem",
              marginRight: 0,
            }}
          ></i>{" "}
          +353 89 264 4059
        </li>
        <li className="nav-item">
          <a
            href="mailto:perfectmatchnanny@gmail.com"
            className="email-link"
            target="_blank"
            rel="noreferrer"
            style={{
              fontWeight: "500",
            }}
          >
            <i
              className="fas fa-envelope"
              style={{
                position: "relative",
                top: ".125rem",
              }}
            ></i>
            perfectmatchnanny@gmail.com
          </a>
        </li>
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, name } = link;
          return (
            <li
              style={{
                width: id === socialLinks.length ? "100%" : "18vw",
              }}
              key={id}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
                style={{
                  width: id === socialLinks.length ? "50vw" : "auto",
                }}
              >
                {id === socialLinks.length ? (
                  <img src={whatsappBtn} alt="WhatsApp button" />
                ) : name === "twitter" ? (
                  <i className={"fa-brands fa-x-" + name}></i>
                ) : (
                  <i className={"fab fa-" + name}></i>
                )}
              </a>
            </li>
          );
        })}
      </ul>
      <p
        className="copyright"
        style={{
          color: "#28283d",
        }}
      >
        &copy; Perfect Match
        <span id="date">{new Date().getFullYear()}</span>
        <br />
        All rights reserved
      </p>
      <ul className="footer-links">
        {extraLinks.map((link) => {
          return (
            <li key={link.id}>
              <a
                target="_blank"
                href={link.href}
                className="footer-link"
                rel="noreferrer"
              >
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
export default Footer;
