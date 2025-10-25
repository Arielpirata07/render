// Diccionario de traducciones
const translations = {
  es: {
    //HEADER//
    title: "Gestión de Barrio Privado",
    register_btn: "Registrarse",
    feature: "Características",
    benefit:"Beneficios",
    plans:"Planes",
    contact:"Contacto",
    log_in:"Iniciar Sesion",
    //HERO//
    easiest_way:"La forma más simple de administrar tu, ",
    Private:"Barrio Privado",
    free_try:"Probar gratis",
    more_info:"Más info",
    //MODAL-CONTACTO//
    left_message:"Deja tu mensaje y te contactaremos en las siguientes 24hs",
    your_name:"Tu Nombre",
    phone:"Teléfono",
    email:"Correo electrónico",
    message:"Mensaje",
    send:"Enviar",
    ///BENEFICIOS///
    simpler:"¿Por que es más simple?",
    benefit1:"Porque se reducen las tareas repetitivas y manuales ya que el sistema hace todos los cálculos de liquidación en segundos, de forma automática y sin necesidad de tu intervención, minimizando errores humanos.",
    benefit2:"Por que toda la información del barrio se centraliza en un solo lugar, fácil de acceder. Contando con apartados para agregar, modificar, eliminar o consultar los datos, permitiendo a los propietarios recibir información clara y verificable sobre sus pagos y consumos.",
    benefit3:"Porque es adaptable a distintos tipos de barrios cerrados, consorcios o clubes de campo, permitiendo gestionar los lotes y propietarios de manera centralizada, controlar consumos y generar expensas de forma automática.",
    wh_cust_say:"¿Qué dicen nuestros clientes?",
    //CARACTERÍSTICAS//
    feature1:"Gestión de lotes y propietarios",
    feat_p:"Registro completo de cada lote, con datos del propietario y estado actual.",
    feature2:"Control de consumos",
    feat_p2:"Carga y seguimiento de consumos de agua, luz y gas para cada unidad.",
    feature3:"Liquidaciones automáticas",
    feat_p3:"Generación de expensas y facturación mensual en base a consumos y cuotas fijas.",
    feature4:"Envío digital",
    feat_p4:"Posibilidad de exportar o enviar la liquidación directamente por correo electrónico.",
    feature5:"Reportes claros",
    feat_p5:"Visualización de pagos, saldos y resúmenes de cada propietario.",
    feature6:"Multiidioma",
    feat_p6:"Compatible en español e inglés, gracias a la integración de traducción.",
    //PLANES//
    plans_title:"60 días de garantía o devolución de dinero.",
    plans_subtitle:"Usá nuestro programa de gestión 60 días y si no cumple tus expectativas,te devolvemos el 100% del pago.",
    per_month:"/por mes",
    by_neigh:"Por barrio",
    contact_wh:"Contactar por Whatsapp",
    war_60day:"60 días de garantía",
    lot_manag:"Gestión de Lotes",
    own_manag:"Gestión de Propietarios",
    idem:"Idem anterior",
    cons_control:"Control de consumos",
    cost_control:"Control de costos",
    exp_control:"Control de Expensas",
    pay_manag:"Manejo de Pagos",
    send_set:"Envío de liquidaciones",
    //ALIANZAS//
    strategic_al:"Alianzas Estratégicas",
    //CLIENTES//
    contact_us:"Contáctanos",
    //DESCARGA//
    download_manual: "Descargá el manual del Programa de Gestión",
    total_free:"Totalmente Gratuito",
    //FOOTER//
    proud:"Estamos orgullosos de lo que hacemos y nos gustaria ayudarte.",
    objetive:"Nuestro objetivo es simplificar y modernizar la administración de barrios privados, ofreciendo transparencia y eficiencia tanto para administradores como para vecinos. Somos un pequeño startup que desea crecer ayudando a los administradores a mejorar su gestión con sistemas simples y adaptables.",
    want_to:"¿Queres saber más?",
    copyright:"Copyright © 2025 Gestión de Barrio Privado. Reservados todos los derechos.",
    //---------------REGISTER-LOGIN-RECUPERAR---------------------//
    gestion:"Gestión de <span>Barrio Privado</span>",
    sub_parrafo_register:'Registrate para poder acceder a los servicios de tu barrio. Te tomará solo unos minutos. Completá los datos y hacé click en <span>"Registrarse"</span>',
    nombres:"Nombres",
    apellidos:"Apellidos",
    pass:"Contraseña",
    pass_conf:"Confirmación Contraseña",
    already_account: function(){
      const url = (window && window.URL_LOGIN) ? window.URL_LOGIN : 'login';
      return `Ya tenés una cuenta. <a href="${url}" class="iniciar-sesion">Inicia sesion ahora!</a>`;
    },
    sub_parrafo_login:'Si ya estás registrado ingresá tu email y contraseña para acceder.',
    recover_pass:"Recuperar contraseña",
    enter:"Ingresar",
    remember:'<input type="checkbox" id="remember-me"> Recordarme',
    dont_account: function(){
      const url = (window && window.URL_REGISTER) ? window.URL_REGISTER : 'register';
      return `No tenés una cuenta. <a href="${url}" class="iniciar-sesion">Registrate ahora!</a>`;
    },
    forgot_pass:"¿Olvidó su contraseña?",
    sub_parrrafo_recuperar:"Si no recuerda la contraseña para acceder, ingrese su dirección de correo electrónico y le enviaremos las instrucciones para poder modificarla.",
    send_instructions:"Enviar instrucciones",
    //-----------------------------DEMO-------------------------//
    free_demo:"Demo Gratuita",
    unique_platform:'Gestioná tu barrio <span>en una sola plataforma.</span>',
    free_download:"Descargá la demo Gratis.",
    free_access:"Proba acceso completo y sin costo.",
    want_free_try:"Quiero probar la Demo de manera gratuita",
    want_product:"Quiero saber más sobre el producto completo",

  },
  en: {
    //HEADER//
    title: "Private Neighborhood Management",
    register_btn: "Sign up",
    feature: "Features",
    benefit:"Benefits",
    plans:"Plans",
    contact:"Contact",
    log_in:"Log in",
    //HERO//
    easiest_way:"The easiest way to manage your, ",
    Private:"Private Neighborhood",
    free_try:"Free try",
    more_info:"More info",
    //MODAL-CONTACTO//
    left_message:"Leave your message and we will contact you in the following 24 hours.",
    your_name:"Your Name",
    phone:"Phone",
    email:"Email",
    message:"Message",
    send:"Send",
    ///BENEFICIOS///
    simpler:"Why is it simpler?",
    benefit1:"Because repetitive and manual tasks are reduced, as the system performs all settlement calculations in seconds, automatically and without your intervention, minimizing human error.",
    benefit2:"Because all neighborhood information is centralized in a single, easily accessible location. With sections for adding, modifying, deleting, or consulting data, allowing owners to receive clear and verifiable information about their payments and consumption.",
    benefit3:"Because it can be adapted to different types of neighborhoods, consortiums, or country clubs, allowing for centralized management of lots and owners, consumption control, and automatic generation of expenses.",
    wh_cust_say:"What do our customers say?",
    //CARACTERÍSTICAS//
    feature1:"Lot and owner management",
    feat_p:"Complete record of each lot, with owner details and current status.",
    feature2:"Consumption control",
    feat_p2:"Upload and follow up on water, electricity, and gas consumption for each unit.",
    feature3:"Automatic settlements",
    feat_p3:"Generation of monthly expenses and billing based on consumption and fixed fees.",
    feature4:"Digital delivery",
    feat_p4:"Option to export or send the settlement directly by email.",
    feature5:"Clear reports",
    feat_p5:"View payments, balances, and summaries for each owner.",
    feature6:"Multi-language",
    feat_p6:"Compatible in Spanish and English, thanks to translation integration.",
    //PLANES//
    plans_title:"60-day money-back guarantee.",
    plans_subtitle:"Use our management program for 60 days, and if it doesn't meet your expectations, we will refund 100% of your payment.",
    per_month:"/per month",
    by_neigh:"By neighborhood",
    contact_wh:"Contact via WhatsApp",
    war_60day:"60-day warranty",
    lot_manag:"Lot management",
    own_manag:"Owner management",
    idem:"Same as above",
    cons_control:"Consumption control",
    cost_control:"Costs control",
    exp_control:"Expense control",
    pay_manag:"Payment Management",
    send_set:"Sending settlements",
    //ALIANZAS//
    strategic_al:"Strategic Alliances",
    //CLIENTES//
    contact_us:"Contact Us",
    //DESCARGA//
    download_manual:"Download the management program manual",
    total_free:"Totally Free",
    //FOOTER//
    proud:"We are proud of what we do and would like to help you.",
    objetive:"Our objective is to simplify and modernize the administration of private neighborhoods, offering transparency and efficiency for both administrators and residents. We are a small startup that wants to grow by helping administrators improve their management with simple and adaptable systems.",
    want_to:"Want to know more?",
    copyright:"Copyright © 2025 Private Neighborhood Management. Reserved all rights.",
    //---------------REGISTER-LOGIN-RECUPERAR---------------------//
    gestion:"Management of <span>Private Neighborhood</span>",
    sub_parrafo_register:'Register to access services in your neighborhood. It will only take a few minutes. Fill in the information and click on <span>"Register"</span>',
    nombres:"Names",
    apellidos:"Last Names",
    pass:"Password",
    pass_conf:"Confirm Password",
    already_account: function(){
      const url = (window && window.URL_LOGIN) ? window.URL_LOGIN : 'login';
      return `You already have an account. <a href="${url}" class="iniciar-sesion">Log in now!</a>`;
    },
    sub_parrafo_login:'If you are already registered, enter your email address and password to log in.',
    recover_pass:"Recover password",
    enter:"Send",
    remember:'<input type="checkbox" id="remember-me"> Remind me',
    dont_account: function(){
      const url = (window && window.URL_REGISTER) ? window.URL_REGISTER : 'register';
      return `Dont have an account. <a href="${url}" class="iniciar-sesion">Register now!</a>`;
    },
    forgot_pass:"Forgot your password?",
    sub_parrrafo_recuperar:"If you do not remember your password, enter your email address and we will send you instructions on how to change it.",
    send_instructions:"Send instructions",
    //-----------------------------DEMO-------------------------//
    free_demo:"Free Demo",
    unique_platform:'Manage your Neighborhood <span>on a single platform.</span>',
    free_download:"Download the Free Demo.",
    free_access:"Try it free with full access.",
    want_free_try:"I want to try the demo for free",
    want_product:"I want to know more about the complete product" 
  }
};

