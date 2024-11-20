document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();  

  const emailr = document.getElementById('email').value;
  const passwordr = document.getElementById('password').value;
  const nomer = document.getElementById('nome').value.trim();
  const animes = document.getElementById('animesr').value;

  const emailrError = document.getElementById('emailrError');
  const passwordrError = document.getElementById('passwordrError');
  const feedbackr = document.getElementById('feedbackr');
  const nomerError = document.getElementById('nomerError');
  const animesrError = document.getElementById('animesrError');

  emailrError.textContent = '';
  passwordrError.textContent = '';
  feedbackr.textContent = '';
  nomerError.textContent = '';
  animesrError.textContent = '';

  const emailrRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailrRegEx.test(emailr)) {
      emailrError.textContent = 'Formato de e-mail inválido';
      return;
  }

  const nomerRegEx = /^[A-Za-z]{3,}$/;
  if (!nomerRegEx.test(nomer)) {
        nomerError.textContent = 'O nome deve ter no mínimo 3 caracteres';
        return;
  }

  const passwordrRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordrRegEx.test(passwordr)) {
      passwordrError.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo letras e números.';
      return;
  }

  if (animes.trim() === '') {
      animesrError.textContent = 'Por favor, informe pelo menos um anime.';
      return;
  }

  let novoUser = {
      email: emailr,       
      senha: passwordr,    
      nome: nomer,       
      animes: animes       
  };

  localStorage.setItem('user', JSON.stringify(novoUser));

  feedbackr.textContent = 'Cadastro realizado com sucesso!';

  setTimeout(function() {
      window.location.href = 'login.html';
  }, 2000);
});
