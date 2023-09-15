function resposta(aceitou) {
    const respostaDiv = document.getElementById('resposta');
    const mensagemDiv = document.getElementById('mensagem');
    const botaoNao = document.getElementById('nao');
  
    if (aceitou) {
      mensagemDiv.textContent = 'Que ótimo! Vamos namorar. 😊';
      botaoNao.disabled = true;  // Torna "Não" não clicável
    } else {
      mensagemDiv.textContent = 'Que pena! Quem sabe numa próxima vez.';
    }
  
    respostaDiv.classList.remove('hidden');
  }
  
  function naoClicavel() {
    // Ação vazia para impedir que "Não" seja clicado
  }
  