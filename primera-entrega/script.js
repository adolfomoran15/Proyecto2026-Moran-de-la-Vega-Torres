const recetas = [
    {
        id: "sopa-calabaza",
        nombre: "Sopa de calabaza",
        descripcion: "Cremosa, rápida y perfecta para el invierno.",
        categoria: "Sopas",
        teoria: "sopa",
        destacada: true,
        ingredientes: [
            { tipoIngrediente: 'calabaza', nombre: "Calabaza", cantidad: 150, unidad: "g" },
            { tipoIngrediente: 'cebolla', nombre: "Cebolla", cantidad: 0.25, unidad: "unidad" },
            { tipoIngrediente: 'caldo', nombre: "Caldo de verduras", cantidad: 150, unidad: "ml" },
            { tipoIngrediente: 'crema', nombre: "Crema de leche", cantidad: 30, unidad: "ml" },
            { tipoIngrediente: 'sal', nombre: "Sal y pimienta", cantidad: "a gusto", unidad: "" }
        ],
        minutos: 20,
        imagen: "imagenes/Sopa-Calabaza.jpg",
        pasos: [
            "Pelar la calabaza y cortarla en cubos pequeños; picar la cebolla.",
            "Rehogar la cebolla en una ollita con un chorrito de aceite hasta que transparente.",
            "Agregar la calabaza y el caldo caliente. Cocinar tapado a fuego medio hasta que la calabaza esté tierna (unos 12-15 min).",
            "Retirar del fuego y procesar con mixer o licuadora hasta lograr una textura homogénea.",
            "Incorporar la crema de leche, ajustar con sal y pimienta, y calentar 1 minuto más antes de servir."
        ],
        tipoPlato: "Entrada"
    },
    {
        id: "sandwich-milanesa",
        nombre: "Sándwich de milanesa",
        descripcion: "El clásico de fin de semana, a puro pan y milanesa.",
        categoria: "Sándwiches",
        teoria: "sandwich",
        destacada: true,
        ingredientes: [
            { tipoIngrediente: 'milanesa', nombre: "Milanesa de carne cocida", cantidad: 1, unidad: "unidad" },
            { tipoIngrediente: 'pan', nombre: "Pan francés o baguette", cantidad: 0.5, unidad: "unidad" },
            { tipoIngrediente: 'tomate', nombre: "Tomate", cantidad: 0.5, unidad: "unidad" },
            { tipoIngrediente: 'lechuga', nombre: "Hojas de lechuga", cantidad: 2, unidad: "hojas" },
            { tipoIngrediente: 'mayonesa', nombre: "Mayonesa", cantidad: 1, unidad: "cucharada" }
        ],
        minutos: 15,
        imagen: "imagenes/Sandwich-Milanesa.jpg",
        pasos: [
            "Cortar el pan al medio y tostar apenas la parte interior si se desea.",
            "Untar ambas caras de la miga con mayonesa.",
            "Lavar bien la lechuga y cortar el tomate en rodajas finas.",
            "Acomodar la milanesa tibia en la base, disponer encima el tomate y la lechuga, y cerrar el sándwich presionando ligeramente."
        ],
        tipoPlato: "Principal"
    },
    {
        id: "ensalada-cesar",
        nombre: "Ensalada César",
        descripcion: "Fresca, liviana y lista en menos de 15 minutos.",
        categoria: "Ensaladas",
        teoria: "ensalada",
        destacada: true,
        ingredientes: [
            { tipoIngrediente: 'lechuga', nombre: "Lechuga romana", cantidad: 0.25, unidad: "planta" },
            { tipoIngrediente: 'pollo', nombre: "Pechuga de pollo a la plancha", cantidad: 100, unidad: "g" },
            { tipoIngrediente: 'crutones', nombre: "Crutones de pan", cantidad: 25, unidad: "g" },
            { tipoIngrediente: 'queso', nombre: "Queso parmesano rallado", cantidad: 20, unidad: "g" },
            { tipoIngrediente: 'aderezo', nombre: "Aderezo César", cantidad: 1.5, unidad: "cucharadas" }
        ],
        minutos: 15,
        imagen: "imagenes/Ensalada-Cesar.jpg",
        pasos: [
            "Lavar y secar bien las hojas de lechuga romana, troceándolas con las manos en bocados medianos.",
            "Cortar el pollo ya cocido a la plancha en tiras o cubos.",
            "En un bol individual, disponer la lechuga como base, sumar el pollo y los crutones crocantes.",
            "Bañar con el aderezo César y coronar con las escamas o ralladura de queso parmesano."
        ],
        tipoPlato: "Entrada"
    },
    {
        id: "guiso-lentejas",
        nombre: "Guiso de lentejas",
        descripcion: "Casero y abundante, de esos que se cocinan a fuego lento.",
        categoria: "Guisos",
        teoria: "sopa",
        destacada: false,
        ingredientes: [
            { tipoIngrediente: 'lentejas', nombre: "Lentejas hidratadas", cantidad: 100, unidad: "g" },
            { tipoIngrediente: 'chorizo', nombre: "Chorizo colorado", cantidad: 0.25, unidad: "unidad" },
            { tipoIngrediente: 'carne', nombre: "Roast beef o panceta", cantidad: 60, unidad: "g" },
            { tipoIngrediente: 'cebolla', nombre: "Cebolla", cantidad: 0.25, unidad: "unidad" },
            { tipoIngrediente: 'papa', nombre: "Papa", cantidad: 0.5, unidad: "unidad" },
            { tipoIngrediente: 'pure', nombre: "Puré de tomate", cantidad: 75, unidad: "ml" },
            { tipoIngrediente: 'caldo', nombre: "Caldo de carne", cantidad: 200, unidad: "ml" }
        ],
        minutos: 60,
        imagen: "imagenes/Guiso-Lentejas.jpg",
        pasos: [
            "Cortar la carne en cubos pequeños, el chorizo en rodajas y picar la cebolla.",
            "En una olla pequeña, sellar la carne y el chorizo hasta que suelten sus jugos.",
            "Sumar la cebolla y saltear hasta que esté dorada.",
            "Agregar el puré de tomate, las lentejas bien enjuagadas y el caldo de carne.",
            "Tapar y cocinar a fuego bajo durante 30 minutos.",
            "Incorporar la papa cortada en cubos y continuar la cocción unos 15 minutos más hasta que la papa esté blanda y el caldo haya espesado."
        ],
        tipoPlato: "Principal"
    },
    {

        id: "torta-chocolate",
        nombre: "Torta de chocolate",
        descripcion: "Bizcochuelo húmedo con relleno y cobertura de chocolate.",
        categoria: "Postres",

        teoria: "sandwich",
        destacada: false,
        ingredientes: [
            { tipoIngrediente: 'harina', nombre: "Harina 0000", cantidad: 60, unidad: "g" },
            { tipoIngrediente: 'cacao', nombre: "Cacao amargo en polvo", cantidad: 20, unidad: "g" },
            { tipoIngrediente: 'azucar', nombre: "Azúcar", cantidad: 50, unidad: "g" },
            { tipoIngrediente: 'huevo', nombre: "Huevo", cantidad: 1, unidad: "unidad" },
            { tipoIngrediente: 'leche', nombre: "Leche", cantidad: 40, unidad: "ml" },
            { tipoIngrediente: 'aceite', nombre: "Aceite neutro", cantidad: 25, unidad: "ml" },
            { tipoIngrediente: 'relleno', nombre: "Dulce de leche o ganache para rellenar", cantidad: 75, unidad: "g" }
        ],
        minutos: 45,
        imagen: "imagenes/Torta-Chocolate.jpg",
        pasos: [
            "Precalentar el horno a 180°C y enmantecar un molde individual o pequeño.",
            "Batir el huevo con el azúcar en un recipiente hasta que la mezcla espume y se aclare.",
            "Agregar el aceite neutro y la leche, integrando suavemente.",
            "Tamizar la harina junto con el cacao e incorporarlos con movimientos envolventes para no bajar el batido.",
            "Volcar la mezcla en el molde y hornear durante 25 a 30 minutos (verificar pinchando con un palillo).",
            "Dejar enfriar bien, desmoldar, cortar al medio y rellenar/cubrir con el dulce de leche o ganache."
        ],
        tipoPlato: "Postre"
    },
    {

        id: "chipa",
        nombre: "Chipa",
        descripcion: "Pancitos de queso y almidón de mandioca, típicos del litoral.",
        categoria: "Panadería",

        teoria: "sandwich",
        destacada: false,
        ingredientes: [
            { tipoIngrediente: 'mandioca', nombre: "Fécula de mandioca", cantidad: 125, unidad: "g" },
            { tipoIngrediente: 'queso', nombre: "Queso de cáscara colorada", cantidad: 50, unidad: "g" },
            { tipoIngrediente: 'queso', nombre: "Queso tipo sardo picado", cantidad: 40, unidad: "g" },
            { tipoIngrediente: 'manteca', nombre: "Manteca pomada", cantidad: 25, unidad: "g" },
            { tipoIngrediente: 'huevo', nombre: "Huevo", cantidad: 0.5, unidad: "unidad" },
            { tipoIngrediente: 'leche', nombre: "Leche", cantidad: 25, unidad: "ml" },
            { tipoIngrediente: 'polvo', nombre: "Polvo de hornear", cantidad: 0.25, unidad: "cucharadita" }
        ],
        minutos: 30,
        imagen: "imagenes/Chipa.png",
        pasos: [
            "En un bol, integrar la fécula de mandioca, los quesos rallados/picados y el polvo de hornear.",
            "Hacer un hueco en el centro y colocar la manteca blanda, el medio huevo batido y un chorrito de leche.",
            "Unir los ingredientes con las manos agregando leche de a poco hasta formar una masa suave que no se pegue.",
            "Formar bollitos del tamaño de una nuez y disponerlos en una placa para horno sin amontonar.",
            "Llevar a horno bien caliente (200°C) durante 15 minutos hasta que estén levemente dorados por fuera."
        ],
        tipoPlato: "Entrada"
    },
    {

        id: "pollo-papas",
        nombre: "Pollo al horno con papas",
        descripcion: "Dorado y jugoso, con papas al horno como acompañamiento.",
        categoria: "Platos principales",

        teoria: "ensalada",
        destacada: false,


        ingredientes: [
            { tipoIngrediente: 'pollo', nombre: "Presa de pollo (pata/muslo o pechuga)", cantidad: 1, unidad: "unidad (apx 350g)" },
            { tipoIngrediente: 'papa', nombre: "Papas grandes", cantidad: 1, unidad: "unidad" },
            { tipoIngrediente: 'limon', nombre: "Limón", cantidad: 0.25, unidad: "unidad" },
            { tipoIngrediente: 'aceite', nombre: "Aceite de oliva", cantidad: 1, unidad: "cucharada" },
            { tipoIngrediente: 'condimentos', nombre: "Romero y tomillo", cantidad: "a gusto", unidad: "" },
            { tipoIngrediente: 'ajo', nombre: "Ajo picado", cantidad: 0.5, unidad: "diente" }
        ],
        minutos: 60,
        imagen: "imagenes/Pollo-Papas.png",
        pasos: [
            "Pelar la papa y cortarla en cuñas o rodajas medianas.",
            "Acomodar el pollo y las papas en una asadera individual para horno.",
            "Condimentar todo con el ajo picado, romero, tomillo, sal, pimienta y el jugo de limón.",
            "Rociar generosamente con aceite de oliva.",
            "Hornear a 200°C por 45-50 minutos, dando vuelta la presa de pollo a mitad de cocción para que se dore de ambos lados."
        ],
        tipoPlato: "Principal"
    },
    {

        id: "bife-chorizo",
        nombre: "Bife de chorizo a la parrilla",
        descripcion: "Un corte clásico, a punto, con su costrita por fuera.",
        categoria: "Parrilla",

        teoria: "ensalada",
        destacada: false,

        ingredientes: [
            { tipoIngrediente: 'carne', nombre: "Bife de chorizo de 3cm de grosor", cantidad: 250, unidad: "g" },
            { tipoIngrediente: 'condimentos', nombre: "Sal gruesa o parrillera", cantidad: "a gusto", unidad: "" },
            { tipoIngrediente: 'pimienta', nombre: "Pimienta negra recién molida", cantidad: "a gusto", unidad: "" }
        ],
        minutos: 25,
        imagen: "imagenes/Bife-Chorizo.jpg",
        pasos: [
            "Preparar la parrilla con brasas al rojo vivo y asegurar una temperatura media-alta (soportar 4-5 segundos la mano sobre el fierro).",
            "Salar el bife de ambos lados justo antes de llevarlo a la parrilla.",
            "Cocinar durante 12 a 15 minutos sin moverlo hasta que empiecen a asomar gotitas de jugo en la superficie.",
            "Dar vuelta con pinza (sin pinchar) y cocinar por 8 a 10 minutos más para lograr un punto medio.",
            "Dejar reposar 2 minutos sobre una tabla antes de cortar para que se redistribuyan los jugos."
        ],
        tipoPlato: "Principal"
    },
    {

        id: "provoleta",
        nombre: "Provoleta",
        descripcion: "Queso derretido a la parrilla, con orégano y aceite de oliva.",
        categoria: "Entradas",

        teoria: "sopa",
        destacada: false,

        ingredientes: [
            { tipoIngrediente: 'queso', nombre: "Queso provolone para parrilla", cantidad: 1, unidad: "rodaja (100g)" },
            { tipoIngrediente: 'condimentos', nombre: "Orégano seco", cantidad: 0.5, unidad: "cucharadita" },
            { tipoIngrediente: 'ajo', nombre: "Ají molido", cantidad: 0.25, unidad: "cucharadita" },
            { tipoIngrediente: 'aceite', nombre: "Aceite de oliva", cantidad: 0.5, unidad: "cucharada" },
            { tipoIngrediente: 'harina', nombre: "Harina (para rebozar suavemente)", cantidad: 0.5, unidad: "cucharada" }
        ],
        minutos: 10,
        imagen: "imagenes/Provoleta.jpg",
        pasos: [
            "Pasar la rodaja de provolone por harina por ambas caras sacudiendo el exceso (ayuda a crear la costra crocante).",
            "Colocar directamente sobre la parrilla bien caliente o provoletera de hierro.",
            "Cocinar unos 4-5 minutos hasta que la base esté dorada y crujiente, dar vuelta con espátula, condimentar con orégano, ají molido y aceite de oliva, y cocinar 3 minutos más."
        ],
        tipoPlato: "Entrada"
    },
    {

        id: "empanadas-carne",
        nombre: "Empanadas de carne",
        descripcion: "Repulgo casero, jugosas por dentro y doradas por fuera.",
        categoria: "Empanadas",

        teoria: "sandwich",
        destacada: false,

        ingredientes: [
            { tipoIngrediente: 'tapa', nombre: "Tapas de empanada", cantidad: 2, unidad: "unidades" },
            { tipoIngrediente: 'carne', nombre: "Carne picada o cortada a cuchillo", cantidad: 100, unidad: "g" },
            { tipoIngrediente: 'cebolla', nombre: "Cebolla", cantidad: 100, unidad: "g" },
            { tipoIngrediente: 'huevo', nombre: "Huevo duro picado", cantidad: 0.3, unidad: "unidad" },
            { tipoIngrediente: 'aceitunas', nombre: "Aceitunas verdes picadas", cantidad: 10, unidad: "g" },
            { tipoIngrediente: 'condimentos', nombre: "Comino y pimentón dulce", cantidad: "a gusto", unidad: "" }
        ],
        minutos: 40,
        imagen: "imagenes/Empanadas.jpg",
        pasos: [
            "Picar la cebolla fina y rehogarla en una sartén con grasa o aceite hasta que transparente.",
            "Agregar la carne picada, salpimentar y condimentar con comino y pimentón dulce. Cocinar solo hasta que pierda el color rojo.",
            "Retirar del fuego y dejar enfriar completamente el relleno en la heladera.",
            "Mezclar con el huevo duro y las aceitunas picadas.",
            "Repartir el relleno en las 2 tapas, humedecer los bordes, cerrar bien y hacer el repulgo.",
            "Pincelar con huevo batido y hornear a 220°C (horno bien fuerte) durante 12-15 minutos hasta dorar."
        ],
        tipoPlato: "Entrada"
    },
    {

        id: "locro",
        nombre: "Locro",
        descripcion: "Maíz, zapallo y carne, cocidos a fuego lento por horas.",
        categoria: "Platos tradicionales",

        teoria: "sopa",
        destacada: false,

        ingredientes: [
            { tipoIngrediente: 'maiz', nombre: "Maíz blanco partido (remojado)", cantidad: 75, unidad: "g" },
            { tipoIngrediente: 'porotos', nombre: "Porotos alubia (remojados)", cantidad: 50, unidad: "g" },
            { tipoIngrediente: 'zapallo', nombre: "Zapallo plomo / cabutia", cantidad: 125, unidad: "g" },
            { tipoIngrediente: 'carnes', nombre: "Panceta salada", cantidad: 40, unidad: "g" },
            { tipoIngrediente: 'carne', nombre: "Faldata o pechito de cerdo", cantidad: 80, unidad: "g" },
            { tipoIngrediente: 'chorizo', nombre: "Chorizo colorado", cantidad: 0.25, unidad: "unidad" }
        ],
        minutos: 180,
        imagen: "imagenes/Locro.png",
        pasos: [
            "Dejar en remojo el maíz blanco y los porotos desde la noche anterior en recipientes separados.",
            "En una olla gruesa, colocar el maíz y los porotos con abundante agua limpia y llevar a ebullición a fuego medio.",
            "Incorporar las carnes, la panceta cortada en tiras y el chorizo en rodajas.",
            "Desespumar la superficie a medida que rompa el hervor.",
            "Agregar el zapallo cortado en cubos chicos; a medida que avance la cocción se irá deshaciendo y le dará espesor al caldo.",
            "Cocinar a fuego muy bajo revolviendo frecuentemente con cuchara de madera durante 2 a 3 horas hasta lograr un guiso cremoso y espeso.",
            "Servir muy caliente con salsita picante (quiquirimichi) opcional por encima."
        ],
        tipoPlato: "Principal"
    },
    {

        id: "milanesas-pure",
        nombre: "Milanesas con puré",
        descripcion: "El combo de toda la vida, crocante y cremoso.",
        categoria: "Platos principales",

        teoria: "ensalada",
        destacada: false,

        ingredientes: [
            { tipoIngrediente: 'carne', nombre: "Nalga o bola de lomo para milanesa", cantidad: 150, unidad: "g" },
            { tipoIngrediente: 'huevo', nombre: "Huevo batido con provenzal", cantidad: 0.5, unidad: "unidad" },
            { tipoIngrediente: 'pan', nombre: "Pan rallado", cantidad: 75, unidad: "g" },
            { tipoIngrediente: 'papa', nombre: "Papas para el puré", cantidad: 250, unidad: "g" },
            { tipoIngrediente: 'leche', nombre: "Leche entera", cantidad: 30, unidad: "ml" },
            { tipoIngrediente: 'manteca', nombre: "Manteca", cantidad: 10, unidad: "g" }
        ],
        minutos: 35,
        imagen: "imagenes/Milanesas-Pure.png",
        pasos: [
            "Pelar las papas, cortarlas en trozos parejos y ponerlas a hervir en abundante agua con sal hasta que estén bien tiernas.",
            "Pasar la carne por el huevo batido condimentado con provenzal y luego empanar presionando con firmeza.",
            "Freír la milanesa en abundante aceite caliente (o hornear a fuego fuerte) hasta que esté dorada de ambos lados.",
            "Colar las papas calientes, pisarlas inmediatamente e incorporar la manteca y la leche tibia hasta lograr un puré cremoso.",
            "Servir la milanesa crocante acompañada por la porción de puré salpimentado a gusto."
        ],
        tipoPlato: "Principal"
    }
];
let posicionCarrusel = 0;
/**
 * Mostrar la receta en la pagina calcular-receta
 * @method mostrarRecetaIndividual
 */
