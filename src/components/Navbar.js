import { pageLinks, socialLinks } from "../data";
import { useGlobalContext } from "./Context";

const Navbar = () => {
  const {
    toggleSidebar,
    setToggleSidebar,
    setToggleContactFormModal,
    setToggleApplicationFormNannyModal,
    setToggleApplicationFormParentsModal,
    setIsApplySubmenuShown,
    setToggleParentsOrNannyToggleModal,
    setIsNanny,
    setIsParent,
  } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={
              toggleSidebar
                ? () => {
                    setIsApplySubmenuShown(false);
                    setToggleSidebar(false);
                  }
                : () => {
                    setToggleSidebar(true);
                    setToggleParentsOrNannyToggleModal(false);
                    setToggleApplicationFormParentsModal(false);
                    setToggleApplicationFormNannyModal(false);
                    setToggleContactFormModal(false);
                    setIsNanny(false);
                    setIsParent(true);
                  }
            }
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.slice(0, pageLinks.length - 2).map((link, index) => {
            return index !== pageLinks.length - 3 ? (
              <li
                key={link.id}
                style={{
                  order:
                    link.text === "Apply" ? 2 : link.text === "FAQs" ? 5 : 0,
                }}
              >
                <a
                  role="button"
                  onClick={() => {
                    setToggleParentsOrNannyToggleModal(false);
                    setToggleApplicationFormParentsModal(false);
                    setToggleApplicationFormNannyModal(false);
                    setToggleContactFormModal(false);
                    setIsNanny(false);
                    setIsParent(true);
                  }}
                  href={link.href}
                  className="nav-link"
                >
                  {link.text}
                </a>
              </li>
            ) : (
              <li style={{ position: "relative", order: 4 }} key={link.id}>
                <a role="button" href={link.href} className="nav-link">
                  {link.text}
                </a>
                <ul
                  style={{
                    position: "fixed",
                    zIndex: "1",
                    backgroundColor: "#fafafa",
                  }}
                >
                  {pageLinks
                    .slice(pageLinks.length - 2, pageLinks.length)
                    .map((link) => {
                      return (
                        <li key={link.id}>
                          <a
                            role="button"
                            href={link.href}
                            className="nav-link"
                            onClick={
                              link.id === pageLinks.length - 1
                                ? () => {
                                    setToggleApplicationFormParentsModal(true);
                                    setToggleApplicationFormNannyModal(false);
                                    setToggleParentsOrNannyToggleModal(false);
                                    setToggleContactFormModal(false);
                                    setIsNanny(false);
                                    setIsParent(true);
                                  }
                                : () => {
                                    setToggleApplicationFormNannyModal(true);
                                    setToggleApplicationFormParentsModal(false);
                                    setToggleParentsOrNannyToggleModal(false);
                                    setToggleContactFormModal(false);
                                    setIsNanny(false);
                                    setIsParent(true);
                                  }
                            }
                          >
                            {link.text}
                          </a>
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
          {/* <li>
            <button
              style={{ cursor: "pointer" }}
              type="button"
              className="nav-link"
              onClick={() => setToggleContactFormModal(true)}
            >
              Contact
            </button>
          </li> */}
          <li
            style={{
              order: 3,
            }}
          >
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, name } = link;
            return name === "twitter" ? (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={"fa-brands fa-x-" + name}></i>
                </a>
              </li>
            ) : (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={"fab fa-" + name}></i>
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
