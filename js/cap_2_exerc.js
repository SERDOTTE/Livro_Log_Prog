const frm = document.querySelector("form");
//const resp = document.querySelector("h3");

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
//frm.addEventListener("submit", (e) => {
  //  const nome = frm.inNome.value; //obtém o nome digitado no form
  //  resp.innerText = `Olá ${nome}`; //exibe a resposta do programa
  //  e.preventDefault(); //evita envio do form
//})


const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value;
    const duracao = Number(frm.inDuracao.value);
    
    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60;

    resp1.innerText = titulo;
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`;

    e.preventDefault();
    });