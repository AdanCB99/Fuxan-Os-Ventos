function toggleMenu() {
  const menu = document.getElementById("mainMenu");
  const button = document.querySelector(".menu-toggle");

  menu.classList.toggle("active");

  const isOpen = menu.classList.contains("active");
  if (button) {
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }
}

const navbarTranslations = {
  es: {
    menuLabel: "Abrir menú",
    home: "Inicio",
    tourism: "Turismo",
    tourismLugo: "Lugo ciudad",
    tourismMarina: "Mariña",
    tourismRibeira: "Ribeira Sacra",
    registration: "Inscripción",
    rules: "Bases",
    prizes: "Premios",
    venue: "Sala de Juego",
	calendar: "Calendario",
    accommodation: "Alojamiento",
    extraActivities: "Actividades Complementarias",
    directions: "Cómo llegar"
  },
  en: {
    menuLabel: "Open menu",
    home: "Home",
    tourism: "Tourism",
    tourismLugo: "Lugo city",
    tourismMarina: "Mariña",
    tourismRibeira: "Ribeira Sacra",
    registration: "Registration",
    rules: "Rules",
    prizes: "Prizes",
    venue: "Playing Hall",
	calendar: "Calendar",
    accommodation: "Accommodation",
    extraActivities: "Additional Activities",
    directions: "How to get there"
  },
  gal: {
    menuLabel: "Abrir menú",
    home: "Inicio",
    tourism: "Turismo",
    tourismLugo: "Lugo cidade",
    tourismMarina: "Mariña",
    tourismRibeira: "Ribeira Sacra",
    registration: "Inscrición",
    rules: "Bases",
    prizes: "Premios",
    venue: "Sala de xogo",
    calendar: "Calendario",
    accommodation: "Aloxamento",
    extraActivities: "Actividades complementarias",
    directions: "Como chegar"
  }
};

function getCurrentLanguage() {
  const lang = document.documentElement.lang?.toLowerCase();

  if (lang === "en") return "en";
  if (lang === "gl") return "gal";
  return "es";
}

function getLocalizedHref(lang, esFile, enFile, galFile) {
  if (lang === "en") return enFile;
  if (lang === "gal") return galFile;
  return esFile;
}

function buildNavbar(lang) {
  const t = navbarTranslations[lang];

  return `
    <div class="navbar">
      <button class="menu-toggle" type="button" aria-label="${t.menuLabel}" aria-expanded="false">
        ☰
      </button>

      <div class="menu" id="mainMenu">
        <a href="${getLocalizedHref(lang, "index.html", "index-en.html", "index-gal.html")}">${t.home}</a>

        <div class="dropdown">
          <a class="dropbtn" href="#">${t.tourism} ▾</a>
          <div class="dropdown-content">
            <a href="${getLocalizedHref(lang, "lugo.html", "lugo-en.html", "lugo-gal.html")}">${t.tourismLugo}</a>
            <a href="${getLocalizedHref(lang, "marina.html", "marina-en.html", "marina-gal.html")}">${t.tourismMarina}</a>
            <a href="${getLocalizedHref(lang, "ribeira.html", "ribeira-en.html", "ribeira-gal.html")}">${t.tourismRibeira}</a>
          </div>
        </div>

        <a href="${getLocalizedHref(lang, "inscripcion-torneo-ajedrez-lugo-fuxan-os-ventos.html", "inscripcion-torneo-ajedrez-lugo-fuxan-os-ventos-en.html", "inscripcion-torneo-ajedrez-lugo-fuxan-os-ventos-gal.html")}">${t.registration}</a>
        <a href="${getLocalizedHref(lang, "bases.html", "bases-en.html", "bases-gal.html")}">${t.rules}</a>
        <a href="${getLocalizedHref(lang, "premios.html", "premios-en.html", "premios-gal.html")}">${t.prizes}</a>
        <a href="${getLocalizedHref(lang, "sala-de-juego-torneo-ajedrez-lugo-fuxan-os-ventos.html", "sala-de-juego-torneo-ajedrez-lugo-fuxan-os-ventos-en.html", "sala-de-juego-torneo-ajedrez-lugo-fuxan-os-ventos-gal.html")}">${t.venue}</a>
	<a href="${getLocalizedHref(lang, "calendario.html", "calendario-en.html", "calendario-gal.html")}">${t.calendar}</a>
        <a href="${getLocalizedHref(lang, "alojamiento-torneo-ajedrez-lugo-fuxan-os-ventos.html", "alojamiento-torneo-ajedrez-lugo-fuxan-os-ventos-en.html", "alojamiento-torneo-ajedrez-lugo-fuxan-os-ventos-gal.html")}">${t.accommodation}</a>
        <a href="${getLocalizedHref(lang, "actividades-complementarias-torneo-ajedrez-lugo-fuxan-os-ventos.html", "actividades-complementarias-torneo-ajedrez-lugo-fuxan-os-ventos-en.html", "actividades-complementarias-torneo-ajedrez-lugo-fuxan-os-ventos-gal.html")}">${t.extraActivities}</a>
        <a href="${getLocalizedHref(lang, "llegar-a-lugo-torneo-ajedrez-lugo-fuxan-os-ventos.html", "llegar-a-lugo-torneo-ajedrez-lugo-fuxan-os-ventos-en.html", "llegar-a-lugo-torneo-ajedrez-lugo-fuxan-os-ventos-gal.html")}">${t.directions}</a>
      </div>
    </div>
  `;
}

