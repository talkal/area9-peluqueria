/**
 * i18n — Área 9 Peluquería
 */

const dict = {
    es: {

        heroLine1: "esculpimos",
        heroLine2: "tu ",
        heroCap: "C",
        heroLine3: "abello",
        heroSubtitle: "Un espacio intuitivo donde la belleza se encuentra con la paz personal.",
        bookBtn: "Reserva tu cita",

        aboutTitleInitial: "t",
        aboutTitleRest: "u esencia",
        aboutTitleLine2: "expresada",
        aboutP1: "Área 9 nace con la idea de ir más allá del servicio convencional.",
        aboutP2: "Bajo la dirección creativa de Diana, buscamos propuestas personalizadas que se adapten a tu estilo de vida y realcen tu identidad de manera natural.",
        aboutP3: "Un espacio tranquilo y acogedor concebido para pausar el ritmo diario mientras cuidamos de tu cabello.",
        aboutP4: "Además, Área 9 es un punto de encuentro dinámico: organizamos periódicamente talleres de bienestar, eventos culturales y de artes escénicas.",
        instaLink: "Entérate de todo en Instagram.",

        philosophyEyebrow: "Nuestra filosofía",
        v1t: "Intuición", v1s: "Leer lo que te sienta", v1m: "Estudiamos tus facciones y tu estilo personal",
        v2t: "Creatividad", v2s: "y técnica", v2m: "El estilismo como disciplina artística",
        v3t: "Bienestar", v3s: "Un oasis de calma", v3m: "Atención individualizada lejos de la prisa",
        v4t: "Armonía", v4s: "Estética y naturaleza", v4m: "Equilibrio entre lo retro y lo vegetal",
        v5t: "Comunicación", v5s: "Diálogo bilingüe", v5m: "Para comprender el resultado que deseas",

        scheduleInitial: "h",
        scheduleRest: "orarios",
        dayMon: "Lunes y miércoles",
        dayTue: "Martes y jueves",
        dayFri: "Viernes",
        daySatSun: "Sábados y domingos",
        closed: "Cerrado",

        findInitial: "e",
        findRest: "ncuéntranos",
        contactDesc: "En el corazón de Madrid, en pleno barrio de Malasaña.",
        callBtn: "Llámanos",

        pullQuote: "una burbuja de calma en la gran ciudad",
        pullQuoteCite: "Cliente desde hace 12 años",

        reviewsInitial: "l",
        reviewsRest: "o que dicen de nosotros",
        readMore: "Leer más",
        readLess: "Leer menos",
        authorRegular: "Cliente habitual",

        galleryInitial: "n",
        galleryRest: "uestras creaciones",
        footerLegal: "© 2026 Área 9 Peluquería · Calle de la Palma 78, Madrid"
    },

    en: {

        heroLine1: "we sculpt",
        heroLine2: "your ",
        heroCap: "H",
        heroLine3: "air",
        heroSubtitle: "An intuitive space where beauty meets personal peace.",
        bookBtn: "Book your visit",

        aboutTitleInitial: "y",
        aboutTitleRest: "our essence,",
        aboutTitleLine2: "expressed",
        aboutP1: "Área 9 was born from the idea of going beyond the conventional service.",
        aboutP2: "Under Diana's creative direction, we look for personalised proposals that suit your way of life and bring out your identity naturally.",
        aboutP3: "A calm, welcoming space conceived to pause the daily rhythm while we take care of your hair.",
        aboutP4: "Área 9 is also a living meeting point: we regularly host wellbeing workshops, cultural events and performing arts.",
        instaLink: "Follow everything on Instagram.",

        philosophyEyebrow: "Our philosophy",
        v1t: "Intuition", v1s: "Reading what suits you", v1m: "We study your features and personal style",
        v2t: "Creativity", v2s: "and craft", v2m: "Styling as an artistic discipline",
        v3t: "Wellbeing", v3s: "An oasis of calm", v3m: "Individual attention away from the rush",
        v4t: "Harmony", v4s: "Aesthetics and nature", v4m: "Balance between the retro and the botanical",
        v5t: "Communication", v5s: "Bilingual dialogue", v5m: "To understand exactly the result you want",

        scheduleInitial: "o",
        scheduleRest: "pening hours",
        dayMon: "Monday & Wednesday",
        dayTue: "Tuesday & Thursday",
        dayFri: "Friday",
        daySatSun: "Saturday & Sunday",
        closed: "Closed",

        findInitial: "f",
        findRest: "ind us",
        contactDesc: "In the heart of Madrid, in the Malasaña quarter.",
        callBtn: "Call us",

        pullQuote: "a bubble of calm in the big city",
        pullQuoteCite: "Client for 12 years",

        reviewsInitial: "w",
        reviewsRest: "hat people say",
        readMore: "Read more",
        readLess: "Read less",
        authorRegular: "Regular client",

        galleryInitial: "o",
        galleryRest: "ur creations",
        footerLegal: "© 2026 Área 9 Peluquería · Calle de la Palma 78, Madrid"
    }
};

