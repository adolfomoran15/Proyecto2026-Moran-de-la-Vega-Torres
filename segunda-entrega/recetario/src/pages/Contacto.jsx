import { useState } from "react";
import Input from "@components/Input";
import Button from "@components/Button";
import { postMensaje } from "@api/recetasApi";
import "@styles/Contacto.scss";

const soloLetras = /^[A-Za-zÀ-ÿñÑ\s]+$/;
const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const redesSociales = [
  {
    nombre: "instagram",
    alt: "Instagram",
    icono: "/imagenes/instagram-icon.png",
  },
  { nombre: "tiktok", alt: "Tiktok", icono: "/imagenes/tiktok-icon.png" },
  { nombre: "facebook", alt: "Facebook", icono: "/imagenes/facebook-icon.png" },
];

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMensaje, setErrorMensaje] = useState("");

  const handleNombre = (e) => {
    setNombre(e.target.value);
    setErrorNombre(
      soloLetras.test(e.target.value)
        ? ""
        : "Ingresá un nombre válido (solo letras).",
    );
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrorEmail(
      formatoEmail.test(e.target.value) ? "" : "Ingresá un email válido.",
    );
  };

  const handleMensaje = (e) => {
    setMensaje(e.target.value);
    setErrorMensaje(e.target.value.trim() === "" ? "Escribí un mensaje." : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !nombre ||
      !email ||
      !mensaje ||
      errorNombre ||
      errorEmail ||
      errorMensaje
    ) {
      alert("Completá todos los campos correctamente.");
      return;
    }
    try {
      await postMensaje({ nombre, email, mensaje });
      alert("¡Gracias por escribirnos!");
      setNombre("");
      setEmail("");
      setMensaje("");
    } catch (error) {
      console.error("No se pudo enviar el mensaje:", error);
      alert("No pudimos enviar tu mensaje. Intentá más tarde.");
    }
  };

  return (
    <div>
      <div>
        <h3>Contacto</h3>
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
