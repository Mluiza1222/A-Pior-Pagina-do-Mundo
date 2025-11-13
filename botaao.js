const botao = document.createElement("button");
botao.textContent = "Pedidos, peça JÁ!!!!!!";

document.body.appendChild(botao);

botao.addEventListener("mouseenter", () => {
  botao.style.opacity = "0";
  botao.style.transform = "scale(0.600)";
});