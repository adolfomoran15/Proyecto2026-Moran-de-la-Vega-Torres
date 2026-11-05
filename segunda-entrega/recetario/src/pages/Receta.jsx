import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@components/Button';
import Input from '@components/Input';
import Card from '@components/Card';
import { getRecetas } from '@api/recetasApi';
import '@styles/Receta.scss';

const Receta = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [recetaActual, setRecetaActual] = useState(null);
    const [inputPorciones, setInputPorciones] = useState(1);
    const [porcionesCalculadas, setPorcionesCalculadas] = useState(1);
    const [otrasRecetas, setOtrasRecetas] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const cargarDatos = async () => {
            // Buscar la receta en la base de datos
            try {
                const data = await getRecetas();

                const encontrada = data.find(r => r.slug === id || r.id.toString() === id);
                setRecetaActual(encontrada || null);

                if (encontrada) {
                    const otras = data.filter(r => r.id !== encontrada.id);
                    const indicesUnicos = new Set();
                    
                    while (indicesUnicos.size < 3 && indicesUnicos.size < otras.length) {
                        const randomIndex = Math.floor(Math.random() * otras.length);
                        indicesUnicos.add(randomIndex);
                    }
                    setOtrasRecetas(Array.from(indicesUnicos).map(i => otras[i]));
                }

                setCargando(false);
            } catch (error) {
                console.error('Error al cargar la receta:', error);
                setCargando(false);
            }
        };
        cargarDatos();
    }, [id]);

    const handlePorcionesChange = (e) => {
        setInputPorciones(e.target.value);
    };

    const handleCalcularPorciones = (e) => {
        e.preventDefault();
        const valor = parseFloat(inputPorciones);

        // Validar que la cantidad sea un numero en el rango 1 a 60
        if (isNaN(valor) || valor < 1) {
            alert('La cantidad mínima de porciones es 1.');
            setInputPorciones(1);
            setPorcionesCalculadas(1);
            return;
        }
        if (valor > 60) {
            alert('La cantidad máxima de porciones permitida es 60.');
            setInputPorciones(60);
            setPorcionesCalculadas(60);
            return;
        }

        setPorcionesCalculadas(valor);
    };

    if (cargando) {
        return <p className="cargando">Cargando receta...</p>;
    }

    if (!recetaActual) {
        return (
            <main id="contenido-principal" className="pagina-calcular">
                <div id="img-receta" className="imagen-receta">
                    <img src="/imagenes/pregunta.png" alt="signo de pregunta" id="imagen-pregunta" />
                </div>
                <div id="texto-receta">
                    <span id="categoria-receta" className="etiqueta-plato">Sin categoría</span>
                    <h3 id="nombre-plato">Sin plato</h3>
                    <p id="descripcion-receta">Sin descripción</p>
                    <hr />
                    <div className="datos-adicionales">
                        <div className="dato">
                            <h6>TIEMPO</h6>
                            <p id="tiempo">No hay minutos</p>
                        </div>
                        <div className="dato">
                            <h6>CANTIDAD PORCIONES</h6>
                            <p id="cantidad">1</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main id="contenido-principal" className="pagina-calcular">
            <Button 
                type="button" 
                id="boton-volver-recetas" 
                onClick={() => navigate('/recetas')}
            >
                ← Volver a recetas
            </Button>

            <section id="informacion-recetas">
                <div id="img-receta" className="imagen-receta">
                    <img src={`/imagenes/${recetaActual.imagen}`} alt={recetaActual.nombre} id={`imagen-${recetaActual.id}`} />
                </div>

                <div id="texto-receta">
                    <span id="categoria-receta" className="etiqueta-plato">{recetaActual.categoria}</span>
                    <h3 id="nombre-plato">{recetaActual.nombre}</h3>
                    <p id="descripcion-receta">{recetaActual.descripcion}</p>

                    <hr />

                    <div className="datos-adicionales">
                        <div className="dato">
                            <h6>TIEMPO</h6>
                            <p id="tiempo">{recetaActual.minutos} minutos</p>
                        </div>
                        <div className="dato">
                            <h6>CANTIDAD PORCIONES</h6>
                            <p id="cantidad">{porcionesCalculadas}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div id="receta">
                <div className="columna-izquierda">
                    <div className="calculadora-porciones">
                        <h5>Calcular Porciones</h5>
                        <form className="controles-calculadora" onSubmit={handleCalcularPorciones}>
                            <Input
                                type="number"
                                id="input-porciones"
                                label="Cantidad de porciones"
                                value={inputPorciones}
                                onChange={handlePorcionesChange}
                                min="1"
                                max="60"
                                placeholder="Ingresá las porciones"
                            />
                            <Button type="submit" ariaLabel="Calcular ingredientes para el número de porciones elegido">
                                Calcular
                            </Button>
                        </form>
                    </div>

                    <div className="lista-ingredientes">
                        <h5>Ingredientes</h5>
                        <ul id="ingredientes">
                            {recetaActual.ingredientes.map((ingr, num) => {
                                let total = Math.round(porcionesCalculadas * parseFloat(ingr.cantidad) * 100) / 100;
                                if (isNaN(total)) {
                                    total = "a gusto";
                                }

                                return (
                                    <li key={num} aria-label={`ingrediente ${ingr.nombre}`}>
                                        <input type="checkbox" id={`ingrediente-${num}`} />
                                        <label htmlFor={`ingrediente-${num}`}>
                                            <span className="cantidad-ingrediente">{total} {ingr.unidad}</span>
                                            <span className="nombre-ingrediente"> {ingr.nombre}</span>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="columna-derecha">
                    <h5>Preparación</h5>
                    <ol id="pasos" className="lista-pasos">
                        {recetaActual.pasos.map((paso, num) => (
                            <li key={num} aria-label={`paso ${num + 1} ${paso}`}>
                                {paso}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            <hr className="separador" />

            <div className="otras-recetas">
                <div className="texto-superior">
                    <h5>Más Recetas</h5>
                    <a href="/recetas" onClick={(e) => { e.preventDefault(); navigate('/recetas'); }} className="ver-todo">
                        Ver todo &rarr;
                    </a>
                </div>
                <div id="recetas-cortas" className="grid-recetas">
                    {otrasRecetas.map((receta) => (
                        <Card
                            key={receta.id}
                            id={receta.slug}
                            imagen={receta.imagen}
                            nombre={receta.nombre}
                            texto={receta.descripcion}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Receta;