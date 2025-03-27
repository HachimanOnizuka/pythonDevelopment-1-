function somaBordas(matriz) {
    let soma = 0;
    let n = matriz.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
          soma += matriz[i][j];
        }
      }
    }
    return soma;
  }
  