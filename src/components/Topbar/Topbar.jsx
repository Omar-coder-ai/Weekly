import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./topbar.css";
import logo from "../../images/Weekly_logo_colore_Weekly_logo_colore.png";

function toggle(current) {
  return !current;
}

export default function Topbar() {
  const user = true;
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownContent = (
    <div className="dropdown-content absolute top-0 z-10">
      <div className="text-center">
        <button onClick={() => setDropdownOpen(false)} className="rotate-45 sm:inline-block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <NavLink
        to="/attualitaepolitica"
        className="inactive"
        activeClassName="active"
      >
        Attualità e Politica
      </NavLink>
      <NavLink
        to="/internazionale"
        className="inactive"
        activeClassName="active"
      >
        Internazionale
      </NavLink>
      <NavLink to="/societa" className="inactive" activeClassName="active">
        Società
      </NavLink>
      <NavLink to="/ambiente" className="inactive" activeClassName="active">
        Ambiente
      </NavLink>
      <NavLink to="/profili" className="inactive" activeClassName="active">
        Profili
      </NavLink>

      {/* <Link to="/write">
        La redazione
      </Link> */}
      <div className="rightCorner">
        <p className="claim">La settimana in breve</p>
        <i className="fab fa-facebook-f fa-lg"></i>
        <i className="fab fa-instagram fa-lg"></i>
      </div>
    </div>
  );

  function toggleDropdown() {
    setDropdownOpen(toggle);
  }

  const dropdownOpenClass = isDropdownOpen && "open";
  const dropdownClass = `dropdown ${dropdownOpenClass}`;

  return (
    <div>
      <div className="topbar">
        <div className={dropdownClass}>
          <i className="hamburger-menu fas fa-bars" onClick={toggleDropdown} />
          {dropdownContent}
        </div>
        <NavLink to="/">
          <img src={logo} alt="WEEKLYweb.it" />
        </NavLink>
      </div>
    </div>
  );
}
