document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("botao");
    const mensagem = document.getElementById("mensagem");

    botao.addEventListener("click", function() {
      mensagem.textContent = "Seja bem-vindo!";
    });
  });

