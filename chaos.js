const elementos = document.querySelectorAll('.flutuante');

elementos.forEach(el => {
  el.style.position = 'absolute';
  
  el.style.left = Math.random() * window.innerWidth + 'px';
  el.style.top = Math.random() * window.innerHeight + 'px';

  setInterval(() => {
    const novaX = Math.random() * window.innerWidth;
    const novaY = Math.random() * window.innerHeight;

    el.style.transition = 'all 3s ease-in-out';
    el.style.left = novaX + 'px';
    el.style.top = novaY + 'px';
  }, 3000);
});