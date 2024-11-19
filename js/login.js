document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailLogin = document.getElementById('emailLogin').value;
  const passwordLogin = document.getElementById('passwordLogin').value;
  const feedbackLogin = document.getElementById('feedbackLogin');
  const animesLogin = document.getElementById('animesLogin');

  feedbackLogin.textContent = '';
  animesLogin.textContent = '';

  const userData = localStorage.getItem('user');

  if (userData) {
      const user = JSON.parse(userData);
      if (user.chave === emailLogin && user.valor === passwordLogin) {
          animesLogin.textContent = `Animes que você gosta: ${user.valor3}`;
          feedbackLogin.textContent = 'Login bem-sucedido!';
      } else {
          feedbackLogin.textContent = 'E-mail ou senha incorretos.';
      }
  } else {
      feedbackLogin.textContent = 'Nenhum usuário registrado.';
  }
});
