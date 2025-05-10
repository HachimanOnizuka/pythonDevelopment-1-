
class Biblioteca:
    def __init__(self, nome, empréstimo, livro):
        
        self.nome = nome
        self.empréstimo = empréstimo
        self.livro = livro
        
        self.nome = nome
        self.empréstimo = empréstimo
        self.livro = livro
        
        self.nome = nome
        self.empréstimo = empréstimo
        self.livro = livro
    

class Livro:
        def __init__(self, Livro):
         self.livro = Livro
         self.livro = Livro
         self.livro = Livro

class Usuario:
        def __init__(self, nome):
         self._nome = nome
         self._nome = nome
         self._nome = nome

class Cadastro(Biblioteca):
    def permissão(self, cadastrado):
        if valor > 0:
          valor = "empréstimo"
          self.empréstimo *= (valor - 200)
          return f"cadastro bem sucetido"
        return "cadastro invalido"

conta_usuario1 = Cadastro( "Zima", 200, "em_chamas")
conta_usuario2 = Cadastro( "Rosa", 300, "sobre_amor")
conta_usuario3 = Cadastro( "Nina", 680, "noites_sem_som")
print(conta_usuario1.permissão(0.01))
print(conta_usuario2.permissão(0.01))
print(conta_usuario3.permissão(0.01))