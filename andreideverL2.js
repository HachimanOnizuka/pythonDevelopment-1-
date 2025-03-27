function transporMatriz(matriz) {
  let transposta = [];
  for (let j = 0; j < matriz[0].length; j++) {
    transposta[j] = [];
    for (let i = 0; i < matriz.length; i++) {
      transposta[j][i] = matriz[i][j];
    }
  }
  return transposta;
}