/**
 * Horario de apertura — misma fuente de datos que la lista de la página.
 * Índice = getDay() de JS (0 domingo). Cada turno es [inicio, fin] en minutos.
 */
const SCHEDULE = {
    0: [],                              // domingo
    1: [[720, 840], [960, 1170]],       // lunes     12:00-14:00 · 16:00-19:30
    2: [[600, 840], [960, 1170]],       // martes    10:00-14:00 · 16:00-19:30
    3: [[720, 840], [960, 1170]],       // miércoles
    4: [[600, 840], [960, 1170]],       // jueves
    5: [[600, 840]],                    // viernes   10:00-14:00
    6: []                               // sábado
};

const OPEN_STRINGS = {
    es: {
        openUntil: h => `Abierto ahora · hasta las ${h}`,
        opensAt: (d, h) => `Cerrado · abre el ${d} a las ${h}`,
        opensToday: h => `Cerrado · abre hoy a las ${h}`,
        days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
    },
    en: {
        openUntil: h => `Open now · until ${h}`,
        opensAt: (d, h) => `Closed · opens ${d} at ${h}`,
        opensToday: h => `Closed · opens today at ${h}`,
        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    }
};

function fmt(mins) {
    return String(Math.floor(mins / 60)).padStart(2, "0") + ":" + String(mins % 60).padStart(2, "0");
}

function renderOpenNow(lang) {
    const el = document.getElementById("openNow");
    if (!el) return;
    const s = OPEN_STRINGS[lang] || OPEN_STRINGS.es;
    const now = new Date();
    const today = now.getDay();
    const mins = now.getHours() * 60 + now.getMinutes();

    for (const [start, end] of SCHEDULE[today] || []) {
        if (mins >= start && mins < end) {
            el.textContent = s.openUntil(fmt(end));
            el.classList.add("is-open");
            el.hidden = false;
            return;
        }
    }

    // Siguiente turno hoy
    const later = (SCHEDULE[today] || []).find(([start]) => mins < start);
    el.classList.remove("is-open");
    if (later) {
        el.textContent = s.opensToday(fmt(later[0]));
        el.hidden = false;
        return;
    }

    // Siguiente día con turnos
    for (let i = 1; i <= 7; i++) {
        const d = (today + i) % 7;
        if ((SCHEDULE[d] || []).length) {
            el.textContent = s.opensAt(s.days[d], fmt(SCHEDULE[d][0][0]));
            el.hidden = false;
            return;
        }
    }
    el.hidden = true;
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".lang-btn");
    const nodes = document.querySelectorAll("[data-i18n]");

    function setLanguage(lang) {
        if (!dict[lang]) return;
        document.documentElement.lang = lang;

        nodes.forEach(el => {
            const key = el.getAttribute("data-i18n");
            const value = dict[lang][key];
            if (value !== undefined) el.textContent = value;
        });

        buttons.forEach(btn => {
            const active = btn.getAttribute("data-lang") === lang;
            btn.classList.toggle("active", active);
            btn.setAttribute("aria-pressed", String(active));
        });

        renderOpenNow(lang);

        try { localStorage.setItem("a9-lang", lang); } catch (e) { /* no-op */ }
    }

    buttons.forEach(btn => {
        btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
    });

    // El salón está en Madrid y su clientela es española: el castellano manda.
    // Sólo se respeta la elección explícita del visitante.
    let initial = "es";
    try {
        const saved = localStorage.getItem("a9-lang");
        if (saved && dict[saved]) initial = saved;
    } catch (e) { /* no-op */ }

    setLanguage(initial);
});
