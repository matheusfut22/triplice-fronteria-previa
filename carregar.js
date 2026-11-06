/* Carrega o app depois que o conteúdo (já pronto no HTML) aparece na tela. */
(function () {
  var feito = false;
  function carregar() {
    if (feito) return;
    feito = true;
    var s = document.createElement("script");
    s.type = "module";
    s.src = "./assets/index-D8rTXfLd.js";
    document.head.appendChild(s);
  }
  try {
    new PerformanceObserver(function (lista, obs) {
      if (lista.getEntriesByName("first-contentful-paint").length) {
        obs.disconnect();
        setTimeout(carregar, 0);
      }
    }).observe({ type: "paint", buffered: true });
  } catch (e) {
    requestAnimationFrame(function () { setTimeout(carregar, 0); });
  }
  setTimeout(carregar, 2500); // garantia
})();
