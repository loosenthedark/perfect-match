import { extraLinks, pageLinks, socialLinks } from "../data";
import { useGlobalContext } from "./Context";

const Footer = () => {
  const { setToggleContactFormModal, setToggleApplicationFormParentsModal } =
    useGlobalContext();

  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.slice(0, pageLinks.length - 2).map((link) => {
          return (
            <li key={link.id}>
              <a
                onClick={
                  link.id === pageLinks.length - 2
                    ? () => setToggleApplicationFormParentsModal(true)
                    : null
                }
                href={link.id !== pageLinks.length - 2 ? link.href : null}
                className="footer-link"
                style={{
                  fontWeight: "500",
                }}
              >
                {link.text}
              </a>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            style={{ cursor: "pointer", fontWeight: "500" }}
            className="footer-link footer-link__contact"
            onClick={() => setToggleContactFormModal(true)}
          >
            Contact
          </button>
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
              marginRight: ".25rem",
              fontSize: "1rem",
            }}
          ></i>{" "}
          +353 87 243 6380
        </li>
        <li className="nav-item">
          <a
            href="mailto:perfectmatchnanny@gmail.com"
            className="email-link"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#28283d",
              fontWeight: "500",
            }}
          >
            <i
              className="fas fa-envelope"
              style={{
                marginRight: ".5rem",
                fontSize: "1rem",
                position: "relative",
                top: ".0625rem",
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
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={"fab fa-" + name}></i>
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