function closeAllDropdowns() {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    dropdown.classList.remove("open");
  });
}

function closeMainMenu() {
  const menu = document.getElementById("mainMenu");
  const button = document.querySelector(".menu-toggle");

  if (menu) {
    menu.classList.remove("active");
  }

  if (button) {
    button.setAttribute("aria-expanded", "false");
  }
}

function initNavbar() {
  const navbar = document.querySelector(".navbar");
  const menu = document.getElementById("mainMenu");
  const menuButton = document.querySelector(".menu-toggle");

  if (!navbar || !menu || !menuButton) {
    return;
  }

  menuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    menu.classList.toggle("active");
    menuButton.setAttribute(
      "aria-expanded",
      menu.classList.contains("active") ? "true" : "false"
    );
  });

  document.querySelectorAll(".dropdown .dropbtn").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      const dropdown = this.closest(".dropdown");
      const wasOpen = dropdown.classList.contains("open");

      closeAllDropdowns();

      if (!wasOpen) {
        dropdown.classList.add("open");
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const placeholder = document.getElementById("navbar-placeholder");

  if (placeholder) {
    const lang = getCurrentLanguage();
    placeholder.innerHTML = buildNavbar(lang);
    initNavbar();
  }

  iniciarContador(); // 👈 dentro del bloque

    // 👇 ANIMACIONES SCROLL
const elementos = document.querySelectorAll(".fade-in, .fade-left, .fade-right");

  function mostrarElementos() {
    const alturaPantalla = window.innerHeight;

    elementos.forEach(el => {
      const distancia = el.getBoundingClientRect().top;

if (distancia < alturaPantalla - 100) {
  el.classList.add("visible");
} else {
  el.classList.remove("visible");
}
    });
  }

  window.addEventListener("scroll", mostrarElementos);
  mostrarElementos(); // para que algunos aparezcan ya visibles
});

window.addEventListener("resize", function () {
  const menu = document.getElementById("mainMenu");
  const button = document.querySelector(".menu-toggle");

  if (!menu || !button) {
    return;
  }

  if (window.innerWidth > 1080) {
    menu.classList.remove("active");
    button.setAttribute("aria-expanded", "false");

    document.querySelectorAll(".dropdown").forEach((dropdown) => {
      dropdown.classList.remove("open");
    });
  }
});

async function loadHTML(selector, file) {
  const target = document.querySelector(selector);
  if (!target) return;

  const response = await fetch(file);
  const html = await response.text();
  target.innerHTML = html;
}

