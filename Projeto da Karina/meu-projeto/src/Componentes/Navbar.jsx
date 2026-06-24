import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/conteudos" ? "active" : ""}>
          <Link to="/conteudos">Conteúdos</Link>
        </li>
        <li className={location.pathname === "/sobre" ? "active" : ""}>
          <Link to="/sobre">Sobre Nós</Link>
        </li>
      </ul>

      <button className="btn-contato">
        Contato
      </button>
    </nav>
  );
}

export default Navbar;