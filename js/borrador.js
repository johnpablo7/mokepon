const subtitulo = document.getElementById("subtitulo");
const botonSeleccionarMascotaJugador = document.getElementById(
  "boton-seleccionar-mascota"
);
const botonReiniciarJuego = document.getElementById("boton-reiniciar");
const mascota_jugador = document.getElementById("mascota-jugador");
const mascota_enemigo = document.getElementById("mascota-enemigo");
const contenedorBotonesDeAtaque = document.getElementById(
  "contenedor-boton-ataque"
);
const seccionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);
const seccionAtaque = document.getElementById("seleccionar-ataque");
const seccionReiniciar = document.getElementById("reiniciar");
const imgSrcJugador = document.getElementById("img-miniatura-jugador");
const imgSrcEnemigo = document.getElementById("img-miniatura-enemigo");
const seccionMensajes = document.getElementById("mensajes");
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
const seccion_mensaje = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedor-de-tarjetas");

let botones = [];
let mokepones = [];
let opcionDeMokepones;
let ataqueJugador = [];
let ataqueEnemigo = [];
let inputhipodoge;
let inputcapipepo;
let inputratigueya;
let inputlangostelvis;
let inputtucapalma;
let inputpydos;
let mascotaElecta;
let tipoAtaqueJugador;
let tipoAtaqueEnemigo;

let ataquesGuardadosJugador;
let ataquesMokepon;
let ataquesMokeponJugador = [];
let ataquesMokeponEnemigo;
let ataqueJugadorIcono = [];
let ataqueEnemigoIcono = [];
let ataqueAleaEnemigo;
let indexAtaquesJugador;
let indexAtaquesEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let contador = 0;
//---------Creamos nuestra clase Mokepon
class Mokepon {
  constructor(nombre, foto, vida, tipo) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.tipo = tipo;
    this.ataques = [];
  }
}
//-------Creamos nuestros objetos de la clase Mokepon, con sus 3 atributos
let hipodoge = new Mokepon(
  "Hipodoge",
  "https://raw.githubusercontent.com/platzi/curso-programacion-basica/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_hipodoge_attack.png",
  5,
  "Agua"
);
let capipepo = new Mokepon(
  "Capipepo",
  "https://raw.githubusercontent.com/platzi/curso-programacion-basica/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_capipepo_attack.png",
  5,
  "Tierra"
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "https://raw.githubusercontent.com/platzi/curso-programacion-basica/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_ratigueya_attack.png",
  5,
  "Fuego"
);
let langostelvis = new Mokepon(
  "Langostelvis",
  "https://raw.githubusercontent.com/platzi/curso-programacion-basica/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_langostelvis_attack.png",
  5,
  "Fuego"
);
let tucapalma = new Mokepon(
  "Tucapalma",
  "https://raw.githubusercontent.com/platzi/curso-programacion-basica/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_tucapalma_attack.png",
  5,
  "Tierra"
);
let pydos = new Mokepon(
  "Pydos",
  "https://raw.githubusercontent.com/platzi/curso-programacion-basica/59-detalles-finales-again/programar/mokepon/assets/mokepons_mokepon_pydos_attack.png",
  5,
  "Agua"
);

hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" }
);

capipepo.ataques.push(
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" }
);

ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" }
);
pydos.ataques.push(
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" }
);

tucapalma.ataques.push(
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" }
);

