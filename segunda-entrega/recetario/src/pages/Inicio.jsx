import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@components/Input';
import Button from '@components/Button';
import Card from '@components/Card';
import { getRecetas } from '@api/recetasApi';
import '@styles/Inicio.scss';

const soloLetras = /^[A-Za-zÀ-ÿñÑ\s]+$([ñÑ\s]*[A-Za-zÀ-ÿñÑ\s]+)*$/;

const Inicio = () => {
    const [busqueda, setBusqueda] = useState('');
    const [errorBusqueda, setErrorBusqueda] = useState('');
    const [recetas, setRecetas] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const data = await getRecetas();
                setRecetas(data);
            } catch (error) {
                console.error('No se pudieron cargar las recetas:', error);
            }
        };
        cargarDatos();
    }, []);

    const recetasDestacadas = recetas.filter(receta => receta.destacada);

    const handleBusquedaChange = (e) => {
        const valor = e.target.value;
        setBusqueda(valor);
        if (errorBusqueda) setErrorBusqueda('');
    };

    const handleFiltrarReceta = (e) => {
        e.preventDefault();
        const searchWord = busqueda.trim();

        if (searchWord === '' || !soloLetras.test(searchWord)) {
            setErrorBusqueda('Escribí solo letras para buscar una receta.');
            setBusqueda('');
            return;
        }

        localStorage.setItem('searchWord', searchWord);
        navigate('/recetas');
    };

    return (
        <main id="contenido-principal" className="pagina-inicio">
            <section id="hero">
                <div id="texto-hero">
                    <h2>¿Qué cocinamos hoy?</h2>
                    <p>Encontrá la receta perfecta para lo que tenés ganas de comer.</p>
                    
                    <form id="buscador" onSubmit={handleFiltrarReceta} noValidate>
                        <Input
                            id="input-buscar-recetas"
                            label="Buscar recetas"
                            type="text"
                            name="buscar-recetas"
                            value={busqueda}
                            onChange={handleBusquedaChange}
                            error={errorBusqueda}
                            placeholder="Ej: milanesa, sopa de calabaza..."
                            maxLength={40}
                        />
                        <Button type="submit" id="boton-buscar" className="boton-buscar">
                            Buscar
                        </Button>
                    </form>
                </div>
            </section>

            <div id="contenedor-destacadas">
                <section id="recetas-destacadas">
                    <h2>Recetas destacadas</h2>
                    <div id="carrusel-destacadas">
                        <Button
                            type="button"
                            id="boton-flecha-izquierda"
                            aria-label="Receta anterior"
                            onClick={() => {}}
                            className="boton-flecha"
                        >
                            ‹
                        </Button>

                        <div id="ventana-destacadas">
                            <div id="lista-destacadas">
                                {recetasDestacadas.map((receta) => (
                                    <Card 
                                        key={receta.id} 
                                        receta={receta} 
                                        onClick={() => navigate(`/calcular_receta?receta=${receta.id}`)} 
                                    />
                                ))}
                            </div>
                        </div>

                        <Button
                            type="button"
                            id="boton-flecha-derecha"
                            aria-label="Receta siguiente"
                            onClick={() => {}}
                            className="boton-flecha"
                        >
                            ›
                        </Button>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Inicio;