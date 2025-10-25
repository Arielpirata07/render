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
  {
    id: 1,
    name: {
      es: "Martín G., Administrador de ‘Los Álamos’",
      en: "Martín G., Manager of ‘Los Álamos’"
    },
    contenido: {
      es: "Desde que usamos este sistema, la gestión del barrio se volvió muchísimo más ordenada. Puedo ver los pagos, propietarios y reclamos en un solo lugar. ¡Fácil de usar y muy práctico!",
      en: "Since we started using this system, neighborhood management has become much more organized. I can see payments, owners, and requests all in one place. Easy to use and very practical!"
    }
  },
  {
    id: 2,
    name: {
      es: "Laura P., Propietaria del lote 32",
      en: "Laura P., Lot 32 Owner"
    },
    contenido: {
      es: "Antes dependíamos de planillas y mensajes por WhatsApp. Ahora con el sistema todo está centralizado, puedo consultar mi saldo o liquidaciones sin molestar a nadie.",
      en: "Before, we relied on spreadsheets and WhatsApp messages. Now everything is centralized, and I can check my balance or settlements without bothering anyone."
    }
  },
  {
    id: 3,
    name: {
      es: "Carlos D., Encargado de mantenimiento",
      en: "Carlos D., Maintenance Manager"
    },
    contenido: {
      es: "Nos facilita muchísimo el trabajo. Las órdenes de mantenimiento llegan rápido y sabemos exactamente qué tareas están pendientes. Es intuitivo y ahorra tiempo.",
      en: "It makes our work much easier. Maintenance requests arrive quickly, and we know exactly what tasks are pending. Intuitive and time-saving."
    }
  },
  {
    id: 4,
    name: {
      es: "Andrea R., Directora de Administración Sur",
      en: "Andrea R., Director of South Management"
    },
    contenido: {
      es: "Probamos varios programas, pero este fue el único que se adaptó perfectamente a distintos barrios sin complicaciones técnicas. Además, el soporte siempre responde rápido.",
      en: "We tested several programs, but this was the only one that adapted perfectly to different neighborhoods without technical issues. Plus, support always responds quickly."
    }
  }
];

// seleccionar etiquetas
const track = document.getElementById("carrousel-track");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const indicatorsContainer = document.getElementById("carrousel-indicators");

let currentItem = 0;
let currentLanguage = document.documentElement.lang || "es";
console.log("Idioma actual del carrusel:", currentLanguage);
// generar los elementos del carrusel
function renderCarousel() {
  track.innerHTML = ""; // limpiar
  elementos.forEach((el, index) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");
    if (index === currentItem) div.classList.add("active");
    div.innerHTML = `
      <i class='bx bxs-quote-left'></i>      
      <p class="info-cliente">${el.contenido[currentLanguage]}</p>
      <p class="nombre-cliente">${el.name[currentLanguage]}</p>
      <i class='bx bxs-quote-right'></i>
    `;
    track.appendChild(div);
  });
}
renderCarousel();

// actualizar traducción cuando cambia idioma
function updateCarouselLang() {
  renderCarousel();
}

// integrar con tu sistema de traducción
window.addEventListener("languageChange", (event) => {
  currentLanguage = event.detail.lang;
  renderCarousel();
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



