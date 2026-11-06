const soloLetras = /^[A-Za-zÀ-ÿñÑ\s]+$/;
const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Indica si un texto no está vacío y tiene solo letras y espacios.
 * @method esTextoValido
 * @param {string} texto - Texto a validar
 * @return {boolean} true si el texto es válido
 */
export const esTextoValido = (texto) =>
  texto.trim() !== "" && soloLetras.test(texto);

/**
 * Indica si un texto tiene formato de email.
 * @method esEmailValido
 * @param {string} texto - Texto a validar
 * @return {boolean} true si el email es válido
 */
export const esEmailValido = (texto) => formatoEmail.test(texto);

/**
 * Indica si un mensaje tiene contenido más allá de espacios.
 * @method esMensajeValido
 * @param {string} texto - Mensaje a validar
 * @return {boolean} true si el mensaje no está vacío
 */
export const esMensajeValido = (texto) => texto.trim() !== "";