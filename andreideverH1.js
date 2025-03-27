class Personagem {
    constructor(nome, vida, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    atacar(alvo) {
        const dano = Math.max(0, this.ataque - alvo.defesa);
        alvo.vida -= dano;
        console.log(`${this.nome} atacou ${alvo.nome} causando ${dano} de dano!`);
        if (alvo.vida <= 0) {
            console.log(`${alvo.nome} foi derrotado!`);
        }
    }
}

class Guerreiro extends Personagem {
    constructor(nome) {
        super(nome, 120, 30, 20);
        this.habilidade = 'Espada Afiada';
    }

    usarHabilidadeEspecial(alvo) {
        const dano = this.ataque * 1.5 - alvo.defesa;
        alvo.vida -= dano;
        console.log(`${this.nome} usou ${this.habilidade} causando ${dano} de dano!`);
    }
}

class Mago extends Personagem {
    constructor(nome) {
        super(nome, 80, 40, 10);
        this.habilidade = 'Bola de Fogo';
        this.mana = 100;
    }

    usarHabilidadeEspecial(alvo) {
        if (this.mana >= 30) {
            const dano = this.ataque * 2 - alvo.defesa;
            alvo.vida -= dano;
            this.mana -= 30;
            console.log(`${this.nome} usou ${this.habilidade} causando ${dano} de dano!`);
        } else {
            console.log('Mana insuficiente!');
        }
    }
}

class Arqueiro extends Personagem {
    constructor(nome) {
        super(nome, 90, 35, 15);
        this.habilidade = 'Chuva de Flechas';
    }

    usarHabilidadeEspecial(alvo) {
        const dano = (this.ataque - alvo.defesa) * 3;
        alvo.vida -= dano;
        console.log(`${this.nome} usou ${this.habilidade} causando ${dano} de dano!`);
    }
}

// Teste do Jogo de RPG
const guerreiro = new Guerreiro('Conan');
const mago = new Mago('Gandalf');
const arqueiro = new Arqueiro('Legolas');

guerreiro.usarHabilidadeEspecial(mago);
mago.usarHabilidadeEspecial(arqueiro);
arqueiro.usarHabilidadeEspecial(guerreiro);

guerreiro.atacar(mago);
mago.atacar(arqueiro);
arqueiro.atacar(guerreiro);
