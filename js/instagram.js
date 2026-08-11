/**
 * Instagram — carga diferida y con consentimiento.
 *
 * Instagram deja cookies propias, así que el iframe no se inyecta hasta que
 * el visitante lo pide. Sin aceptar no se carga nada de terceros y sigue
 * habiendo un enlace directo al perfil, que es lo que Marisol pedía: que el
 * Instagram esté presente sin sacar a la gente de la web sin querer.
 *
 * La elección se recuerda en localStorage. Si el visitante ya aceptó, en las
 * siguientes visitas carga solo.
 */
(function () {
    "use strict";

    var KEY = "a9-ig-consent";
    var frame = document.getElementById("igFrame");
    if (!frame) return;

    var consent = document.getElementById("igConsent");
    var accept = document.getElementById("igAccept");
    var handle = frame.getAttribute("data-handle") || "area_9peluqueria";

    function load() {
        if (frame.querySelector("iframe")) return;

        var wrap = document.createElement("div");
        wrap.className = "ig-embed";

        var iframe = document.createElement("iframe");
        iframe.src = "https://www.instagram.com/" + handle + "/embed/";
        iframe.title = "Instagram de Área 9";
        iframe.loading = "lazy";
        iframe.setAttribute("scrolling", "no");
        iframe.setAttribute("frameborder", "0");
        iframe.allow = "encrypted-media";

        wrap.appendChild(iframe);
        frame.appendChild(wrap);

        if (consent) consent.hidden = true;
        frame.classList.add("is-loaded");
    }

    var already = false;
    try { already = localStorage.getItem(KEY) === "yes"; } catch (e) { /* no-op */ }

    if (already) {
        load();
    } else if (accept) {
        accept.addEventListener("click", function () {
            try { localStorage.setItem(KEY, "yes"); } catch (e) { /* no-op */ }
            load();
        });
    }
})();