function iniciarContador() {
  const elemento = document.getElementById("countdown");
  if (!elemento) return; // evita errores en otras páginas

  function actualizarContador() {
    const fechaObjetivo = new Date("2026-07-13T15:00:00Z").getTime();
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

if (diferencia <= 0) {
  const desktop = document.querySelector(".desktop-texto");
  if (desktop) desktop.style.display = "none";
  document.querySelector(".mobile-texto").style.display = "none";
  document.getElementById("mensaje-final").textContent = "🔥 ¡El torneo ha comenzado!";
  return;
}
function animarCambio(id, nuevoValor) {
  const el = document.getElementById(id);
  if (el.textContent != nuevoValor) {
    el.style.transform = "translateY(-5px)";
    el.style.opacity = "0.5";

    setTimeout(() => {
      el.textContent = nuevoValor;
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }, 150);	
  }
}
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

animarCambio("dias", dias);
animarCambio("horas", horas);
animarCambio("minutos", minutos);
animarCambio("segundos", segundos);
}
  actualizarContador();
  setInterval(actualizarContador, 1000);
}

/* Opcional: agregar clase visible al cargar la página */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".pagina-inscripcion h2").forEach(h2 => {
        h2.classList.add("visible");
    });
});

function getTravelTexts() {
  const lang = document.documentElement.lang?.toLowerCase();

  if (lang === "en") {
    return {
      emptyOrigin: "Please enter where you are traveling from",
      noData: "⚠️ No internal data available for this city yet",
      fastest: "⚡ FASTEST",
      cheapest: "💸 CHEAPEST",
      recommendFast: "I recommend <strong>{tipo}</strong> because it is faster.",
      recommendCheap: "I recommend <strong>{tipo}</strong> because it is cheaper."
    };
  }

  if (lang === "gl") {
    return {
      emptyOrigin: "Escribe desde onde viaxas",
      noData: "⚠️ Aínda non hai datos internos para esta cidade",
      fastest: "⚡ MÁIS RÁPIDO",
      cheapest: "💸 MÁIS BARATO",
      recommendFast: "Recoméndoche <strong>{tipo}</strong> porque é máis rápido.",
      recommendCheap: "Recoméndoche <strong>{tipo}</strong> porque é máis barato."
    };
  }

  return {
    emptyOrigin: "Escribe desde dónde viajas",
    noData: "⚠️ Todavía no hay datos internos para esta ciudad",
    fastest: "⚡ MÁS RÁPIDO",
    cheapest: "💸 MÁS BARATO",
    recommendFast: "Te recomiendo <strong>{tipo}</strong> porque es más rápido.",
    recommendCheap: "Te recomiendo <strong>{tipo}</strong> porque es más barato."
  };
}

function normalizarTexto(texto) {
  return texto
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,]/g, "")
    .replace(/\s+/g, " ");
}

function resolverCiudad(origen) {
  const alias = {
    madrid: "madrid",

    barcelona: "barcelona",
    barca: "barcelona",

    valencia: "valencia",

    coruna: "acoruna",
    "a coruna": "acoruna",
    "la coruna": "acoruna",
    "a coruña": "acoruna",
    "la coruña": "acoruna",

    santiago: "santiago",
    "santiago de compostela": "santiago",
    compostela: "santiago",

    oviedo: "oviedo",

    bilbao: "bilbao",

    lisboa: "lisboa",
    lisbon: "lisboa",

    londres: "londres",
    london: "londres"
  };

  return alias[origen] || origen;
}

