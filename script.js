const jardin = document.getElementById('jardin');

function crearFlor() {
  const flor = document.createElement('div');
  flor.classList.add('flor');

  // Contenedor principal de la cabeza de la flor
  const cabezaFlor = document.createElement('div');
  cabezaFlor.classList.add('cabeza-flor');

  const centro = document.createElement('div');
  centro.classList.add('centro');

  // Generar 12 pétalos alineados
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

// Genera 5 flores alineadas correctamente
for (let i = 0; i < 5; i++) {
  crearFlor();
}