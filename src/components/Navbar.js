import { pageLinks, socialLinks } from '../data';
import { useGlobalContext } from './Context';
// import logoNew from '../images/perfect-match-logo_original_compressed.png';

const Navbar = () => {
  const { toggleSidebar, setToggleSidebar, setToggleContactFormModal } =
    useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* <a
            href="#home"
            style={{ marginLeft: 'calc(50% - 80px)', marginTop: '2.5rem' }}
          > */}
            {/* <img src={logo} className="nav-logo" alt="Perfect Match logo" /> */}
            {/* <img
              src={logoNew}
              width="160"
              className="nav-logo"
              alt="Perfect Match Nanny Agency logo"
            /> */}
          {/* </a> */}
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={
              toggleSidebar
                ? () => setToggleSidebar(false)
                : () => setToggleSidebar(true)
            }
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
          <li>
            <button
              style={{ cursor: 'pointer' }}
              type="button"
              className="nav-link"
              onClick={() => setToggleContactFormModal(true)}
            >
              Contact
            </button>
          </li>
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, name } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={'fab fa-' + name}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
