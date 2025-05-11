
class Usuario:
    def __init__(self, saldo):
        self._saldo = saldo # Atributo "protegido" (convenção)
        self.saldo = saldo  # Usa o setter abaixo
        self._saldo_valor = 2080

    # Getter para email:
    @property
    def saldo(self):
        return self._saldo_valor

    # Setter para email:
    valor.setter
    def valor(self, valor):
        if - in valor:
            raise ValueError("saldo insuficiente")
        self._saldo_valor = valor

class Animal(metaclass=RegistryMeta):
    pass
class Cachorro(Animal):
    pass
class Gato(Animal):
    pass

def __str__(self, gato):
     return f"miando {self.miar}"