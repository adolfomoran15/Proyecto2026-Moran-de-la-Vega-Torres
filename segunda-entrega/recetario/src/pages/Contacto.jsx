import { useState } from 'react';
import Input from '@components/Input';
import Button from '@components/Button';
import { postMensaje } from '@api/recetasApi';
import '@styles/Contacto.scss';
 
const soloLetras = /^[A-Za-zÀ-ÿñÑ\s]+$/;
const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
const redesSociales = [
    { nombre: 'instagram', alt: 'Instagram', icono: '/imagenes/instagram-icon.png' },
    { nombre: 'tiktok', alt: 'Tiktok', icono: '/imagenes/tiktok-icon.png' },
    { nombre: 'facebook', alt: 'Facebook', icono: '/imagenes/facebook-icon.png' }
];
 
const validarCampo = (campo, valor) => {
    if (campo === 'nombre' && (valor.trim() === '' || !soloLetras.test(valor))) {
        return 'Ingresá un nombre válido (solo letras).';
    }
    if (campo === 'email' && !formatoEmail.test(valor)) {
        return 'Ingresá un email válido.';
    }
    if (campo === 'mensaje' && valor.trim() === '') {
        return 'Escribí un mensaje.';
    }
    return '';
};
 
const formularioVacio = { nombre: '', email: '', mensaje: '' };
 
const Contacto = () => {
    const [form, setForm] = useState(formularioVacio);
    const [errores, setErrores] = useState(formularioVacio);
    const [estadoEnvio, setEstadoEnvio] = useState('');
 
    const handleChange = (campo) => (e) => {
        const valor = e.target.value;
        setForm({ ...form, [campo]: valor });
        setErrores({ ...errores, [campo]: validarCampo(campo, valor) });
        setEstadoEnvio('');
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevosErrores = {
            nombre: validarCampo('nombre', form.nombre),
            email: validarCampo('email', form.email),
            mensaje: validarCampo('mensaje', form.mensaje)
        };
        setErrores(nuevosErrores);
 
        if (nuevosErrores.nombre || nuevosErrores.email || nuevosErrores.mensaje) {
            return;
        }
 
        try {
            await postMensaje(form);
            setEstadoEnvio('¡Gracias por escribirnos!');
            setForm(formularioVacio);
        } catch (error) {
            console.error('No se pudo enviar el mensaje:', error);
            setEstadoEnvio('No pudimos enviar tu mensaje. Intentá más tarde.');
        }
    };
 
    return (
        <div className="pagina-contacto">
            <div className="contenedor-texto">
                <h3>Contacto</h3>
                <p>
                    ¿Tenés alguna sugerencia, consulta o simplemente querés contar
                    cómo salió la receta? ¡Escribinos!
                </p>
            </div>
            <form className="contenedor-form" onSubmit={handleSubmit} noValidate>
                <Input
                    id="input-nombre"
                    label="Nombre:"
                    value={form.nombre}
                    onChange={handleChange('nombre')}
                    error={errores.nombre}
                    placeholder="Tu nombre"
                    maxLength={50}
                />
                <Input
                    id="input-email"
                    label="Email:"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    error={errores.email}
                    placeholder="tuemail@ejemplo.com"
                    maxLength={50}
                />
                <Input
                    id="input-mensaje"
                    label="Mensaje:"
                    value={form.mensaje}
                    onChange={handleChange('mensaje')}
                    error={errores.mensaje}
                    placeholder="Contanos qué te pareció"
                    maxLength={500}
                />
                <Button type="submit" className="boton-enviar">
                    Enviar
                </Button>
                {estadoEnvio && (
                    <p className="estado-envio" role="status">{estadoEnvio}</p>
                )}
            </form>
 
            <hr className="separador" />
 
            <div className="redes-sociales">
                <p>¡También podés encontrarnos en nuestras redes sociales!</p>
                <div className="redes-sociales-items">
                    {redesSociales.map(red => (
                        <article key={red.nombre} className={red.nombre}>
                            <img src={red.icono} alt={red.alt} className="icono-red-social" />
                            <div className="contenedor-texto">
                                <p>@recetario.ses</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};
 
export default Contacto;