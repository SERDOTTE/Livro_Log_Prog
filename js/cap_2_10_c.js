const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
frm.addEventListener("submit", (e) => {
  const produto = frm.inProduto.value.trim();
  let preco = frm.inPreco.value.trim();
  const tercproduto = preco * 0.5;
  const total = tercproduto + (2 * preco);
  resp1.innerText = `${produto} - Promoçao: Leve 3 por R$: ${total.toFixed(2)}`;
  resp2.innerText = `O 3º produto custa apenas R$: ${tercproduto.toFixed(2)}`;
  e.preventDefault();
});