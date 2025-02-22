// Objetivo: Calcular o peso ideal de uma pessoa
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.inNome.value;
  const masculino = frm.inMasculino.checked;
  const altura = Number(frm.inAltura.value);

  let pesoIdeal;

  if (masculino) {
    pesoIdeal = 22 * Math.pow(altura, 2);
  } else {
    pesoIdeal = 21 * Math.pow(altura, 2);
  }

  resp.innerText = `${nome}: seu peso ideal é: ${pesoIdeal.toFixed(2)} kg`;
});

frm.addEventListener("reset", () => {
  resp.innerText = ""; // Limpa o conteúdo do h3
});

