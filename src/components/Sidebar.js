import { AiOutlineMail } from "react-icons/ai";
import { pageLinks, socialLinks } from "../data";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
  const {
    toggleSidebar,
    setToggleSidebar,
    // eslint-disable-next-line no-unused-vars
    setToggleContactFormModal,
    setToggleApplicationFormNannyModal,
    setToggleApplicationFormParentsModal,
    isApplySubmenuShown,
    setIsApplySubmenuShown,
  } = useGlobalContext();

  return (
    <aside className={toggleSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div
        className="social-links logo-text"
        onClick={() => {
          setToggleSidebar(false);
          setIsApplySubmenuShown(false);
        }}
      ></div>
      <ul className="links">
        {pageLinks.map((link) => {
          const { id, icon, href, text } = link;
          return (
            <li
              style={{
                display:
                  !isApplySubmenuShown &&
                  (id === pageLinks.length || id === pageLinks.length - 1)
                    ? "none"
                    : "list-item",
                order:
                  text === "Apply"
                    ? 2
                    : text === "Parents"
                    ? 3
                    : text === "Nanny"
                    ? 4
                    : text === "FAQs"
                    ? 5
                    : 0,
              }}
              className={
                id === pageLinks.length || id === pageLinks.length - 1
                  ? "submenu-link"
                  : ""
              }
              key={id}
            >
              <a
                role="button"
                style={{
                  paddingTop:
                    id === pageLinks.length || id === pageLinks.length - 1
                      ? ".775rem"
                      : id === 1
                      ? ".5vh"
                      : "2vh",
                  paddingBottom:
                    id === pageLinks.length || id === pageLinks.length - 1
                      ? ".775rem"
                      : "2vh",
                }}
                onClick={
                  id === pageLinks.length - 2
                    ? () => setIsApplySubmenuShown(!isApplySubmenuShown)
                    : id === pageLinks.length - 1
                    ? () => {
                        setToggleApplicationFormParentsModal(true);
                        setToggleSidebar(false);
                        setIsApplySubmenuShown(false);
                      }
                    : id === pageLinks.length
                    ? () => {
                        setToggleApplicationFormNannyModal(true);
                        setToggleSidebar(false);
                        setIsApplySubmenuShown(false);
                      }
                    : () => {
                        setToggleSidebar(false);
                        setIsApplySubmenuShown(false);
                      }
                }
                href={href}
              >
                {icon} {text}
              </a>{" "}
            </li>
          );
        })}
        <li
          style={{
            order: 1,
          }}
        >
          {/* <button type="button" onClick={() => setToggleContactFormModal(true)}>
            <AiOutlineMail /> Contact
          </button>{" "} */}
          <a
            role="button"
            style={{
              paddingTop: "2vh",
              paddingBottom: "2vh",
            }}
            onClick={() => {
              setToggleSidebar(false);
              setIsApplySubmenuShown(false);
            }}
            href="#contact"
          >
            <AiOutlineMail /> Contact
          </a>
        </li>
      </ul>
      <ul className="social-links">
        {socialLinks.map((link) => {
          const { id, href, name } = link;
          return name === "twitter" ? (
            <li key={id}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <i
                  className={"fa-brands fa-x-" + name}
                  style={{
                    minWidth: "1.5rem",
                  }}
                ></i>
              </a>
            </li>
          ) : (
            <li key={id}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <i
                  className={"fab fa-" + name}
                  style={{
                    minWidth: "1.5rem",
                  }}
                ></i>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
