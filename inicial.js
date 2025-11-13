const tempoAleatorio = Math.random() * (15000 - 5000) + 5000;

console.log(`A página vai reiniciar em ${(tempoAleatorio / 1000).toFixed(3)} segundos...`);

setTimeout(() => {
  const telaAzul = document.createElement('div');
  telaAzul.style.position = 'fixed';
  telaAzul.style.top = 0;
  telaAzul.style.left = 0;
  telaAzul.style.width = '100%';
  telaAzul.style.height = '100%';
  telaAzul.style.backgroundColor = 'blue';
  telaAzul.style.opacity = 0;
  telaAzul.style.transition = 'opacity 0.10s ease';
  telaAzul.style.zIndex = 9999;
  document.body.appendChild(telaAzul);

  setTimeout(() => {
    telaAzul.style.opacity = 1;
  }, 100);

  setTimeout(() => {
    location.reload();
  }, 1500);
}, tempoAleatorio);;

