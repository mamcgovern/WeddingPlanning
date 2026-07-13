import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
  { path: "/", label: "Home" },

  {
    label: "What to Wear",
    children: [
      { path: "/bridesmaids", label: "Bridesmaids" },
      { path: "/groomsmen", label: "Groomsmen" },
      { path: "/brides-parents", label: "Parents of the Bride" },
      { path: "/grooms-parents", label: "Parents of the Groom" },
    ],
  },

  {
    label: "Events",
    children: [
      { path: "/bach", label: "Bach Party" },
      { path: "/wedding", label: "Wedding Weekend" },
    ],
  }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="header-wrapper">
      <nav className="navbar navbar-expand-lg navbar-dark green-header">
        <div className="container">
          <Link className="navbar-brand" to="/">
            The Bergans
          </Link>

          <div className="ms-auto position-relative" ref={ref}>
            <button
              className="btn btn-outline-light"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>

            {open && (
              <ul
                className="dropdown-menu show"
                style={{
                  position: "absolute",
                  right: 0,
                  minWidth: "260px",
                }}
              >
                {NAV_ITEMS.map((item) => {
                  // Normal page link
                  if (!item.children) {
                    return (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className={`dropdown-item ${
                            location.pathname === item.path ? "active" : ""
                          }`}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  }

                  // Section header with children
                  return (
                    <React.Fragment key={item.label}>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>

                      <li>
                        <h6 className="dropdown-header text-uppercase fw-bold">
                          {item.label}
                        </h6>
                      </li>

                      {item.children.map((child) => (
                        <li key={child.path}>
                          <Link
                            to={child.path}
                            className={`dropdown-item ps-4 ${
                              location.pathname === child.path ? "active" : ""
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </React.Fragment>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}