const mostrarRecetaIndividual = () => {
    let contenidoPasos = "";
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idReceta = urlParams.get('receta');
    const infoReceta = recetas.find(receta => receta.id === idReceta);

    if (infoReceta == null) {
        document.getElementById('img-receta').innerHTML = `<img src="imagenes/pregunta.png" alt="signo de pregunta" id="imagen-pregunta">`;

        document.getElementById('categoria-receta').innerText = "Sin categoría";

        document.getElementById('nombre-plato').innerText = "Sin plato";

        document.getElementById('descripcion-receta').innerText = "Sin descripción";

        document.getElementById('tiempo').innerText = "No hay minutos";
    } else {
        document.getElementById('img-receta').innerHTML = `<img src="${infoReceta.imagen}" alt="${infoReceta.nombre}" id="imagen-${infoReceta.id}">`;

        document.getElementById('categoria-receta').innerText = infoReceta.categoria;

        document.getElementById('nombre-plato').innerText = infoReceta.nombre;

        document.getElementById('descripcion-receta').innerText = infoReceta.descripcion;

        document.getElementById('tiempo').innerText = `${infoReceta.minutos} minutos`;

        mostrarIngredientes(infoReceta.ingredientes);

        infoReceta.pasos.forEach((paso, num) => {
            contenidoPasos += `
        <li aria-label="paso ${num + 1} ${paso}">
            ${paso}
        </li>
    `;
        });

        document.getElementById('pasos').innerHTML = contenidoPasos;
    }
}

