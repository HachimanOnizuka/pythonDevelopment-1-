function removerDuplicados(arr) {
    return [...new Set(arr)];
}

let numeros3 = [1, 2, 2, 3, 4, 4, 5];
console.log("Sem duplicados:", removerDuplicados(numeros3));