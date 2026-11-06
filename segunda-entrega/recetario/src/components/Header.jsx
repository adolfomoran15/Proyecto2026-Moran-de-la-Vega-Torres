import { NavLink } from "react-router-dom";
import logo from "@assets/logo_header.png";
import "@styles/Header.scss";

const Header = () => {
  const claseLink = ({ isActive }) => (isActive ? "link-activo" : "");

  return (
    <header>
      <img src={logo} alt="Sándwich, Sopa o Ensalada" id="logo-sitio" />
      <h1 id="titulo-sitio">Recetario S.E.S</h1>
      <nav id="nav-principal">
        <NavLink to="/" end className={claseLink}>
          Inicio
        </NavLink>
        <NavLink to="/recetas" className={claseLink}>
          Recetas
        </NavLink>
        <NavLink to="/contacto" className={claseLink}>
          Contacto
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
