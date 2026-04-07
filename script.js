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
            <a href="${getLocalizedHref(lang, "mariña.html", "mariña-en.html", "mariña-gal.html")}">${t.tourismMarina}</a>
            <a href="${getLocalizedHref(lang, "ribeira.html", "ribeira-en.html", "ribeira-gal.html")}">${t.tourismRibeira}</a>
          </div>
        </div>

        <a href="${getLocalizedHref(lang, "pagina2.html", "pagina2-en.html", "pagina2-gal.html")}">${t.registration}</a>
        <a href="${getLocalizedHref(lang, "bases.html", "bases-en.html", "bases-gal.html")}">${t.rules}</a>
        <a href="${getLocalizedHref(lang, "premios.html", "premios-en.html", "premios-gal.html")}">${t.prizes}</a>
        <a href="${getLocalizedHref(lang, "local.html", "local-en.html", "local-gal.html")}">${t.venue}</a>
	<a href="${getLocalizedHref(lang, "calendario.html", "calendario-en.html", "calendario-gal.html")}">${t.calendar}</a>
        <a href="${getLocalizedHref(lang, "pagina3.html", "pagina3-en.html", "pagina3-gal.html")}">${t.accommodation}</a>
        <a href="${getLocalizedHref(lang, "actividades-complementarias.html", "actividades-complementarias-en.html", "actividades-complementarias-gal.html")}">${t.extraActivities}</a>
        <a href="${getLocalizedHref(lang, "pagina4.html", "pagina4-en.html", "pagina4-gal.html")}">${t.directions}</a>
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
  document.querySelector(".texto-contador").textContent = "🔥 ¡El torneo ha comenzado!";
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