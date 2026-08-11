/**
 * Instagram — feed JSON de Behold.
 *
 * Behold conecta con la cuenta de Instagram y expone las publicaciones en un
 * endpoint JSON simple. Las imágenes las sirve su propio CDN ya optimizadas
 * en webp. Eso significa:
 *
 *   - sin script de terceros
 *   - sin cookies de Instagram ni de Meta
 *   - sin claves ni tokens en la página
 *
 * Por eso ya no hace falta la barrera de consentimiento que tenía antes el
 * iframe: el perfil de privacidad es el de cualquier otro CDN de imágenes.
 *
 * El iframe que había antes nunca podía funcionar: instagram.com/{usuario}/embed/
 * no existe como endpoint. Instagram sólo permite incrustar publicaciones
 * sueltas, y la Basic Display API que servía para esto cerró en diciembre
 * de 2024.
 *
 * Si la petición falla, la sección se queda con su enlace al perfil y ya.
 * Nunca se muestra un hueco roto.
 */
(function () {
    "use strict";

    var root = document.getElementById("igFeed");
    if (!root) return;

    var feedId = root.getAttribute("data-feed");
    if (!feedId || feedId === "REEMPLAZAR_CON_ID_DE_BEHOLD") return;

    var grid = root.querySelector(".ig-grid");
    var MAX = 6;

    function render(posts) {
        if (!posts || !posts.length) return;

        var frag = document.createDocumentFragment();

        posts.slice(0, MAX).forEach(function (p) {
            var size = (p.sizes && (p.sizes.medium || p.sizes.small)) || null;
            if (!size) return;

            var a = document.createElement("a");
            a.className = "ig-item";
            a.href = p.permalink;
            a.target = "_blank";
            a.rel = "noopener noreferrer";

            // El color dominante evita el salto en blanco mientras carga
            if (p.colorPalette && p.colorPalette.dominant) {
                a.style.backgroundColor = "rgb(" + p.colorPalette.dominant + ")";
            }

            var img = document.createElement("img");
            img.src = size.mediaUrl;
            img.width = size.width;
            img.height = size.height;
            img.loading = "lazy";
            img.decoding = "async";
            // altText es el texto alternativo real que Diana puso en Instagram
            img.alt = p.altText || p.prunedCaption || "Publicación de Área 9 en Instagram";

            a.appendChild(img);
            frag.appendChild(a);
        });

        grid.appendChild(frag);
        root.classList.add("is-loaded");
    }

    function load() {
        fetch("https://feeds.behold.so/" + feedId)
            .then(function (r) { return r.ok ? r.json() : Promise.reject(r.status); })
            .then(function (data) { render(data.posts); })
            .catch(function () { /* se queda el enlace al perfil */ });
    }

    // Se pide directamente, sin IntersectionObserver.
    //
    // El observer estaba puesto sobre el contenedor de la rejilla, que mide 0
    // de alto mientras está vacío, y un elemento de área cero nunca se reporta
    // como visible: la rejilla se quedaba vacía porque estaba vacía. Moverlo a
    // la sección tampoco lo arregló, así que sobra la complejidad.
    //
    // El JSON son unos pocos KB y las imágenes ya llevan loading="lazy", que
    // es lo que de verdad difiere el peso. No se gana nada observando.
    window.setTimeout(load, 0);
})();