/**
 * Redirigir a la pagina de calcular receta
 * @method verReceta
 * @param {string} idReceta - Id de la receta que se quiere ver
 */
const verReceta = (idReceta) => {
    window.location.href = `calcular_receta.html?receta=${idReceta}`;
}

/**
 * Mostrar la cantidad de porciones que se estan calculando
 * @method cantidadPorciones
 */
const cantidadPorciones = () => {
    document.getElementById('cantidad').innerText = document.getElementById('input-porciones').value;
}

/**
 * Mostrar los ingredientes teniendo en cuenta la cantidad de porciones que ingresa el usuario
 * @method mostrarIngredientes
 * @param {Array} listIngredientes - Lista de los ingredientes de una receta
 */
const mostrarIngredientes = (listIngredientes) => {
    let contenido = "";
    const cantidad = document.getElementById('input-porciones').value;
    listIngredientes.forEach((ingr, num) => {
        let total = Math.round(cantidad * parseFloat(ingr.cantidad) * 100) / 100;

        if (isNaN(total)) {
            total = "a gusto";
        }

        contenido +=
            `
        <li aria-label="ingrediente ${ingr.nombre}">
            <input type="checkbox" id="ingrediente-${num}">
            <label for="ingrediente-${num}">
            <span class="cantidad-ingrediente">${total} ${ingr.unidad}</span>
            <span class="nombre-ingrediente"> ${ingr.nombre}</span>
            </label>
        </li>`;
    });
    document.getElementById('ingredientes').innerHTML = contenido;
}

