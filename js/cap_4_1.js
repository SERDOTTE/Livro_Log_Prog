const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  const nota1 = Number(frm.inNota1.value);
  const nota2 = Number(frm.inNota2.value);
  const media = (nota1 + nota2) / 2;

  if (media >= 7) {
        resp2.innerText = `Parabens ${nome}, você foi aprovado(a)!`;
    } else {
        resp2.innerText = `Ops ${nome}, você foi reprovado(a)! :(`;
    }

  resp1.innerText = `Média das Notas ${media.toFixed(2)}`;
  e.preventDefault();
});