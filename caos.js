(function() {
  document.addEventListener("DOMContentLoaded", () => {
    if (!document.body) {
      console.error("Body não encontrado — verifique o HTML.");
      return;
    }

    function corAleatoria() {
      return `hsl(${Math.random() * 360}, 100%, 60%)`;
    }

    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.top = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none"; 
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    for (let i = 0; i < 15; i++) {
      const el = document.createElement("div");
      el.textContent = "Comprar";
      el.style.position = "absolute";
      el.style.left = `${Math.random() * 90}vw`;
      el.style.top = `${Math.random() * 90}vh`;
      el.style.padding = "10px 20px";
      el.style.backgroundColor = corAleatoria();
      el.style.color = "white";
      el.style.borderRadius = "12px";
      el.style.fontFamily = "monospace";
      el.style.transition = "all 0.35s ease";
      el.style.cursor = "pointer";
      el.style.userSelect = "none";
      el.style.pointerEvents = "auto"; 
      container.appendChild(el);

      el.addEventListener("mouseenter", () => {
        el.style.transform = `rotate(${Math.random() * 720 - 360}deg) scale(${0.8 + Math.random() * 1.8})`;
        el.style.left = `${Math.random() * 90}vw`;
        el.style.top = `${Math.random() * 90}vh`;
        el.style.backgroundColor = corAleatoria();
      });

      el.addEventListener("click", (ev) => {
        ev.stopPropagation();
        el.textContent = "💥";
        el.style.transform = "scale(3) rotate(1080deg)";
        el.style.opacity = "0";
        setTimeout(() => el.remove(), 500);
      });
    }

    console.log("Caos instalado ✅");
  });
})();