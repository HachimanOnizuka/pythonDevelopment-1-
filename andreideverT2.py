
import random
def jogo_da_forca():
    palavras = ["python", "programacao", "computador", "algoritmo", "desenvolvimento"]
    palavra_secreta = random.choice(palavras)
    letras_corretas = set()
    tentativas = 6
    
    while tentativas > 0:
        # Mostra a palavra com letras adivinhadas
        palavra_exibida = ""
        for letra in palavra_secreta:
            if letra in letras_corretas:
                palavra_exibida += letra
            else:
                palavra_exibida += "_"
        print(palavra_exibida)
        
        if palavra_exibida == palavra_secreta:
            print("Parabéns! Você venceu!")
            return
        
        # Pede uma letra
        letra = input("Digite uma letra: ").lower()
        
        if letra in letras_corretas:
            print("Você já tentou essa letra.")
        elif letra in palavra_secreta:
            letras_corretas.add(letra)
            print("Letra correta!")
        else:
            tentativas -= 1
            print(f"Letra incorreta! Tentativas restantes: {tentativas}")
    
    print(f"Game over! A palavra era: {palavra_secreta}")

jogo_da_forca()

import math

def calculadora():
    operacoes = {
        '+': lambda x, y: x + y,
        '-': lambda x, y: x - y,
        '*': lambda x, y: x * y,
        '/': lambda x, y: x / y,
        '^': lambda x, y: x ** y,
        '√': lambda x: math.sqrt(x),
        'sen': lambda x: math.sin(math.radians(x)),
        'cos': lambda x: math.cos(math.radians(x)),
        'tan': lambda x: math.tan(math.radians(x))
    }
    
    while True:
        print("\nOperações disponíveis:")
        print("+, -, *, /, ^ (potência), √ (raiz), sen, cos, tan")
        print("Digite 'sair' para encerrar")
        
        op = input("Operação: ")
        
        if op.lower() == 'sair':
            break
        
        if op in ['√', 'sen', 'cos', 'tan']:
            num = float(input("Número: "))
            try:
                resultado = operacoes[op](num)
                print(f"Resultado: {resultado:.4f}")
            except ValueError as e:
                print(f"Erro: {e}")
        elif op in operacoes:
            num1 = float(input("Primeiro número: "))
            num2 = float(input("Segundo número: "))
            try:
                resultado = operacoes[op](num1, num2)
                print(f"Resultado: {resultado:.4f}")
            except ZeroDivisionError:
                print("Erro: Divisão por zero!")
            except Exception as e:
                print(f"Erro: {e}")
        else:
            print("Operação inválida!")

calculadora()