
class Biblioteca:
    def __init__(self, nome, emprestimo, livro):
        
        self.nome = nome
        self.emprestimo = emprestimo
        self.livro = livro

class Livro:
        def __init__(self, livro):
         self.livro = livro

class Usuario:
        def __init__(self, nome):
         self._nome = nome

class Cadastro(Biblioteca):
    def permissão(self, cadastrado):
        if value > 0:
          value = "emprestimo"
          self.emprestimo *= (value - 200)
          return f"cadastro bem sucetido"
        return "cadastro invalido"

conta_usuario1 = Cadastro( "Zima", 200, "em_chamas")
conta_usuario2 = Cadastro( "Rosa", 300, "sobre_amor")
conta_usuario3 = Cadastro( "Nina", 680, "noites_sem_som")
print(conta_usuario1.permissão(0.01))
print(conta_usuario2.permissão(0.01))
print(conta_usuario3.permissão(0.01))