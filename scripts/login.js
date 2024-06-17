document.getElementById("loginBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const error = document.getElementById("errorText");

  if (email === "admin@email.com" && senha === "1234") {
    alert("Login efetuado com sucesso!\nBem-vindo(a) Admin!");
    window.location.href = "../index.html";
    localStorage.setItem("logado", true);
    localStorage.setItem("nome", "Admin");
  } else {
    error.innerHTML = "Usuário ou senha inválidos!";
  }
});