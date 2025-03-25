let matriz1 = [
    [25, 21, 30],
    [33, 32, 28],
    [16, 22, 24]
  ];

  let matriz2 = [
    [4, 10, 64],
    [8, 6, 12],
    [14, 16, 18]
  ];
  let matriz3 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  for (let i = 0; i < matriz1.length; i++) {
    for (let j = 0; j < matriz1[j].length; j++){
        matriz3[i][j] = matriz1[i][j] + matriz2[i][j];
    }
  }

console.log(matriz3);