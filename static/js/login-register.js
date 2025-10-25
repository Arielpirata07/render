
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.id;
  if (page === "login-page") {
    iniciarLogin();
  } else if (page === "register-page") {
    iniciarRegistro();
  }
});

const form = document.querySelector("#contact_form");
const pass = document.querySelector("#pass");
const confPass = document.querySelector("#conf-pass");

function iniciarLogin() {
  console.log("Página de inicio de sesión cargada");
  // Lógica para login: recordar usuario, validar campos, mostrar errores, etc.
  const emailInput = document.querySelector("#email");
  const rememberMe = document.querySelector("#remember_me");

  const savedEmail = localStorage.getItem("rememberedEmail");
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMe.checked = true;
  }

  form.addEventListener("submit", (e) => {
    if (rememberMe.checked) {
      localStorage.setItem("rememberedEmail", emailInput.value);
    } else {
      localStorage.removeItem("rememberedEmail");
    }
  });
}

function iniciarRegistro() {
  console.log("Página de registro cargada");
  // Lógica para registrar: validar contraseñas, mostrar mensajes, etc.

  form.addEventListener("submit", (e) => {
    if (pass.value !== confPass.value) {
      e.preventDefault();
      alert("Las contraseñas no coinciden.");
    }
  });
}

