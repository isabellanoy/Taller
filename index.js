document.addEventListener("DOMContentLoaded", () => {
  // Casillas de los tableros
  const tableros = document.querySelectorAll(".tablero");
  tableros.forEach(tablero => {
      const numCasillas = parseInt(tablero.dataset.casillas, 10) || 0;
      for (let i = 0; i < numCasillas; i++) {
          const casilla = document.createElement("div");
          casilla.classList.add("casilla");
          tablero.appendChild(casilla);
      }
  });

  // Fichas 
  // Nombres de las fichas, no sé cuales son las fichas de este juego porque nunca lo he jugado xd
  const nombresFichas = ["Barquito", "Lancha", "Peñero", "Ferry", "Barco", "Caballo"]; 
  const listaFichas = document.getElementById("lista-fichas");

  nombresFichas.forEach(nombre => {
      const ficha = document.createElement("li");
      ficha.textContent = nombre;
      listaFichas.appendChild(ficha);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Modal de instrucciones
  const instrucciones = document.getElementById("instrucciones");
  const modal = document.getElementById("modal-instrucciones");
  const closeBtn = document.querySelector(".close");

  // Mostrar
  instrucciones.addEventListener("click", () => {
      modal.style.display = "block";
  });

  // Cerrar al hacer clic en la x
  closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Cerrar al hacer clic en cualquier parte de la pantalla
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});

//profe no sé que otra funcionalidad ponerle a efectos de este taller, pero si me da una recomendación pues lo agradeceré.
