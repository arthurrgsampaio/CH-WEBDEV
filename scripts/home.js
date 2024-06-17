document.addEventListener("DOMContentLoaded", () => {
  const logado = localStorage.getItem("logado");
  const nav = document.getElementById("navLog");
  const nome = localStorage.getItem("nome");

  if (logado) {
    while (nav.firstChild) {
      nav.removeChild(nav.firstChild);
    }

    const nomeAppend = document.createElement("p");
    nomeAppend.innerHTML = nome;
    nomeAppend.style.fontSize = "1.2rem";

    const barra = document.createElement("p");
    barra.innerHTML = "|";

    const logout = document.createElement("p");
    logout.innerHTML = "Deslogar";
    logout.id = "logoutBtn";
    logout.style.fontSize = "1.2rem";
    logout.style.cursor = "pointer";

    nav.append(nomeAppend, barra, logout);
  }

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("logado");
    localStorage.removeItem("nome");
    window.location.reload();
  });
});

