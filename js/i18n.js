/**
 * i18n Dictionary and Logic for Área 9
 */

const dict = {
    es: {
        // Navigation & General
        bookBtn: "Ven a visitarnos",

        // Hero
        heroTitle: "Sabemos lo que te sienta bien",
        heroSubtitle: "Un espacio intuitivo donde la belleza se encuentra con la paz personal.",

        // About
        aboutTitle: "Tu esencia, expresada",
        aboutP1: "Aquí no solo hacemos cortes de pelo; creamos experiencias adaptadas a tu energía. Diana lidera este proyecto con una visión libre y creativa, guiada por la intuición para encontrar el estilo que realmente habla de ti.",
        aboutP2: "Sumérgete en un ambiente lleno de arte, plantas, butacas vintage y buenas vibras. Un pequeño oasis para relajarte, conversar y renovar tu estilo.",
        aboutP3: "Además, Área 9 es un espacio vivo: de vez en cuando organizamos eventos, obras de teatro y talleres de aromaterapia. ¡Sigue nuestro Instagram para no perderte nada!",

        // Schedule
        scheduleTitle: "Horarios",
        dayMon: "Lunes, Miércoles",
        dayTue: "Martes, Jueves",
        dayFri: "Viernes",
        daySatSun: "Sábados y Domingos",
        closed: "Cerrado para descansar",

        // Contact
        contactTitle: "Encuéntranos",
        contactDesc: "Ubicados en el corazón de Madrid.",
        mapLink: "Ver en Google Maps",

        // Reviews
        reviewsTitle: "Lo que dicen de nosotros",

        // Gallery
        galleryTitle: "Nuestras Creaciones",
        gallerySubtitle: "Un vistazo a nuestro arte.",

        // Footer
        footerRights: "© 2026 Área 9 Peluquería. Todos los derechos reservados.",
        footerDisclaimer: "Hecho con amor y creatividad."
    },
    en: {
        // Navigation & General
        bookBtn: "Come visit us",

        // Hero
        heroTitle: "We know what suits you",
        heroSubtitle: "An intuitive space where beauty meets personal peace.",

        // About
        aboutTitle: "Your essence, expressed",
        aboutP1: "We don't just cut hair here; we create experiences tailored to your energy. Diana leads this project with a free and creative vision, guided by intuition to find the style that truly speaks to you.",
        aboutP2: "Immerse yourself in an environment filled with art, plants, vintage chairs, and good vibes. A small oasis to relax, chat, and renew your style.",
        aboutP3: "Additionally, Área 9 is a living space: we occasionally host events, theater plays, and aromatherapy workshops. Follow our Instagram to stay updated!",

        // Schedule
        scheduleTitle: "Schedule",
        dayMon: "Monday, Wednesday",
        dayTue: "Tuesday, Thursday",
        dayFri: "Friday",
        daySatSun: "Saturdays and Sundays",
        closed: "Closed to rest",

        // Contact
        contactTitle: "Find Us",
        contactDesc: "Located in the heart of Madrid.",
        mapLink: "View on Google Maps",

        // Reviews
        reviewsTitle: "What people say",

        // Gallery
        galleryTitle: "Our Creations",
        gallerySubtitle: "A glimpse into our art.",

        // Footer
        footerRights: "© 2026 Área 9 Peluquería. All rights reserved.",
        footerDisclaimer: "Made with love and creativity."
    }
};

/**
 * Initializes language toggle logic
 */
document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elementsToTranslate = document.querySelectorAll('[data-i18n]');

    // Default lang is 'es', but we can check localStorage in the future.
    let currentLang = 'es';

    function setLanguage(lang) {
        if (!dict[lang]) return;
        currentLang = lang;

        // Update DOM html lang attribute
        document.documentElement.lang = lang;

        // Update Text Content
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[lang][key]) {
                el.textContent = dict[lang][key];
            }
        });

        // Update active class on buttons
        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
                btn.setAttribute('aria-pressed', 'true');
            } else {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            }
        });
    }

    // Assign event listeners
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });

    // Initial setting
    setLanguage(currentLang);
});
