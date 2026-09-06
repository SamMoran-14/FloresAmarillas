const jardin = document.getElementById('jardin');

function crearFlor() {
  const flor = document.createElement('div');
  flor.classList.add('flor');

  const cabezaFlor = document.createElement('div');
  cabezaFlor.classList.add('cabeza-flor');

  const centro = document.createElement('div');
  centro.classList.add('centro');

  const totalPetalos = 12;
  for (let i = 0; i < totalPetalos; i++) {
    const petalo = document.createElement('div');
    petalo.classList.add('petalo');
    const angulo = (360 / totalPetalos) * i;
    petalo.style.transform = `rotate(${angulo}deg)`;
    cabezaFlor.appendChild(petalo);
  }

  cabezaFlor.appendChild(centro);

  const tallo = document.createElement('div');
  tallo.classList.add('tallo');

  flor.appendChild(cabezaFlor);
  flor.appendChild(tallo);

  jardin.appendChild(flor);
}

for (let i = 0; i < 5; i++) {
  crearFlor();
}