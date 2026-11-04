import { NavLink } from 'react-router-dom';
import '@styles/Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div id="nav-texto">
                <h6>S.E.S. cocina</h6>
                <p>La cocina no discute teorías, las prueba.</p>
            </div>
            <nav id="nav-sitio">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="/recetas">Recetas</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
            </nav>
        </footer>
    );
};

export default Footer;