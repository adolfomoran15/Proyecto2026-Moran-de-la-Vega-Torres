import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@components/Button";
import Input from "@components/Input";
import Card from "@components/Card";
import { getRecetas } from "@api/recetasApi";
import "@styles/Receta.scss";

const Receta = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [recetaActual, setRecetaActual] = useState(null);
  const [porciones, setPorciones] = useState(1);
  const [porcionesCalculadas, setPorcionesCalculadas] = useState(1);
  const [otrasRecetas, setOtrasRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorPorciones, setErrorPorciones] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await getRecetas();
        setPorciones(1);
        setPorcionesCalculadas(1);
        setErrorPorciones("");

        const encontrada = data.find((r) => r.id.toString() === id);
        setRecetaActual(encontrada || null);

        if (encontrada) {
          const otras = data.filter((r) => r.id !== encontrada.id);
          const indicesUnicos = new Set();

          while (indicesUnicos.size < 3 && indicesUnicos.size < otras.length) {
            const randomIndex = Math.floor(Math.random() * otras.length);
            indicesUnicos.add(randomIndex);
          }
          setOtrasRecetas(Array.from(indicesUnicos).map((i) => otras[i]));
        }

        setCargando(false);
      } catch (error) {
        console.error("Error al cargar la receta:", error);
        setCargando(false);
      }
    };
    cargarDatos();
  }, [id]);

  const handlePorcionesChange = (e) => {
    const valor = e.target.value;
    setPorciones(valor);
    if (valor === "" || valor <= 0) {
      setErrorPorciones("Ingresá un número mayor a cero.");
    } else if (valor > 60) {
      setErrorPorciones("La cantidad máxima es 60.");
    } else {
      setErrorPorciones("");
    }
  };

  const handleCalcularPorciones = (e) => {
    e.preventDefault();
    if (errorPorciones) return;
    setPorcionesCalculadas(Number(porciones));
  };

  if (cargando) {
    return <p className="cargando">Cargando receta...</p>;
  }

  if (!recetaActual) {
    return (
      <div className="pagina-calcular">
        <div id="img-receta" className="imagen-receta">
          <img
            src="/imagenes/pregunta.png"
            alt="signo de pregunta"
            id="imagen-pregunta"
          />
        </div>
        <div id="texto-receta">
          <span id="categoria-receta" className="etiqueta-plato">
            Sin categoría
          </span>
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
      </div>
    );
  }

  return (
    <div className="pagina-calcular">
      <Button
        type="button"
        className="boton-volver-recetas"
        onClick={() => navigate("/recetas")}
      >
        ← Volver a recetas
      </Button>

      <section id="informacion-recetas">
        <div id="img-receta" className="imagen-receta">
          <img
            src={`/imagenes/${recetaActual.imagen}`}
            alt={recetaActual.nombre}
            id={`imagen-${recetaActual.id}`}
          />
        </div>

        <div id="texto-receta">
          <span id="categoria-receta" className="etiqueta-plato">
            {recetaActual.categoria}
          </span>
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
            <form
              className="controles-calculadora"
              onSubmit={handleCalcularPorciones}
            >
              <Input
                type="number"
                id="input-porciones"
                label="Cantidad de porciones"
                value={porciones}
                onChange={handlePorcionesChange}
                error={errorPorciones}
                min="1"
                max="60"
                placeholder="Ingresá las porciones"
              />
              <Button
                type="submit"
                className="boton-principal boton-calcular"
                ariaLabel="Calcular ingredientes para el número de porciones elegido"
              >
                Calcular
              </Button>
            </form>
          </div>

          <div className="lista-ingredientes">
            <h5>Ingredientes</h5>
            <ul id="ingredientes">
              {recetaActual.ingredientes.map((ingr, num) => {
                let total =
                  Math.round(
                    porcionesCalculadas * parseFloat(ingr.cantidad) * 100,
                  ) / 100;
                if (isNaN(total)) {
                  total = "a gusto";
                }

                return (
                  <li key={num} aria-label={`ingrediente ${ingr.nombre}`}>
                    <input type="checkbox" id={`ingrediente-${num}`} />
                    <label htmlFor={`ingrediente-${num}`}>
                      <span className="cantidad-ingrediente">
                        {total} {ingr.unidad}
                      </span>
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
          <a
            href="/recetas"
            onClick={(e) => {
              e.preventDefault();
              navigate("/recetas");
            }}
            className="ver-todo"
          >
            Ver todo &rarr;
          </a>
        </div>
        <div id="recetas-cortas" className="grid-recetas">
          {otrasRecetas.map((receta) => (
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
    </div>
  );
};

export default Receta;