langostelvis.ataques.push(
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "🔥", id: "boton-fuego", claseEstilos: "fuego" },
  { nombre: "💧", id: "boton-agua", claseEstilos: "agua" },
  { nombre: "🌱", id: "boton-tierra", claseEstilos: "tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos);

function iniciarJuego() {
  seccionAtaque.style.display = "none";
  seccionMensajes.style.display = "none";
  seccionReiniciar.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = ` <input type="radio" name="mascota" id="${mokepon.nombre}" value="${mokepon.nombre}">
        <label for="${mokepon.nombre}" class="tarjeta-mokepon">
            <p>${mokepon.nombre}</p> 
            <img src="${mokepon.foto}" alt="${mokepon.nombre}">
        </label> `;

    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputhipodoge = document.getElementById("Hipodoge");
    inputcapipepo = document.getElementById("Capipepo");
    inputratigueya = document.getElementById("Ratigueya");
    inputlangostelvis = document.getElementById("Langostelvis");
    inputtucapalma = document.getElementById("Tucapalma");
    inputpydos = document.getElementById("Pydos");
  });

  botonSeleccionarMascotaJugador.addEventListener(
    "click",
    seleccionarMascotaJugador
  );

  botonReiniciarJuego.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  let indicador = 0;
  if (
    inputhipodoge.checked ||
    inputcapipepo.checked ||
    inputratigueya.checked ||
    inputlangostelvis.checked ||
    inputtucapalma.checked ||
    inputpydos.checked
  ) {
    seccionSeleccionarMascota.style.display = "none";
    seccionAtaque.style.display = "flex";
    indicador = 1;
  }

  if (inputhipodoge.checked) {
    mascota_jugador.innerHTML = inputhipodoge.id;
    mascotaElecta = inputhipodoge.id;
    tipoAtaqueJugador = hipodoge.tipo;
    imgSrcJugador.src = hipodoge.foto;
    ataquesGuardadosJugador = hipodoge.ataques;
  } else if (inputcapipepo.checked) {
    mascota_jugador.innerHTML = inputcapipepo.id;
    mascotaElecta = inputcapipepo.id;
    tipoAtaqueJugador = capipepo.tipo;
    imgSrcJugador.src = capipepo.foto;
    ataquesGuardadosJugador = capipepo.ataques;
  } else if (inputratigueya.checked) {
    mascota_jugador.innerHTML = inputratigueya.id;
    mascotaElecta = inputratigueya.id;
    tipoAtaqueJugador = ratigueya.tipo;
    imgSrcJugador.src = ratigueya.foto;
    ataquesGuardadosJugador = ratigueya.ataques;
  } else if (inputlangostelvis.checked) {
    mascota_jugador.innerHTML = inputlangostelvis.id;
    mascotaElecta = inputlangostelvis.id;
    tipoAtaqueJugador = langostelvis.tipo;
    imgSrcJugador.src = langostelvis.foto;
    ataquesGuardadosJugador = langostelvis.ataques;
  } else if (inputtucapalma.checked) {
    mascota_jugador.innerHTML = inputtucapalma.id;
    mascotaElecta = inputtucapalma.id;
    tipoAtaqueJugador = tucapalma.tipo;
    imgSrcJugador.src = tucapalma.foto;
    ataquesGuardadosJugador = tucapalma.ataques;
  } else if (inputpydos.checked) {
    mascota_jugador.innerHTML = inputpydos.id;
    mascotaElecta = inputpydos.id;
    tipoAtaqueJugador = pydos.tipo;
    imgSrcJugador.src = pydos.foto;
    ataquesGuardadosJugador = pydos.ataques;
  } else {
    alert("Elige una opción");
    seccionAtaque.style.display = "none";
    seccionSeleccionarMascota.style.display = "flex";
  }
  if (indicador === 1) {
    elegirMascotaEnemigo();
  }
}
function tiposAtaques() {
  /*-----------COMPARA CUANDO FUEGO ES MAYOT QUE TIERRA-----------*/
  if (tipoAtaqueJugador === "Fuego" && tipoAtaqueEnemigo === "Tierra") {
    ataquesGuardadosJugador.push({
      nombre: "🔥",
      id: "boton-fuego",
      claseEstilos: "fuego",
    });

    orderAtaques(ataquesGuardadosJugador);
    console.log(mascotaElecta);
  } else if (tipoAtaqueJugador === "Tierra" && tipoAtaqueEnemigo === "Agua") {
    /*-----------COMPARA CUANDO TIERRA ES MAYOT QUE AGUA-----------*/
    ataquesGuardadosJugador.push({
      nombre: "🌱",
      id: "boton-tierra",
      claseEstilos: "tierra",
    });

    orderAtaques(ataquesGuardadosJugador);
    console.log(mascotaElecta);
  } else if (tipoAtaqueJugador === "Agua" && tipoAtaqueEnemigo === "Fuego") {
    /*-----------COMPARA CUANDO AGUA ES MAYOT QUE FUEGO-----------*/
    ataquesGuardadosJugador.push({
      nombre: "💧",
      id: "boton-agua",
      claseEstilos: "agua",
    });

    orderAtaques(ataquesGuardadosJugador);
    console.log(mascotaElecta);
  }

  botonesAtaquesDelJugador(mascotaElecta);
  secuenciaAtaqueJugador();
}

function orderAtaques(array) {
  array.sort((nombre1, nombre2) => {
    if (nombre1.nombre < nombre2.nombre) {
      return 1;
    } else if (nombre1.nombre > nombre2.nombre) {
      return -1;
    } else return 0;
  });
}

function botonesAtaquesDelJugador(mascotaElecta) {
  for (let i = 0; i < mokepones.length; i++) {
    if (mokepones[i].nombre === mascotaElecta) {
      ataquesMokeponJugador = mokepones[i].ataques;
    }
  }
  ataquesMokeponJugador.forEach((ataque) => {
    ataquesMokepon = `<button id="${ataque.id}" class="boton-de-ataque BAtaque ${ataque.claseEstilos}">${ataque.nombre}</button>`;
    contenedorBotonesDeAtaque.innerHTML += ataquesMokepon;
  });

  botones = document.querySelectorAll(".BAtaque");
}

function elegirMascotaEnemigo() {
  let ataqueAleatorio = aleatorio(0, mokepones.length - 1);

  mascota_enemigo.innerHTML = mokepones[ataqueAleatorio].nombre;
  tipoAtaqueEnemigo = mokepones[ataqueAleatorio].tipo;
  imgSrcEnemigo.src = mokepones[ataqueAleatorio].foto;

  /*------Guardaos  los ataques del mokepon en la variable ataquesMokeponEnemigo */
  ataquesMokeponEnemigo = mokepones[ataqueAleatorio].ataques;
  tiposAtaques();
}

