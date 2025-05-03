lista_teste = [10000, 20000, 30000, 40000]
print(lista_teste[1])  # Saída: 20000 (indexação começa em 0)
print(lista_teste[1:3])  # Saída: [20000, 30000] (fatiamento)
print(lista_teste[-1])  # Saída: 40000 (último elemento)
print(lista_teste[-2:])  # Saída: [30000, 40000] (últimos dois elementos)
print(lista_teste[:2])  # Saída: [10000, 20000] (primeiros dois elementos) 
print(lista_teste[::2])  # Saída: [10000, 30000] (elementos em posições pares)
print(lista_teste[::-1])  # Saída: [40000, 30000, 20000, 10000] (inversão da lista)   
print(lista_teste[1:4:2])  # Saída: [20000, 40000] (fatiamento com passo 2)
print(lista_teste[1:])  # Saída: [20000, 30000, 40000] (do índice 1 até o final) 
print(lista_teste[:3])  # Saída: [10000, 20000, 30000] (do início até o índice 2)
print(lista_teste[-3:-1])  # Saída: [20000, 30000] (do índice -3 até -2)        
print(len(lista_teste))  # Saída: 4 
print(lista_teste.count(20000))  # Saída: 1 (conta quantas vezes o valor 20000 aparece na lista)

dados = {"madeira": 10000, "manteiga": 20000, "frango": 30000, "costeleta": 40000}
print(dados.get("madeira", "manteiga"))

print(list(dados.values(10000, 20000, 30000, 40000)))

colaborador = {
  "madeira": 10000, 
  "manteiga": 20000, 
  "frango": 30000, 
  "costeleta": 40000
}

novo_colaborador = colaborador.copy()
print(novo_colaborador)

conjunto = {1, 2, 3, 4, 4}
print(conjunto)  

conjunto.discard(2)
print(conjunto)
