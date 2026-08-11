import { NavLink, Outlet } from "react-router-dom";

const weekendLinks = [
  {
    label: "Overview",
    path: "/weekend",
    end: true,
  },
  {
    label: "Rehearsal",
    path: "/weekend/rehearsal",
  },
  {
    label: "Wedding Day",
    path: "/weekend/wedding-day",
  },
  {
    label: "Music",
    path: "/weekend/music",
  },
];

function Weekend() {
  return (
    <main>
      <nav
        className="weekend-nav"
        aria-label="Wedding weekend"
      >
        {weekendLinks.map((link) => (
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

export default Weekend;