const prompt = require('prompt-sync')();
const num = Number(prompt("1º Número: "));
const num2 = Number(prompt("2º Número: "));
const soma = num + num2;    
console.log(`A soma dos dois números é ${soma}`);