import { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./topbar.css";
import logo from "../../images/Weekly_logo_colore_Weekly_logo_colore.png"

function toggle (current) {
  return !current
}

export default function Topbar() {
  const user = true;
  const [
    isDropdownOpen, setDropdownOpen
  ] = useState(false)
  const dropdownContent = (
    <div className='dropdown-content'>
      <NavLink to="/attualitaepolitica">
        Attualità e Politica
      </NavLink>
      <NavLink to="/internazionale">
        Internazionale
      </NavLink>
      <NavLink to="/societa">
        Società
      </NavLink>
      <NavLink to="/ambiente">
        Ambiente
      </NavLink>
      <NavLink to="/ambiente">
        Profili
      </NavLink>
      

      {/* <Link to="/write">
        La redazione
      </Link> */}
      <div className='rightCorner'>
        <p className='claim'>La settimana in breve</p>
        <i className="fab fa-facebook-f fa-lg"></i>
        <i className="fab fa-instagram fa-lg"></i>
      </div>
      
    </div>
  )

  function toggleDropdown () {
    setDropdownOpen(toggle)
  }

  const dropdownOpenClass = isDropdownOpen && 'open'
  const dropdownClass = `dropdown ${dropdownOpenClass}`

  return (
    <div>
      <div className='topbar'>
        <div className={dropdownClass}>
          <i 
            className="hamburger-menu fas fa-bars"
            onClick={toggleDropdown}
          />
          {dropdownContent}
        </div>
        <NavLink to="/">
          <img src={logo} alt="WEEKLY.it" />
        </NavLink>
      </div>
    </div>
  );
}