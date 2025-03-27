function buscarNaMatriz(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === numero) {
          return { linha: i, coluna: j };
        }
      }
    }
    return null;
  }