/**
 * Mostrar otras recetas cortas de forma aleatoria
 * @method recetasCortas
 */
const recetasCortas = () => {
    let contenido = "";
    const idActual = new URLSearchParams(window.location.search).get('receta');
    const otras = recetas.filter(receta => receta.id !== idActual);
    const numerosUnicos = new Set();

    while (numerosUnicos.size < 3) {

        const numero = Math.floor(Math.random() * otras.length);
        numerosUnicos.add(numero);
    }

    const arrayTemp = Array.from(numerosUnicos);

    const [num1, num2, num3] = arrayTemp;

    const listaRecetas = [otras.at(num1), otras.at(num2), otras.at(num3)];

    listaRecetas.forEach((receta) => {
        contenido += `
                     <article class="receta-corta">
                        <div class="contenedor-imagen">
                            <img src="${receta.imagen}" alt="${receta.nombre}" id="imagen-corta-${receta.id}">
                        </div>
                        <h3>
                            ${receta.nombre}
                        </h3>
                        <p>
                            ${receta.minutos} minutos
                        </p>
                        <button type="button" class="boton-ver-receta" onclick="verReceta('${receta.id}')">
                        Ver receta</button>
                    </article>
                    `;
    });

    document.getElementById('recetas-cortas').innerHTML = contenido;
}


