/**
 * Entrada del hero.
 *
 * Balmoral va con font-display: block, así que el titular está
 * deliberadamente invisible hasta que llega la fuente. Si la animación
 * arrancara con la carga de la página, el primer tramo del barrido se
 * ejecutaría sobre nada y sólo se vería la cola.
 *
 * Por eso la clase .is-ready sólo se pone cuando document.fonts.ready ha
 * resuelto. Toda la máscara y las animaciones cuelgan de esa clase: si este
 * script no llega a ejecutarse, el hero se ve normal. Nunca se oculta
 * contenido a la espera de un script.
 */
(function () {
    "use strict";

    var root = document.documentElement;

    function start() {
        root.classList.add("is-ready");
    }

    // Si la fuente tarda demasiado, se entra igual: más vale una entrada
    // sin barrido que un titular esperando indefinidamente.
    var fallback = setTimeout(start, 2000);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(function () {
            clearTimeout(fallback);
            start();
        }).catch(function () {
            clearTimeout(fallback);
            start();
        });
    } else {
        clearTimeout(fallback);
        start();
    }
})();
