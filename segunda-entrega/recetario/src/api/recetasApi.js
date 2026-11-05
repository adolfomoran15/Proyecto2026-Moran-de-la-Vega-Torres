const BASE_URL = import.meta.env.VITE_BASE_URL;

// Obtener listado de RECETAS
export async function getRecetas() {
    const res = await fetch(`${BASE_URL}recetas`);

    if (!res.ok) throw new Error("Error al obtener el listado de recetas");

    return res.json();
}

// Obtener una RECETA por id
export async function getReceta(id) {
    const res = await fetch(`${BASE_URL}recetas/${id}`);

    if (!res.ok) throw new Error("Error al obtener la receta");

    return res.json();
}

// Enviar MENSAJE del formulario de contacto
export async function postMensaje(mensaje) {
    const res = await fetch(`${BASE_URL}mensajes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mensaje),
    });

    if (!res.ok) throw new Error("Error al enviar el mensaje");

    return res.json();
}