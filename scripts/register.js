document.getElementById("registerBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  
  localStorage.setItem("logado", true);
  localStorage.setItem("nome", nome);

  alert("Cadastro efetuado com sucesso!\nBem-vindo(a) " + nome + "!");

  window.location.href = "../index.html";
});