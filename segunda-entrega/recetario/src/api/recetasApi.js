const API_URL = 'http://localhost:3000';

/**
 * Obtiene el listado completo de recetas desde el servidor.
 * @returns {Promise<Array>} Array de recetas.
 */
export const getRecetas = async () => {
    try {
        const response = await fetch(`${API_URL}/recetas`);
        if (!response.ok) {
            throw new Error('No se pudo obtener el listado de recetas.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error en getRecetas:', error);
        throw error;
    }
};

/**
 * Obtiene una receta específica por su id.
 * @param {string|number} id - ID de la receta.
 * @returns {Promise<Object>} Objeto de la receta encontrada.
 */
export const getRecetaById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/recetas/${id}`);
        if (!response.ok) {
            throw new Error(`No se encontró la receta con id: ${id}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error en getRecetaById (${id}):`, error);
        throw error;
    }
};

/**
 * Envía un mensaje de contacto al servidor.
 * @param {Object} mensaje - Objeto con los datos del mensaje.
 * @returns {Promise<Object>} Respuesta del servidor.
 */
export const postMensaje = async (mensaje) => {
    try {
        const response = await fetch(`${API_URL}/mensajes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mensaje),
        });
        if (!response.ok) {
            throw new Error('No se pudo enviar el mensaje.');
        }
        return await response.json();
    } catch (error) {
        console.error('Error en postMensaje:', error);
        throw error;
    }
};