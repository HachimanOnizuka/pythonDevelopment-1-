function rotacionarMatriz(matriz) {
    let n = matriz.length;
    let rotacionada = [];
    for (let j = 0; j < n; j++) {
      rotacionada[j] = [];
      for (let i = n - 1; i >= 0; i--) {
        rotacionada[j][n - 1 - i] = matriz[i][j];
      }
    }
    return rotacionada;
  }
  