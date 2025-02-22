const prompt = require('prompt-sync')();
const peso = Number(prompt("Qual o peso (kg)? "));
const consumo = Number(prompt("Qual o consumo diário (gr):"));
const dias = Math.floor(peso * 1000 / consumo);
const sobra = (peso * 1000) % consumo;
console.log(`Peso da ração: ${peso} kg`);
console.log(`Consumo diário: ${consumo} gr`);
console.log(`Duração: ${dias} dias`);
console.log(`Sobra: ${sobra} gr`);