/**
 * Filtra las recetas por valores ingresados por el usuario(categoria, tiempo, teoria, ingredientes)
 * @method aplicarFiltros
 */
const aplicarFiltros = () => {
    let newRecetas = recetas;
    const categoria = document.getElementById('select-categoria').value;
    const tiempo = document.getElementById('select-tiempo').value;
    const teoria = document.getElementById('select-tipo-plato').value;
    const papa = document.getElementById('check-ing-papa').checked;
    const tomate = document.getElementById('check-ing-tomate').checked;
    const queso = document.getElementById('check-ing-queso').checked;
    const lechuga = document.getElementById('check-ing-lechuga').checked;
    const carne = document.getElementById('check-ing-carne').checked;
    const huevo = document.getElementById('check-ing-huevo').checked;
    const cebolla = document.getElementById('check-ing-cebolla').checked;
    const harina = document.getElementById('check-ing-harina').checked;

    if (categoria !== "todas") {
        newRecetas = newRecetas.filter(receta => receta.tipoPlato.toLowerCase() === categoria.toLowerCase());
    }

    if (tiempo !== "todos") {
        newRecetas = newRecetas.filter((receta) => {
            switch (tiempo) {
                case "rapido":
                    return receta.minutos < 30;

                case "medio":
                    return receta.minutos >= 30 && receta.minutos <= 60;

                case "largo":
                    return receta.minutos > 60;

                default:
                    return false;
            }
        });
    }
    if (teoria !== "todas") {
        newRecetas = newRecetas.filter(
            receta => receta.teoria.toLowerCase() === teoria.toLowerCase()
        );
    }

    const ingredientesArray = [];
    papa ? ingredientesArray.push("papa") : "";
    tomate ? ingredientesArray.push("tomate") : "";
    queso ? ingredientesArray.push("queso") : "";
    lechuga ? ingredientesArray.push("lechuga") : "";
    carne ? ingredientesArray.push("carne") : "";
    huevo ? ingredientesArray.push("huevo") : "";
    cebolla ? ingredientesArray.push("cebolla") : "";
    harina ? ingredientesArray.push("harina") : "";

    if (ingredientesArray.length > 0) {
        newRecetas = newRecetas.filter((receta) => {
            return receta.ingredientes.some((ingrediente) => {
                return ingredientesArray.includes(ingrediente.tipoIngrediente.toLowerCase());
            });
        });
    }
    mostrarRecetas(newRecetas, "grilla-recetas");
}


