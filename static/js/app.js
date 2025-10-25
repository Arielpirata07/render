////// MODAL MÁS INFO ////
const mas_info = document.getElementById("mas-info")
const info_btn = document.getElementById("info-btn")

info_btn.addEventListener("click", (e) => {
  e.preventDefault(); // evita recarga si está en un form
  mas_info.classList.toggle("hidden");
});
// Cerrar haciendo click fuera del modal
window.addEventListener("click", (e) => {
  if (e.target === mas_info) {
    mas_info.classList.add("hidden");
  }
});
////// CARROUSEL ///////
const elementos = [
  { id: 1, name: "soldier", contenido: "SACRED WARRIOR" },
  { id: 2, name: "Rogue", contenido: "STEALTH ASSASSIN" },
  { id: 3, name: "Mage", contenido: "GRAND MAGNUS" },
  { id: 4, name: "Alberto", contenido: "Señor José" }
];
// seleccionar etiquetas
const track = document.getElementById("carrousel-track");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const indicatorsContainer = document.getElementById("carrousel-indicators");

let currentItem = 0;

// generar los elementos del carrusel
elementos.forEach((el) => {
  const div = document.createElement("div");
  div.classList.add("carousel-item");
  div.innerHTML = `
    <i class='bx bxs-quote-left'></i>      
    <p class="info-cliente">${el.contenido}</p>
    <p class="nombre-cliente">${el.name}</p>
    <i class='bx bxs-quote-right'></i>
  `;
  track.appendChild(div);
});

// generar los indicadores
elementos.forEach((_, index) => {
  const indicator = document.createElement("button");
  if (index === 0) indicator.classList.add("active-ind"); // primer activo
  indicatorsContainer.appendChild(indicator);
  indicator.addEventListener("click", () => {
    currentItem = index;
    updateCarousel();
  });
});

const indicators = document.querySelectorAll("#carrousel-indicators button");

// función para actualizar posición y estado
function updateCarousel() {
  const itemWidth = track.children[0].offsetWidth;
  track.style.transform = `translateX(-${currentItem * itemWidth}px)`;
  
  const slides = document.querySelectorAll(".carrousel-item");
  slides.forEach((slide, i) => {
    slide.classList.toggle("active-ind", i === currentItem);
  });

  indicators.forEach((btn, i) => {
    btn.classList.toggle("active-ind", i === currentItem);
  });
}

// botones
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem >= elementos.length) currentItem = 0;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) currentItem = elementos.length - 1;
  updateCarousel();
});

// reajustar si cambia tamaño
window.addEventListener("resize", updateCarousel);
setInterval(() => nextBtn.click(), 4000);


///////////// TO TOP BOTON /////////////////////////////
const btnToTop = document.getElementById("btnToTop");

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    btnToTop.classList.add("show");
  } 
  else {
    btnToTop.classList.remove("show");
  }
});

// Scroll suave al hacer clic
btnToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
////////////////////CARTA MOVIL/////////////////////////

function handleMouseMove(event) {
  event.forEach(element => {
  element.addEventListener("mousemove", (e) => {
  const rect = element.getBoundingClientRect();
  const x = e.clientX - rect.left; // posición del mouse en X dentro de la tarjeta
  const y = e.clientY - rect.top;  // posición del mouse en Y dentro de la tarjeta
/*
    e.clientX y e.clientY son las coordenadas del mouse en la pantalla completa.
    rect.left y rect.top son el punto donde empieza la tarjeta.
*/
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Calcular cuánto se debe inclinar
  const rotateX = ((y - centerY) / 10) * -1; // inclinación vertical
  const rotateY = (x - centerX) / 10;        // inclinación horizontal

  element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.96)`;
});
element.addEventListener("mouseleave", () => {
  element.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
}); 
});
 }
const card = document.querySelectorAll(".caracteristica");
const img_demo = document.querySelectorAll(".manual-img");
handleMouseMove(card);
handleMouseMove(img_demo);



