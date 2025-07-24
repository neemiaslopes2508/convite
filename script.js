document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', () => {
    document.querySelector('.container').classList.add('oculto');
    document.querySelector('.convite').classList.remove('oculto');
  });

  const opcoes = document.querySelectorAll('.opcao');
  const numeroWhatsApp = "553184887361";

  opcoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const mensagem = encodeURIComponent(botao.dataset.msg);
      alert("Amei sua escolha! 💌");
      window.location.href = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
    });
  });
});
