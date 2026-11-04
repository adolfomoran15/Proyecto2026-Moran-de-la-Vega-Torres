import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout.jsx';
import '@styles/main.scss';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);