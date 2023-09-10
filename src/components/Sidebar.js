import { AiOutlineMail } from "react-icons/ai";
import { pageLinks, socialLinks } from "../data";
import { useGlobalContext } from "./Context";
import { useState } from "react";

const Sidebar = () => {
  const {
    toggleSidebar,
    setToggleSidebar,
    setToggleContactFormModal,
    setToggleApplicationFormNannyModal,
    setToggleApplicationFormParentsModal,
  } = useGlobalContext();

  const [isApplySubmenuShown, setIsApplySubmenuShown] = useState(false);

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
                      ? "0"
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
                    ? () => setToggleApplicationFormNannyModal(true)
                    : id === pageLinks.length
                    ? () => setToggleApplicationFormParentsModal(true)
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
        <li>
          <button type="button" onClick={() => setToggleContactFormModal(true)}>
            <AiOutlineMail /> Contact
          </button>{" "}
        </li>
      </ul>
      <ul className="social-links">
        {socialLinks.map((link) => {
          const { id, href, name } = link;
          return (
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
