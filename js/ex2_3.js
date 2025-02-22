const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");

frm.addEventListener("submit", (e) => {
  let preco = frm.inPreco.value.trim();
  const medicamento = (frm.inMedicamento.value);

  if (isNaN(preco) || preco <= 0) {
    resp1.innerText = "Por favor, insira um preço válido!";
    return;
  }

    preco = parseFloat(preco);
    const valorPagar = Math.floor(preco * 2).toFixed(2);
  
  resp1.innerText = `Promoção de ${medicamento} \nLeve 2 por apenas R$ ${valorPagar}` ;
    
  e.preventDefault();
  });