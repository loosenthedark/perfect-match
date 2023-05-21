// import logo from '../images/logo.svg';
// import { useGlobalContext } from './Context';
import { pageLinks, socialLinks } from '../data';
import { useGlobalContext } from './Context';

const Sidebar = () => {
  const { toggleSidebar } = useGlobalContext();
  return (
    <aside className={toggleSidebar ? 'sidebar show-sidebar' : 'sidebar'}>
      <ul className="links">
        {pageLinks.map((link) => {
          const { id, icon, href, text } = link;
          return (
            <li key={id}>
              <a href={href}>
                {icon} {text}
              </a>{' '}
            </li>
          );
        })}
      </ul>
      <ul className="social-links">
        {socialLinks.map((link) => {
          const { id, href, name } = link;
          return (
            <li key={id}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <i className={'fab fa-' + name}></i>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
