function multiplicarMatrizes(matriz1, matriz2) {
    // Verifica se o número de colunas da matriz1 é igual ao número de linhas da matriz2
    if (matriz1[0].length !== matriz2.length) {
      throw new Error("Número de colunas da primeira matriz deve ser igual ao número de linhas da segunda");
    }
  
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz2[0].length; j++) {
        let soma = 0;
        for (let k = 0; k < matriz1[0].length; k++) {
          soma += matriz1[i][k] * matriz2[k][j];
        }
        resultado[i][j] = soma;
      }
    }
    return resultado;
  }
  