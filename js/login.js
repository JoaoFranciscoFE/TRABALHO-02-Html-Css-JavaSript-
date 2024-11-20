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
      if (user.email === emailLogin && user.senha === passwordLogin) {
          animesLogin.textContent = `Animes que você gosta: ${user.animes}`;
          feedbackLogin.textContent = 'Login bem-sucedido!';
          window.location.href = "homePage.html";
          setTimeout(function() {
            window.location.href = 'login.html';
            }, 2000);
      } else {
          feedbackLogin.textContent = 'E-mail ou senha incorretos.';
      }
  } else {
      feedbackLogin.textContent = 'Nenhum usuário registrado.';
  }
});
