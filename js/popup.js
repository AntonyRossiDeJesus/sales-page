var botoes = document.querySelectorAll(".js-botao");
var botaoFechar = document.querySelector(".botao--fechar");
var body = document.body;

function abrirPopup() {
  body.classList.add("popup--aberto");
}

function fecharPopup() {
  body.classList.remove("popup--aberto");
}

botoes.forEach(function (botao) {
  botao.addEventListener("click", abrirPopup);
});

botaoFechar.addEventListener("click", fecharPopup);
