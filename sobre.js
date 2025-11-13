function instalarOCaos() {
  const cores = ["red", "lime", "blue", "yellow", "magenta", "cyan", "orange"];
  const body = document.body;

  const loopCaos = setInterval(() => {
    const cor = cores[Math.floor(Math.random() * cores.length)];
    body.style.backgroundColor = cor;
    body.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
  }, 200);

  const piscada = setInterval(() => {
    document.querySelectorAll("*").forEach(el => {
      el.style.color = Math.random() > 0.5 ? "black" : "white";
    });
  }, 150);

  setTimeout(() => {
    clearInterval(loopCaos);
    clearInterval(piscada);
    body.style.backgroundColor = "";
    body.style.transform = "";
    document.querySelectorAll("*").forEach(el => el.style.color = "");
  }, 50000);
}

instalarOCaos();