let currentLang = "es";

// Aplicar traducción
function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    const langTranslations = translations[lang] || {};
    const entry = langTranslations[key];
    let html = '';
    if (typeof entry === 'function') {
      try { html = entry(); } catch (e) { html = ''; }
    } else if (typeof entry === 'string') {
      html = entry;
    } else {
      html = '';
    }
    el.innerHTML = html;
  });
}

////////////// MODAL LENGUAGE ////////////
const language_btn = document.querySelector(".language")
const idiomas = document.querySelector(".idiomas")
const flecha_idioma = document.getElementById("flecha-idioma")
language_btn.addEventListener("click", (e) => {
  e.preventDefault(); 
  idiomas.classList.toggle("hidden")
  if(idiomas.classList.contains("hidden")){
    flecha_idioma.classList.remove("bx-chevron-down")
    flecha_idioma.classList.add("bx-chevron-up")
  }
  else{
    flecha_idioma.classList.remove("bx-chevron-up")
    flecha_idioma.classList.add("bx-chevron-down")
  }
});
window.addEventListener("click", (e) => {
  if (e.target === idiomas) {
    idiomas.classList.add("hidden")
  }
});

// Cambiar idioma al hacer clic
// Seleccionar elementos del botón
const en_btn = document.getElementById("en")
const es_btn = document.getElementById("es")
const textLang = document.querySelector(".text-language");
    
function idioma_btn(lang){
    // 1️.Cambiar idioma
    currentLang = lang
    // 2️.Aplicar traducción en toda la web
    applyTranslations(currentLang);
    // 3️.Cambiar texto del botón
    textLang.textContent = currentLang === "es" ? "Español" : "English";
    // 4️.Guardar preferencia en el almacenamiento local
    localStorage.setItem("lang", currentLang);
}
en_btn.addEventListener("click", () => idioma_btn("en"));
es_btn.addEventListener("click", () => idioma_btn("es"));


// Cargar idioma inicial
applyTranslations(currentLang);


