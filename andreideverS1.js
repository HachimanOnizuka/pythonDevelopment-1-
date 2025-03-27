function somaArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

let numeros1 = [1, 2, 3, 4, 5];
console.log("Soma do array:", somaArray(numeros1));