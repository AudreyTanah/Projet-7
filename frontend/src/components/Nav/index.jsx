import { NavLink } from "react-router-dom";
import "./index.css";

function Nav() {
  return (
    <nav className="headerNav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "headerNavLinkHome active" : "headerNavLinkHome"
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "headerNavLinkAbout active" : "headerNavLinkAbout"
        }
      >
        A Propos
      </NavLink>
    </nav>
  );
}

export default Nav;
