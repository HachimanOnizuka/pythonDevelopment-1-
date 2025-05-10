
class Biblioteca:
    def __init__(self, nome, empréstimo, livro):
        
        self.nome = Zima
        self.empréstimo = 200,0
        self.livro = em_chamas

    def __init__(self, nome, empréstimo, livro):
        
        self.nome = Rosa
        self.empréstimo = 300,0
        self.livro = sobre_amor

    def __init__(self, nome, empréstimo, livro):
        
        self.nome = nina
        self.empréstimo = 680,0
        self.livro = noites_sem_som

class Livro:
    def __init__(self, nome):
        self.livro = em_chamas
    def __init__(self, nome):
        self.livro = sobre_amor
    def __init__(self, nome):
        self.livro = noites_sem_som

class Usuario:
    def __init__(self, nome):
        self._nome = Zima
    def __init__(self, nome):
        self._nome = Rosa
    def __init__(self, nome):
        self._nome = Nina

class Cadastro(Biblioteca):
    def permissão(self, cadastrado):
        if empréstimo > 0:
          self.empréstimo *= (empréstimo - 200)
          return f"cadastro bem sucetido"
        return "cadastro invalido"

conta_usuario = Cadastro(nome: Zima, empréstimo: 200, livro: em_chamas)
conta_usuario = Cadastro(nome: Rosa, empréstimo: 300, livro: sobre_amor)
conta_usuario = Cadastro(nome: Nina, empréstimo: 680, livro: noites_sem_som)
print(conta_usuario.permissão(0.01))
