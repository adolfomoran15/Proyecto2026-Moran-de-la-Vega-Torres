import { useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import '@styles/Card.scss';

const Card = ({ id, imagen, nombre, texto }) => {
    const navigate = useNavigate();

    return (
        <article className="tarjeta-receta">
            <img src={`/imagenes/${imagen}`} alt={nombre} />
            <h3>{nombre}</h3>
            <p>{texto}</p>
            <Button className="boton-ver-receta" onClick={() => navigate(`/receta/${id}`)}>
                Ver receta
            </Button>
        </article>
    );
};

export default Card;