/**
 *  Muestra una lista de recetas en el catálogo
 * @method mostrarRecetas
 * @param {Array} lista - Lista de recetas que se desea mostrar
 * @param {string} idContenedor - Id del contenedor donde se mostrarán las recetas
 */
const mostrarRecetas = (lista, idContenedor) => {
    const contenedor = document.getElementById(idContenedor);
    contenedor.innerHTML = "";
    for (let i = 0; i < lista.length; i++) {
        const receta = lista[i];
        contenedor.innerHTML +=
            `<article class="tarjeta-receta">

            <img src="${receta.imagen}" alt="${receta.nombre}">

            <h3>${receta.nombre}</h3>

            <p>${receta.descripcion}</p>

            <button
                type="button"
                class="boton-ver-receta"
                onclick="verReceta('${receta.id}')">

                Ver receta

            </button>

            </article>`;
    }
};

/**
 * Carga las recetas en el catálogo
 * @method cargarRecetas
 */
const cargarRecetas = () => {
    const grilla = document.getElementById("grilla-recetas");
    if (grilla) {

        const searchWord = localStorage.getItem("searchWord");
        localStorage.removeItem("searchWord");
        let nuevaLista = recetas;

        if (searchWord) {
            nuevaLista = nuevaLista.filter(
                receta => receta.nombre.toLowerCase().includes(searchWord.toLowerCase())
            );
        }
        if (nuevaLista.length === 0) {
            alert("No encontramos recetas con esa búsqueda. Te mostramos todas.");
            nuevaLista = recetas;
        }
        mostrarRecetas(nuevaLista, "grilla-recetas");
    }
};

