import { extraLinks, pageLinks, socialLinks } from '../data';
import { useGlobalContext } from './Context';

const Footer = () => {
  const { setToggleContactFormModal } = useGlobalContext();

  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.href} className="footer-link">
                {link.text}
              </a>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            style={{ cursor: 'pointer' }}
            className="footer-link footer-link__contact"
            onClick={() => setToggleContactFormModal(true)}
          >
            Contact
          </button>
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
                <i className={'fab fa-' + name}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
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
