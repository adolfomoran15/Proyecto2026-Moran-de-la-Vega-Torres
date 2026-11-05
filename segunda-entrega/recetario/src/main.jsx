import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout.jsx';
import Inicio from '@pages/Inicio.jsx';
import Recetas from '@pages/Recetas.jsx';
import Contacto from "@pages/Contacto.jsx";
import Receta from "@pages/Receta.jsx";
import '@styles/main.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path="recetas" element={<Recetas />} />
                    <Route path="contacto" element={<Contacto />} />
                    <Route path="receta/:id" element={<Receta />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);