/**
 * Carga las recetas destacadas en el carrusel
 * @method CargarDestacadas
 */
const CargarDestacadas = () => {
    const lista = document.getElementById("lista-destacadas");

    if (lista) {

        const recetasdestacadas = recetas.filter(
            receta => receta.destacada === true
        );
        mostrarRecetas(recetasdestacadas, "lista-destacadas");
    }
};

/**
 * Mueve el carrusel de recetas destacadas
 * @method moverCarrusel
 * @param {string} direccion - Dirección en la que se moverá el carrusel
 */
const moverCarrusel = direccion => {
    const lista = document.getElementById("lista-destacadas");
    const ventana = document.getElementById("ventana-destacadas");
    const espacio = 24;
    const desplazamiento = ventana.offsetWidth + espacio;
    const cantidadRecetas = 3;

    if (direccion === "derecha") {
        posicionCarrusel++;
        if (posicionCarrusel >= cantidadRecetas) {
            posicionCarrusel = 0;
        }
    }
    if (direccion === "izquierda") {
        posicionCarrusel--;

        if (posicionCarrusel < 0) {
            posicionCarrusel = cantidadRecetas - 1;
        }
    }
    lista.style.transform = `translateX(-${posicionCarrusel * desplazamiento}px)`;
};

/**
 * filtra recetas por palabra
 * @method filtrarReceta
 */
