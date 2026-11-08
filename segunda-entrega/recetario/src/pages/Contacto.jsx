import { useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import { postMensaje } from "@api/recetasApi";
import { redesSociales } from "@data/redesSociales";
import {
  esTextoValido,
  esEmailValido,
  esMensajeValido,
} from "@utils/validaciones";
import "@styles/Contacto.scss";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");

  const handleNombre = (e) => {
    const valor = e.target.value;
    setNombre(valor);
    setErrorNombre(
      esTextoValido(valor) ? "" : "Ingresá un nombre válido (solo letras).",
    );
  };

  const handleEmail = (e) => {
    const valor = e.target.value;
    setEmail(valor);
    setErrorEmail(esEmailValido(valor) ? "" : "Ingresá un email válido.");
  };

  const handleMensaje = (e) => {
    const valor = e.target.value;
    setMensaje(valor);
    setErrorMensaje(esMensajeValido(valor) ? "" : "Escribí un mensaje.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombreValido = esTextoValido(nombre);
    const emailValido = esEmailValido(email);
    const mensajeValido = esMensajeValido(mensaje);

    if (!nombreValido || !emailValido || !mensajeValido) {
      alert("Revisá los campos: hay datos incompletos o inválidos.");

      if (!nombreValido) {
        setNombre("");
        setErrorNombre("Ingresá un nombre válido (solo letras).");
      }
      if (!emailValido) {
        setEmail("");
        setErrorEmail("Ingresá un email válido.");
      }
      if (!mensajeValido) {
        setMensaje("");
        setErrorMensaje("Escribí un mensaje.");
      }
      return;
    }

    try {
      await postMensaje({
        nombre: nombre.trim(),
        email,
        mensaje: mensaje.trim(),
      });
      alert("¡Gracias por escribirnos!");
      setNombre("");
      setEmail("");
      setMensaje("");
      setErrorNombre("");
      setErrorEmail("");
      setErrorMensaje("");
    } catch (error) {
      console.error("No se pudo enviar el mensaje:", error);
      alert("No pudimos enviar tu mensaje. Intentá más tarde.");
    }
  };

  return (
    <div>
      <div>
        <h2>Contacto</h2>
        <p>
          ¿Tenés alguna sugerencia, consulta o simplemente querés contar cómo
          salió la receta? ¡Escribinos!
        </p>
      </div>

      <form className="contenedor-form" onSubmit={handleSubmit} noValidate>
        <Input
          id="input-nombre"
          label="Nombre:"
          value={nombre}
          onChange={handleNombre}
          error={errorNombre}
          placeholder="Tu nombre"
          maxLength={50}
        />
        <Input
          id="input-email"
          type="email"
          label="Email:"
          value={email}
          onChange={handleEmail}
          error={errorEmail}
          placeholder="tuemail@ejemplo.com"
          maxLength={50}
        />
        <Input
          id="input-mensaje"
          label="Mensaje:"
          value={mensaje}
          onChange={handleMensaje}
          error={errorMensaje}
          placeholder="Contanos qué te pareció"
          maxLength={500}
        />
        <Button type="submit" className="boton-principal boton-enviar">
          Enviar
        </Button>
      </form>

      <hr className="separador" />

      <div className="redes-sociales">
        <p>¡También podés encontrarnos en nuestras redes sociales!</p>
        <div className="redes-sociales-items">
          {redesSociales.map((red) => (
            <article key={red.nombre}>
              <img src={red.icono} alt={red.alt} className="icono-red-social" />
              <p>@recetario.ses</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacto;