function getRutas() {
  return {
    madrid: [
      { tipo: "AVE + bus", icono: "🚆", tiempo: 4, precio: 60 },
      { tipo: "Bus", icono: "🚌", tiempo: 7, precio: 30 },
      { tipo: "Avión + bus", icono: "✈️", tiempo: 3, precio: 80 }
    ],

    barcelona: [
      { tipo: "Avión + bus", icono: "✈️", tiempo: 3, precio: 70 },
      { tipo: "Bus", icono: "🚌", tiempo: 12, precio: 50 }
    ],

    valencia: [
      { tipo: "AVE + bus", icono: "🚆", tiempo: 5, precio: 65 }
    ],

    acoruna: [
      { tipo: "Tren", icono: "🚆", tiempo: 1.5, precio: 18 },
      { tipo: "Bus", icono: "🚌", tiempo: 1.75, precio: 12 },
      { tipo: "Coche", icono: "🚗", tiempo: 1.25, precio: 15 }
    ],

    santiago: [
      { tipo: "Tren", icono: "🚆", tiempo: 2.25, precio: 20 },
      { tipo: "Bus", icono: "🚌", tiempo: 2.5, precio: 14 },
      { tipo: "Coche", icono: "🚗", tiempo: 2, precio: 20 }
    ],

    oviedo: [
      { tipo: "Bus", icono: "🚌", tiempo: 3.5, precio: 22 },
      { tipo: "Coche", icono: "🚗", tiempo: 3, precio: 30 }
    ],

    bilbao: [
      { tipo: "Bus", icono: "🚌", tiempo: 6.5, precio: 35 },
      { tipo: "Coche", icono: "🚗", tiempo: 5.5, precio: 55 },
      { tipo: "Avión + bus", icono: "✈️", tiempo: 4.5, precio: 95 }
    ],

    lisboa: [
      { tipo: "Avión + bus", icono: "✈️", tiempo: 4.5, precio: 95 },
      { tipo: "Bus", icono: "🚌", tiempo: 10, precio: 45 }
    ],

    londres: [
      { tipo: "Avión + bus", icono: "✈️", tiempo: 5, precio: 120 }
    ]
  };
}

function formatearTiempo(horas) {
  const horasEnteras = Math.floor(horas);
  const minutos = Math.round((horas - horasEnteras) * 60);

  if (minutos === 0) return `${horasEnteras}h`;
  if (horasEnteras === 0) return `${minutos} min`;
  return `${horasEnteras}h ${minutos} min`;
}

function buscarTodo() {
  const origenInput = document.getElementById("origen");
  const contenedor = document.getElementById("resultado");
  const ia = document.getElementById("ia");
  const plataformas = document.getElementById("plataformas");
  const btnMaps = document.getElementById("btnMaps");
  const btnOmio = document.getElementById("btnOmio");
  const btnRome2Rio = document.getElementById("btnRome2Rio");

  if (!origenInput || !contenedor || !ia || !plataformas || !btnMaps || !btnOmio || !btnRome2Rio) {
    return;
  }

  const t = getTravelTexts();
  const origenOriginal = origenInput.value.trim();

  if (!origenOriginal) {
    alert(t.emptyOrigin);
    return;
  }

  const origenNormalizado = normalizarTexto(origenOriginal);
  const ciudadClave = resolverCiudad(origenNormalizado);

  const fecha = "2026-07-13";
  const origenURL = encodeURIComponent(origenOriginal);

  btnMaps.href = `https://www.google.com/maps/dir/?api=1&origin=${origenURL}&destination=Lugo&travelmode=transit`;
  btnOmio.href = `https://www.omio.es/app/search-frontend/results/${origenURL}/LUG/${fecha}`;
  btnRome2Rio.href = `https://www.rome2rio.com/es/map/${origenURL}/Lugo`;

  plataformas.style.display = "flex";

  const rutas = getRutas();

  if (!rutas[ciudadClave]) {
    contenedor.innerHTML = `<p>${t.noData}</p>`;
    ia.innerHTML = "";
    return;
  }

  const opciones = rutas[ciudadClave];
  const masRapido = opciones.reduce((a, b) => (a.tiempo < b.tiempo ? a : b));
  const masBarato = opciones.reduce((a, b) => (a.precio < b.precio ? a : b));

  contenedor.innerHTML = "";

  opciones.forEach(op => {
    let clase = "card";
    if (op === masRapido || op === masBarato) clase += " recomendada";

    let etiqueta = "";
    if (op === masRapido) etiqueta = t.fastest;
    if (op === masBarato) etiqueta = t.cheapest;

    contenedor.innerHTML += `
      <div class="${clase}">
        <h3>${op.icono} ${op.tipo}</h3>
        <p>⏱ ${formatearTiempo(op.tiempo)}</p>
        <p>💰 ${op.precio}€</p>
        <strong>${etiqueta}</strong>
      </div>
    `;
  });

  const recomendacion = (masRapido.precio <= masBarato.precio + 15)
    ? t.recommendFast.replace("{tipo}", masRapido.tipo)
    : t.recommendCheap.replace("{tipo}", masBarato.tipo);

  ia.innerHTML = "🤖 " + recomendacion;
}