function somaArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

let numeros1 = [1, 2, 3, 4, 5];
console.log("Soma do array:", somaArray(numeros1));

function ordenarStrings(arr) {
    return arr.sort();
}

let frutas2 = ["Banana", "Maçã", "Laranja", "Abacaxi"];
console.log("Frutas ordenadas:", ordenarStrings(frutas2));

function removerDuplicados(arr) {
    return [...new Set(arr)];
}

let numeros3 = [1, 2, 2, 3, 4, 4, 5];
console.log("Sem duplicados:", removerDuplicados(numeros3));

function removerDuplicados(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let numeros4 = [1, 2, 2, 3, 4, 4, 5];
console.log("Sem duplicados:", removerDuplicados(numeros4)); 