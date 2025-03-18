let numero1 = parseInt(prompt("Digite um número para a contagem regressiva:"));
for (let i = numero1; i >= 0; i--) {
    console.log(i);
}

let numero2 = parseInt(prompt("Digite um número para somar de 1 até ele:"));
let soma = 0;
let indice = 1;
while (indice <= numero2) {
    soma += indice;
    indice++;
}
console.log("Soma:", soma);

let numero3 = parseInt(prompt("Digite um número para ver sua tabuada:"));
for (let i = 1; i <= 10; i++) {
    console.log(`${numero3} x ${i} = ${numero3 * i}`);
}

let numero4 = parseInt(prompt("Digite um número para ver os pares até ele:"));
for (let i = 2; i <= numero4; i += 2) {
    console.log(i);
}

let numero5 = parseInt(prompt("Digite um número para calcular o fatorial:"));
let fatorial = 1;
let i = 1;
while (i <= numero5) {
    fatorial *= i;
    i++;
}
console.log(`Fatorial de ${numero}: ${fatorial}`);

let numero6;
do {
    numero6 = parseInt(prompt("Digite um número maior que 10:"));
} while (numero6 <= 10);
console.log("Número válido:", numero6);

let tamanho = parseInt(prompt("Digite o tamanho do quadrado:"));
for (let i = 0; i < tamanho; i++) {
    let linha = "";
    for (let j = 0; j < tamanho; j++) {
        linha += "* ";
    }
    console.log(linha);
}