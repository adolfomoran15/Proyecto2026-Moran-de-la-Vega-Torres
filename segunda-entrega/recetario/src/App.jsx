import { Routes, Route } from "react-router-dom";
import Layout from "@components/Layout";
import Inicio from "@pages/Inicio";
import Recetas from "@pages/Recetas";
import Receta from "@pages/Receta";
import Contacto from "@pages/Contacto";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="recetas" element={<Recetas />} />
        <Route path="receta/:id" element={<Receta />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
    </Routes>
  );
};

export default App;
