import { NavLink } from "react-router-dom";

const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "Outfits", path: "/outfits" },
  { label: "Timeline", path: "/timeline" },
  { label: "Weekend", path: "/weekend" },
];

function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-header__logo">
        The Bergans
      </NavLink>

      <nav aria-label="Main navigation">
        <ul className="site-nav">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;