function secuenciaAtaqueJugador() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO");
        ataqueJugadorIcono.push("FUEGO <i class='fa-solid fa-fire'></i>");
        console.log(ataqueJugador);
        boton.disabled = "true";
        boton.classList.add("gris");
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("AGUA");
        ataqueJugadorIcono.push("AGUA <i class='fa-solid fa-droplet'></i>");
        console.log(ataqueJugador);
        boton.disabled = "true";
        boton.classList.add("gris");
      } else {
        ataqueJugador.push("TIERRA");
        ataqueJugadorIcono.push("TIERRA <i class='fa-solid fa-seedling'></i>");
        console.log(ataqueJugador);
        boton.disabled = "true";
        boton.classList.add("gris");
      }
      contador += 1;
      console.log("Contador: " + contador);
      ataqueAleatorioEnemigo();
    });
  });
}

function ataqueAleatorioEnemigo() {
  ataqueAleaEnemigo = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataquesMokeponEnemigo[ataqueAleaEnemigo].nombre === "🔥") {
    ataqueEnemigo.push("FUEGO");
    ataqueEnemigoIcono.push("<i class='fa-solid fa-fire'></i> FUEGO");
    console.log(
      "Ataque enemigo: " + ataqueEnemigo + " índice: " + ataqueAleaEnemigo
    );
    ataquesMokeponEnemigo.splice(ataqueAleaEnemigo, 1);
    console.log(ataquesMokeponEnemigo);
  } else if (ataquesMokeponEnemigo[ataqueAleaEnemigo].nombre === "💧") {
    ataqueEnemigo.push("AGUA");
    ataqueEnemigoIcono.push("<i class='fa-solid fa-droplet'></i> AGUA");
    console.log(
      "Ataque enemigo: " + ataqueEnemigo + " índice: " + ataqueAleaEnemigo
    );
    ataquesMokeponEnemigo.splice(ataqueAleaEnemigo, 1);
    console.log(ataquesMokeponEnemigo);
  } else {
    ataqueEnemigo.push("TIERRA");
    ataqueEnemigoIcono.push("<i class='fa-solid fa-seedling'></i> TIERRA");
    console.log(
      "Ataque enemigo: " + ataqueEnemigo + " índice: " + ataqueAleaEnemigo
    );
    ataquesMokeponEnemigo.splice(ataqueAleaEnemigo, 1);
    console.log(ataquesMokeponEnemigo);
  }

  if (ataqueJugador.length === 5) {
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaquesJugador = ataqueJugadorIcono[jugador];
  indexAtaquesEnemigo = ataqueEnemigoIcono[enemigo];
}

function combate() {
  for (let i = 0; i < ataqueJugador.length; i++) {
    if (ataqueJugador[i] === ataqueEnemigo[i]) {
      indexAmbosOponentes(i, i);
      crearMensaje("EMPATE");
    } else if (
      (ataqueJugador[i] === "FUEGO" && ataqueEnemigo[i] === "TIERRA") ||
      (ataqueJugador[i] === "AGUA" && ataqueEnemigo[i] === "FUEGO") ||
      (ataqueJugador[i] === "TIERRA" && ataqueEnemigo[i] === "AGUA")
    ) {
      victoriasJugador++;
      indexAmbosOponentes(i, i);
      crearMensaje("✧ GANASTE ✧");
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      victoriasEnemigo++;
      indexAmbosOponentes(i, i);
      crearMensaje("PERDISTE");
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }

  verificarVidas();
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  seccionMensajes.style.display = "flex";
  seccion_mensaje.innerHTML = resultado;

  nuevoAtaqueDelJugador.innerHTML += indexAtaquesJugador;
  nuevoAtaqueDelEnemigo.innerHTML += indexAtaquesEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function verificarVidas() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensajeFinal(
      "¡¡EMPATAS, inténtalo de nuevo!! <p><i class='fa-solid fa-face-smile'></i></p>"
    ); //ganas
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal(
      "¡¡FELICIDADES, GANASTE!! <p class ='figuraResultado'><i class='fa-solid fa-trophy'></i></p>"
    ); //ganas
    imgSrcEnemigo.classList.add("gris");
  } else {
    crearMensajeFinal(
      "¡¡Pierdes, inténtalo de nuevo!! <p class ='figuraResultado'><i class='fa-solid fa-face-sad-tear'></i></p>"
    ); //pierdes
    imgSrcJugador.classList.add("gris");
  }
}

function crearMensajeFinal(resultadoFinal) {
  seccion_mensaje.innerHTML = resultadoFinal;
  //------------Quitamos los botones de ataque---------------------
  subtitulo.style.display = "none";
  contenedorBotonesDeAtaque.style.display = "none";
  //------------Habilita el botón reiniciar juego-----------
  seccionReiniciar.style.display = "flex";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.addEventListener("load", iniciarJuego);
