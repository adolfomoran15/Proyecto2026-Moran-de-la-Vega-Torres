/**
 * Pasa un texto a minúsculas y le saca los acentos.
 * @method normalizarTexto
 * @param {string} texto - Texto a normalizar
 * @return {string} Texto en minúsculas y sin acentos
 */
export const normalizarTexto = (texto) =>
  texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");