const filtrarReceta = () => {
    const input = document.getElementById("input-buscar-recetas");
    const searchWord = input.value.trim();
    const soloLetras = /^[A-Za-zÀ-ÿñÑ\s]+$/;

    if (searchWord === "" || !soloLetras.test(searchWord)) {
        alert("Escribí solo letras para buscar una receta.");
        input.value = "";
        return;
    }

    localStorage.setItem("searchWord", searchWord);
    window.location.href = "recetas.html";
};

/**
 * Limpia todos los filtros y muestra nuevamente todas las recetas
 * @method limpiarFiltros
 */
const limpiarFiltros = () => {
    document.getElementById("select-categoria").value = "todas";
    document.getElementById("select-tipo-plato").value = "todas";
    document.getElementById("select-tiempo").value = "todos";

    document.getElementById("check-ing-papa").checked = false;
    document.getElementById("check-ing-tomate").checked = false;
    document.getElementById("check-ing-queso").checked = false;
    document.getElementById("check-ing-lechuga").checked = false;
    document.getElementById("check-ing-carne").checked = false;
    document.getElementById("check-ing-huevo").checked = false;
    document.getElementById("check-ing-cebolla").checked = false;
    document.getElementById("check-ing-harina").checked = false;
    localStorage.removeItem("searchWord");
    mostrarRecetas(recetas, "grilla-recetas");
};

/**
 * Vuelve al catálogo de recetas
 * @method volverRecetas
 */
const volverRecetas = () => {
    window.location.href = "recetas.html";
};


/**
 * Valida que la cantidad de porciones ingresada sea un número válido y mayor a cero.
 * Si no lo es, avisa al usuario con un alert y vacía el campo.
 * @method validarPorciones
 * @return {boolean} true si el valor es válido, false si no lo es
 */
const validarPorciones = () => {
    const input = document.getElementById('input-porciones');
    const valor = parseFloat(input.value);

    if (isNaN(valor) || valor <= 0) {
        alert("Ingresá una cantidad de porciones válida (un número mayor a cero).");
        input.value = "";
        return false;
    }
    if (valor > 60) {
        alert("La cantidad máxima de porciones permitida es 60.");
        input.value = "";
        return false;
    }
    return true;
};



/**
 * Valida el formulario de contacto. Si un campo es inválido, avisa con un alert
 * y vacía ese campo. Si todo está bien, confirma el envío y vacía el formulario.
 * @method enviarContacto
 */
const enviarContacto = () => {
    const nombre = document.getElementById('input-nombre');
    const email = document.getElementById('input-email');
    const mensaje = document.getElementById('input-mensaje');
    const soloLetras = /^[A-Za-zÀ-ÿñÑ\s]+$/;

    if (nombre.value === "" || !soloLetras.test(nombre.value)) {
        alert("Ingresá un nombre válido (solo letras).");
        nombre.value = "";
        return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert("Ingresá un email válido.");
        email.value = "";
        return;
    }
    if (mensaje.value === "") {
        alert("Escribí un mensaje.");
        return;
    }
    alert("¡Gracias por escribirnos!");
    nombre.value = "";
    email.value = "";
    mensaje.value = "";
};