/**
 * i18n Dictionary and Logic for Área 9
 */

const dict = {
    es: {
        // Navigation & General
        bookBtn: "Ven a visitarnos",

        // Hero
        heroTitle: "Esculpimos tu cabello",
        heroSubtitle: "Un espacio intuitivo donde la belleza se encuentra con la paz personal.",

        // About
        aboutTitle: "Tu esencia, expresada",
        aboutP1: "Aquí no solo hacemos cortes de pelo; creamos experiencias adaptadas a tu energía. Diana lidera este proyecto con una visión libre y creativa, guiada por la intuición para encontrar el estilo que realmente habla de ti.",
        aboutP2: "Sumérgete en un oasis de calma para relajarte, conversar y renovar tu estilo.",
        aboutP3: "Además, Área 9 es un espacio vivo: de vez en cuando organizamos diferentes talleres y eventos. ¡Sigue nuestro Instagram para estar informado!",

        // Philosophy / Values
        philosophyTitle: "nuestra filosofía",
        philosophySubtitle: "Los pilares que definen tu experiencia en Área 9",
        value1Title: "intuición",
        value1Desc: "Diana lee tu energía y personalidad para esculpir el estilo que realmente habla de ti.",
        value2Title: "creatividad y transformación",
        value2Desc: "El estilismo como un arte vivo que renueva tu imagen exterior y eleva tu espíritu interior.",
        value3Title: "relajación",
        value3Desc: "Un pequeño oasis lleno de plantas, té caliente y calma para desconectar del ritmo de Madrid.",
        value4Title: "armonía",
        value4Desc: "La mezcla equilibrada entre decoración retro, naturaleza y tu propia expresión personal.",
        value5Title: "comunicación",
        value5Desc: "Un diálogo abierto, cercano y bilingüe para que te sientas escuchado de principio a fin.",

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

        // Reviews
        reviewsTitle: "Lo que dicen de nosotros",
        readMore: "Leer más...",
        readLess: "Leer menos...",

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
        heroTitle: "We sculpt your hair",
        heroSubtitle: "An intuitive space where beauty meets personal peace.",

        // About
        aboutTitle: "Your essence, expressed",
        aboutP1: "We don't just cut hair here; we create experiences tailored to your energy. Diana leads this project with a free and creative vision, guided by intuition to find the style that truly speaks to you.",
        aboutP2: "Immerse yourself in an oasis of calm to relax, chat, and renew your style.",
        aboutP3: "Additionally, Área 9 is a living space: we occasionally host different workshops and events. Follow our Instagram to stay informed!",

        // Philosophy / Values
        philosophyTitle: "our philosophy",
        philosophySubtitle: "The core pillars defining your experience at Área 9",
        value1Title: "intuition",
        value1Desc: "Diana reads your energy and personality to sculpt the style that truly speaks of you.",
        value2Title: "creativity & transformation",
        value2Desc: "Hairdressing as a living art form that renews your outer image and elevates your inner spirit.",
        value3Title: "relaxation",
        value3Desc: "A small oasis filled with plants, warm tea, and calm to disconnect from Madrid's pace.",
        value4Title: "harmony",
        value4Desc: "A balanced blend of retro aesthetics, nature, and your own personal expression.",
        value5Title: "communication",
        value5Desc: "An open, friendly, and bilingual dialogue so you feel heard from start to finish.",

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

        // Reviews
        reviewsTitle: "What people say",
        readMore: "Read more...",
        readLess: "Read less...",

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
