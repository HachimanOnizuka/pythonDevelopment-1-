class JogoDaVelha {
    constructor() {
      this.tabuleiro = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      this.jogadorAtual = 'X';
    }
  
    exibirTabuleiro() {
      console.log(this.tabuleiro[0].join(' | '));
      console.log('---------');
      console.log(this.tabuleiro[1].join(' | '));
      console.log('---------');
      console.log(this.tabuleiro[2].join(' | '));
    }
  
    verificarVencedor() {
      const jogador = this.jogadorAtual;
      
      // Verifica linhas e colunas
      for (let i = 0; i < 3; i++) {
        if (
          (this.tabuleiro[i][0] === jogador && this.tabuleiro[i][1] === jogador && this.tabuleiro[i][2] === jogador) ||
          (this.tabuleiro[0][i] === jogador && this.tabuleiro[1][i] === jogador && this.tabuleiro[2][i] === jogador)
        ) {
          return true;
        }
      }
      
      // Verifica diagonais
      if (
        (this.tabuleiro[0][0] === jogador && this.tabuleiro[1][1] === jogador && this.tabuleiro[2][2] === jogador) ||
        (this.tabuleiro[0][2] === jogador && this.tabuleiro[1][1] === jogador && this.tabuleiro[2][0] === jogador)
      ) {
        return true;
      }
      
      return false;
    }
  
    jogar(linha, coluna) {
      if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
        return false;
      }
  
      if (this.tabuleiro[linha][coluna] === ' ') {
        this.tabuleiro[linha][coluna] = this.jogadorAtual;
        
        if (this.verificarVencedor()) {
          return 'VITÓRIA';
        }
        
        this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
        return true;
      }
      
      return false;
    }
  
    verificarEmpate() {
      for (let linha of this.tabuleiro) {
        if (linha.includes(' ')) {
          return false;
        }
      }
      return true;
    }
  }
  