import Input from '@components/Input';
import Button from '@components/Button';
import Card from '@components/Card';


const Inicio = () => {

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
                            onClick={() => moverCarrusel('izquierda')}
                            className="boton-flecha"
                        >
                            ‹
                        </Button>

                        <div id="ventana-destacadas">
                            <div 
                                id="lista-destacadas" 
                                style={{ transform: `translateX(-${posicionCarrusel * 100}%)` }}
                            >
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
                            onClick={() => moverCarrusel('derecha')}
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