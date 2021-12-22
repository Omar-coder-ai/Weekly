import { Link } from "react-router-dom";
import "./topbar.css";
import logo from "../../images/Weekly_logo_colore.png"


export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
            <Link className="link" to="/">
              <img className="logo" src={logo} alt="WEEKLY.it" />
            </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Storie
            </Link>
          </li>
          <li className="topListItem">A sud del mondo</li>
          <li className="topListItem">Cultura & Società</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              La redazione
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
          <div className="claim">Webzine in movimento</div>
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
      </div>
    </div>
  );
}