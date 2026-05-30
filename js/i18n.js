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
        aboutP1: "Área 9 nace con la idea de ir más allá del servicio convencional. Bajo la dirección creativa de Diana, buscamos propuestas personalizadas que se adapten a tu estilo de vida y realcen tu identidad de manera natural.",
        aboutP2: "Un espacio tranquilo y acogedor concebido para pausar el ritmo diario mientras cuidamos de tu cabello.",
        aboutP3: "Además, Área 9 es un punto de encuentro dinámico: organizamos periódicamente talleres de bienestar, eventos culturales y de artes escénicas. Síguenos en Instagram para enterarte de todo.",

        // Philosophy / Values
        philosophyTitle: "nuestra filosofía",
        philosophySubtitle: "Los pilares de la experiencia en Área 9",
        value1Title: "intuición",
        value1Desc: "Estudiamos tus facciones y estilo personal para diseñar un corte que se adapte de verdad a tu día a día.",
        value2Title: "creatividad y técnica",
        value2Desc: "Entendemos el estilismo como una disciplina artística apoyada en técnicas precisas y tendencias actuales.",
        value3Title: "bienestar",
        value3Desc: "Un ambiente de calma y atención individualizada pensado para desconectar de la prisa urbana.",
        value4Title: "armonía",
        value4Desc: "El equilibrio entre una cuidada estética retro, toques vegetales y tu propio espacio de expresión.",
        value5Title: "comunicación",
        value5Desc: "Un diálogo directo, cercano y bilingüe para comprender con exactitud el resultado que deseas.",

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
        footerDisclaimer: "Estilismo, arte y bienestar."
    },
    en: {
        // Navigation & General
        bookBtn: "Come visit us",

        // Hero
        heroTitle: "We sculpt your hair",
        heroSubtitle: "An intuitive space where beauty meets personal peace.",

        // About
        aboutTitle: "Your essence, expressed",
        aboutP1: "Área 9 was born to go beyond a conventional service. Under Diana's creative direction, we focus on personalized styles that adapt to your lifestyle and naturally enhance your identity.",
        aboutP2: "A calm and welcoming space designed to pause the daily rush while we care for your hair.",
        aboutP3: "Additionally, Área 9 is a dynamic meeting point: we regularly host wellness workshops, cultural events, and performing arts. Follow us on Instagram to stay updated.",

        // Philosophy / Values
        philosophyTitle: "our philosophy",
        philosophySubtitle: "The core pillars defining your experience at Área 9",
        value1Title: "intuition",
        value1Desc: "We study your features and personal style to design a haircut that truly fits your daily life.",
        value2Title: "creativity & technique",
        value2Desc: "We approach hairdressing as an artistic discipline backed by precise techniques and current trends.",
        value3Title: "well-being",
        value3Desc: "A peaceful environment with individualized attention designed to disconnect from the urban rush.",
        value4Title: "harmony",
        value4Desc: "A balanced blend of curated retro aesthetics, botanical touches, and your own personal expression.",
        value5Title: "communication",
        value5Desc: "A direct, close, and bilingual dialogue to understand exactly the result you are looking for.",

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
        footerDisclaimer: "Hairdressing, art, and well-being."
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
