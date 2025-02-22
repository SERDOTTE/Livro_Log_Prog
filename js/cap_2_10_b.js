const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp");
frm.addEventListener("submit", (e) => {
  let preco = frm.inPreco.value.trim();
  const duracao = frm.inDuracao.value.trim();

  preco = parseFloat(preco);
  const valorPagar = (preco * Math.ceil(duracao/15)).toFixed(2);
  resp1.innerText = `Valor a pagar R$: ${valorPagar}`;
  e.preventDefault();
});