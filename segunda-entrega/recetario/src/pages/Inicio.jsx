import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "@components/Input";
import Button from "@components/Button";
import Card from "@components/Card";
import { getRecetas } from "@api/recetasApi";
import "@styles/Inicio.scss";

const soloLetras = /^[A-Za-zÀ-ÿñÑ\s]+$/;

const Inicio = () => {
  const [busqueda, setBusqueda] = useState("");
  const [errorBusqueda, setErrorBusqueda] = useState("");
  const [recetas, setRecetas] = useState([]);
  const [posicionCarrusel, setPosicionCarrusel] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await getRecetas();
        setRecetas(data);
      } catch (error) {
        console.error("No se pudieron cargar las recetas:", error);
      }
    };
    cargarDatos();
  }, []);

  const recetasDestacadas = recetas.filter((receta) => receta.destacada);

  const handleBusquedaChange = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);
    setErrorBusqueda(
      valor && !soloLetras.test(valor)
        ? "Escribí solo letras para buscar una receta."
        : "",
    );
  };

  const handleFiltrarReceta = (e) => {
    e.preventDefault();
    const searchWord = busqueda.trim();

    if (searchWord === "" || !soloLetras.test(searchWord)) {
      alert("Escribí solo letras para buscar una receta.");
      setBusqueda("");
      return;
    }

    localStorage.setItem("searchWord", searchWord);
    navigate("/recetas");
  };
  const moverCarrusel = (direccion) => {
    const cantidadRecetas = recetasDestacadas.length || 1;
    if (direccion === "derecha") {
      setPosicionCarrusel((prev) => (prev + 1) % cantidadRecetas);
    } else {
      setPosicionCarrusel(
        (prev) => (prev - 1 + cantidadRecetas) % cantidadRecetas,
      );
    }
  };
  return (
    <div>
      <section id="hero">
        <img
          className="fondo-hero"
          src="/imagenes/imagen_main_index.jpg"
          alt="imagen de fondo"
        />
        <div id="texto-hero">
          <h2>¿Qué cocinamos hoy?</h2>
          <p>Encontrá la receta perfecta para lo que tenés ganas de comer.</p>

          <form id="buscador" onSubmit={handleFiltrarReceta} noValidate>
            <Input
              id="input-buscar-recetas"
              label="Buscar recetas"
              value={busqueda}
              onChange={handleBusquedaChange}
              error={errorBusqueda}
              placeholder="Ej: milanesa, sopa de calabaza..."
              maxLength={40}
            />
            <Button type="submit" className="boton-principal boton-buscar">
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
              ariaLabel="Receta anterior"
              onClick={() => moverCarrusel("izquierda")}
              className="boton-flecha"
            >
              ‹
            </Button>

            <div id="ventana-destacadas">
              <div
                id="lista-destacadas"
                className={`posicion-${posicionCarrusel}`}
              >
                {recetasDestacadas.map((receta) => (
                  <Card
                    key={receta.id}
                    id={receta.id}
                    imagen={receta.imagen}
                    nombre={receta.nombre}
                    texto={receta.descripcion}
                  />
                ))}
              </div>
            </div>

            <Button
              type="button"
              ariaLabel="Receta siguiente"
              onClick={() => moverCarrusel("derecha")}
              className="boton-flecha"
            >
              ›
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Inicio;
