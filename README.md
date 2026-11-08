# Recetario S.E.S 🍲🥪🥗

_La teoría culinaria que todavía no resolvimos._

## Índice

- [Integrantes](#integrantes)
- [Descripción del proyecto](#descripción-del-proyecto)
- [Contenido de la página](#contenido-de-la-página)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Pasos de ejecución](#pasos-de-ejecución)
- [Cómo ver el proyecto](#cómo-ver-el-proyecto)

## Integrantes

- **Adolfo Moran de la Vega**
- **Franco Torres**

## Descripción del proyecto

**Recetario S.E.S** es un recetario web para encontrar qué cocinar y ajustar las cantidades según cuántos vayan a comer.
El nombre viene de una teoría culinaria que todavía no resolvimos. Según internet, todo plato puede considerarse una sopa, un sándwich o una ensalada.

## Contenido de la página

El sitio tiene cuatro páginas, a las que se llega desde el menú de arriba o desde el pie de página.

| Página   | Archivo (primera entrega) | Ruta (segunda entrega) | Qué contiene                                                                                     |
| -------- | ------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------|
| Inicio   | `index.html`              | `/`                    | Buscador de recetas y carrusel con las recetas destacadas                                        |
| Recetas  | `recetas.html`            | `/recetas`             | Catálogo con todas las recetas y sus filtros                                                     |
| Receta   | `calcular_receta.html`    | `/receta/:id`          | Foto, tiempo y porciones de la receta, calculadora, lista de ingredientes, pasos y otras recetas |
| Contacto | `contacto.html`           | `/contacto`            | Formulario de contacto y redes sociales                                                          |

## Tecnologías utilizadas

### Primera entrega

- HTML5
- CSS3
- JavaScript
- Git y GitHub Pages
- Figma

### Segunda entrega

- React
- Vite
- React Router DOM
- SASS (SCSS)
- JSON Server (mock de servicios)
- ESLint
- Git y GitHub
- Concurrently (para levantar la app y el mock juntos)


### Fuentes

- [Google Fonts](https://fonts.google.com/)

## Funcionalidades

| Funcionalidad             | Descripción                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------|
| Catálogo de recetas       | Listado filtrable por categoría, ingredientes, tipo (sopa, sándwich o ensalada) y tiempo    |
| Buscador                  | Busca recetas por nombre desde la página de inicio                                          |
| Recetas destacadas        | Carrusel con las recetas principales en la página de inicio                                 |
| Calculadora de porciones  | Recalcula las cantidades de ingredientes según comensales                                   |
| Checklist de ingredientes | Permite tildar ingredientes ya usados                                                       |
| Formulario de contacto    | Permite completar y enviar un mensaje                                                       |

## Estructura del proyecto

```
Proyecto2026-Moran-de-la-Vega-Torres/
├── primera-entrega/
│   ├── index.html
│   ├── recetas.html
│   ├── calcular_receta.html
│   ├── contacto.html
│   ├── style.css
│   ├── script.js
│   ├── imagenes/
│   ├── Sketch/
│   └── Mockup/
├── segunda-entrega/
│   └── recetario/
│       ├── public/
│       │   └── imagenes/          # favicon e imágenes públicas
│       ├── src/
│       │   ├── api/
│       │   │   └── recetasApi.js  # funciones fetch al servidor mock
│       │   ├── assets/            # logo_header.png
│       │   ├── components/        # Button, Card, Footer, Header, Input, Layout
│       │   ├── data/
│       │   │   └── db.json        # base de datos simulada (json-server)
│       │   ├── pages/             # Contacto, Inicio, Receta, Recetas
│       │   ├── styles/            # archivos .scss (incluye _variables.scss)
│       │   ├── utils/             # funciones auxiliares (validaciones)
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── .env
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── package.json
│       ├── package-lock.json
│       └── vite.config.js
└── README.md
```

- `imagenes/`: logo, favicon, íconos de redes y fotos de las recetas.
- `Sketch/`: boceto en papel (versión escritorio y celular).
- `Mockup/`: diseño en Figma (versión escritorio y celular).
- `segunda-entrega/recetario/`: versión en React del recetario.
  - `public/`: archivos estáticos (favicon e imágenes de las recetas).
  - `src/api/`: funciones que consultan el mock de servicios.
  - `src/assets/`: imágenes importadas desde el código.
  - `src/components/`: componentes reutilizables.
  - `src/pages/`: páginas de cada ruta.
  - `src/styles/`: archivos de estilos `.scss`.
  - `src/data/db.json`: datos del mock de servicios.
  - `src/utils/`: funciones auxiliares (validaciones).

## Pasos de ejecución

1. Clonar el repositorio:
   `git clone https://github.com/adolfomoran15/Proyecto2026-Moran-de-la-Vega-Torres.git`
2. Entrar a la carpeta del proyecto React:
   `cd Proyecto2026-Moran-de-la-Vega-Torres/segunda-entrega/recetario`
3. Instalar las dependencias:
   `npm install`
4. Crear un archivo `.env` dentro de `recetario` con:
   `VITE_BASE_URL="http://localhost:4000/"`
5. Levantar la aplicación y el mock de servicios:
   `npm start`
   - Solo la aplicación: `npm run dev` → http://localhost:5173
   - Solo el mock: `npm run server` → http://localhost:4000 (lee `src/data/db.json`)


## Cómo ver el proyecto

🔗 **Link a GitHub Pages:** [Recetario S.E.S](https://adolfomoran15.github.io/Proyecto2026-Moran-de-la-Vega-Torres/primera-entrega/index.html)

🔗 **Mockup (Figma):** [Recetario S.E.S (mockup)](https://top-grit-76826006.figma.site/)

La segunda entrega se ejecuta de forma local siguiendo los [pasos de ejecución](#pasos-de-ejecución).