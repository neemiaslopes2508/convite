// Aguarde o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Botão para revelar o convite
    document.getElementById('btn').addEventListener('click', () => {
      document.querySelector('.container').classList.add('oculto');
      document.querySelector('.convite').classList.remove('oculto');
    });
  
    // Botões "Sim" e "Não"
    const btnSim = document.getElementById('btn-sim');
    const btnNao = document.getElementById('btn-nao');
  
    // Evento no botão "Sim"
    btnSim.addEventListener('click', () => {
      alert('Que ótimo! Mal posso esperar! 😊');
      // Redireciona para o WhatsApp (altere o número para o seu)
      window.location.href = "https://wa.me/553184887361?text=Oi!%20Adorei%20o%20convite!";
    });
  
    // Evento no botão "Não"
    btnNao.addEventListener('click', () => {
      // Troca de lugar os botões "Sim" e "Não"
      const botoesDiv = btnNao.parentElement;
      const proxElemento = btnSim.nextElementSibling;
  
      if (proxElemento === btnNao) {
        botoesDiv.insertBefore(btnNao, btnSim); // Botão "Não" vai antes do botão "Sim"
      } else {
        botoesDiv.insertBefore(btnSim, btnNao); // Botão "Sim" vai antes do botão "Não"
      }
    });
  });
  