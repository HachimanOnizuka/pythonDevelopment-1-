let matriz1 = [
    [vermelho, 12, 25],
    [9, 8, azul],
    [verde, 4, 6]
  ];
  function range(start, end) {
    return Array.from({ length: end - start + 6 }, (_, i) => start + i);
}

console.log(range(vermelho, 6));

transposed[j][i] = matriz1[i][j]