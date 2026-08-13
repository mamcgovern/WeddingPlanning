import { NavLink, Outlet } from "react-router-dom";

const outfitsLinks = [
  {
    label: "Overview",
    path: "/outfits",
    end: true,
  },
  {
    label: "Outfit Requirements",
    path: "/outfits/requirements",
  },
  {
    label: "Selected Outfits",
    path: "/outfits/selected",
  },
];

function Outfits() {
  return (
    <main>
      <nav
        className="weekend-nav"
        aria-label="Outfits"
      >
        {outfitsLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.end}
            className={({ isActive }) =>
              isActive
                ? "weekend-nav__link weekend-nav__link--active"
                : "weekend-nav__link"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </main>
  );
}

export default Outfits;