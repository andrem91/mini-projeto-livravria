const btn_enviar = document.getElementById("btn-enviar");
const msgAgradecimento = document.getElementById("msg-agradecimento");

btn_enviar.addEventListener("click", function (event) {
  msgAgradecimento.classList.remove("d-none");
  form.reset();
});