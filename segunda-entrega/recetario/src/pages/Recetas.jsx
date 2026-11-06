import { useState, useEffect } from "react";
import Button from "@components/Button";
import Card from "@components/Card";
import { getRecetas } from "@api/recetasApi";
import "@styles/Recetas.scss";

const Recetas = () => {
  const [recetas, setRecetas] = useState([]);
  const [recetasFiltradas, setRecetasFiltradas] = useState([]);
  const [categoria, setCategoria] = useState("todas");
  const [tipoPlatoTeoria, setTipoPlatoTeoria] = useState("todas");
  const [tiempo, setTiempo] = useState("todos");
  const [mensaje, setMensaje] = useState("");
  const [ingredientesSeleccionados, setIngredientesSeleccionados] = useState({
    papa: false,
    tomate: false,
    queso: false,
    lechuga: false,
    carne: false,
    huevo: false,
    cebolla: false,
    harina: false,
  });

  // Cargar recetas al iniciar el componente y verificar si hay una búsqueda previa en localStorage
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await getRecetas();
        setRecetas(data);

        const searchWord = localStorage.getItem("searchWord");
        localStorage.removeItem("searchWord");

        let listaInicial = data;
        if (searchWord) {
          listaInicial = data.filter((receta) =>
            receta.nombre.toLowerCase().includes(searchWord.toLowerCase()),
          );
          if (listaInicial.length === 0) {
            setMensaje(
              "No encontramos recetas con esa búsqueda. Te mostramos todas.",
            );
            listaInicial = data;
          }
        }
        setRecetasFiltradas(listaInicial);
      } catch (error) {
        console.error("No se pudieron cargar las recetas:", error);
      }
    };
    cargarDatos();
  }, []);

  const handleIngredienteChange = (e) => {
    const { name, checked } = e.target;
    setIngredientesSeleccionados((prev) => ({ ...prev, [name]: checked }));
  };

  const aplicarFiltros = () => {
    let resultado = [...recetas];

    // Filtro por categoría (tipoPlato)
    if (categoria !== "todas") {
      resultado = resultado.filter(
        (receta) => receta.tipoPlato.toLowerCase() === categoria.toLowerCase(),
      );
    }

    // Filtro por tiempo de preparación
    if (tiempo !== "todos") {
      resultado = resultado.filter((receta) => {
        if (tiempo === "rapido") return receta.minutos < 30;
        if (tiempo === "medio")
          return receta.minutos >= 30 && receta.minutos <= 60;
        if (tiempo === "largo") return receta.minutos > 60;
        return true;
      });
    }

    // Filtro por teoría (sopa, sándwich, ensalada)
    if (tipoPlatoTeoria !== "todas") {
      resultado = resultado.filter(
        (receta) =>
          receta.teoria.toLowerCase() === tipoPlatoTeoria.toLowerCase(),
      );
    }

    // Filtro por ingredientes seleccionados
    const activos = Object.keys(ingredientesSeleccionados).filter(
      (key) => ingredientesSeleccionados[key],
    );

    if (activos.length > 0) {
      resultado = resultado.filter((receta) =>
        receta.ingredientes.some((ing) =>
          activos.includes(ing.tipoIngrediente.toLowerCase()),
        ),
      );
    }

    setRecetasFiltradas(resultado);
  };

  const limpiarFiltros = () => {
    setCategoria("todas");
    setTipoPlatoTeoria("todas");
    setTiempo("todos");
    setIngredientesSeleccionados({
      papa: false,
      tomate: false,
      queso: false,
      lechuga: false,
      carne: false,
      huevo: false,
      cebolla: false,
      harina: false,
    });
    setMensaje("");
    setRecetasFiltradas(recetas);
  };

  return (
    <div className="pagina-recetas">
      <aside id="contenedor-filtros">
        <section id="filtros">
          <h2>Filtrar recetas</h2>

          <div id="filtro-categoria">
            <label htmlFor="select-categoria" className="titulo-filtro">
              Categoría
            </label>
            <select
              id="select-categoria"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="todas">Todas las categorías</option>
              <option value="Entrada">Entrada</option>
              <option value="Principal">Plato principal</option>
              <option value="Postre">Postre</option>
            </select>
          </div>

          <div id="filtro-ingrediente">
            <h3>Ingredientes</h3>
            {Object.keys(ingredientesSeleccionados).map((ing) => (
              <div key={ing}>
                <label htmlFor={`check-ing-${ing}`}>
                  {ing.charAt(0).toUpperCase() + ing.slice(1)}
                </label>
                <input
                  type="checkbox"
                  id={`check-ing-${ing}`}
                  name={ing}
                  checked={ingredientesSeleccionados[ing]}
                  onChange={handleIngredienteChange}
                />
              </div>
            ))}
          </div>

          <div id="filtro-teoria">
            <label htmlFor="select-tipo-plato" className="titulo-filtro">
              ¿Sopa, sándwich o ensalada?
            </label>
            <select
              id="select-tipo-plato"
              value={tipoPlatoTeoria}
              onChange={(e) => setTipoPlatoTeoria(e.target.value)}
            >
              <option value="todas">Todas</option>
              <option value="sopa">Sopa</option>
              <option value="sandwich">Sándwich</option>
              <option value="ensalada">Ensalada</option>
            </select>
          </div>

          <div id="filtro-tiempo">
            <label htmlFor="select-tiempo" className="titulo-filtro">
              Tiempo de preparación
            </label>
            <select
              id="select-tiempo"
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="rapido">Menos de 30 min</option>
              <option value="medio">Entre 30 y 60 min</option>
              <option value="largo">Más de 60 min</option>
            </select>
          </div>
        </section>

        <div id="botones-filtros">
          <Button
            type="button"
            className="boton-principal boton-aplicar-filtros"
            onClick={aplicarFiltros}
          >
            Aplicar filtros
          </Button>
          <Button
            type="button"
            className="boton-limpiar-filtros"
            onClick={limpiarFiltros}
          >
            Limpiar filtros
          </Button>
        </div>
      </aside>

      <div id="contenedor-catalogo">
        <section id="catalogo-recetas">
          <h2>Todas las recetas</h2>
          {mensaje && <p className="mensaje-busqueda">{mensaje}</p>}
          <div id="grilla-recetas">
            {recetasFiltradas.map((receta) => (
              <Card
                key={receta.id}
                id={receta.id}
                imagen={receta.imagen}
                nombre={receta.nombre}
                texto={receta.descripcion}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recetas;
