preço = 150
desconto = 20
print(preço, desconto)

a = preço
b = desconto
print("subtração:", a - b)



peso = 70
altura = 175
print(peso, altura)

c = peso
d = altura
print("divisão:", a / b)
print("multiplicação:", b * 2)



idade = 22
tem_experiencia = True
print(idade, tem_experiencia)

e = idade
f = tem_experiencia
elegivel = idade >= 18 and tem_experiencia
print("elegivel?", elegivel)



nivel_acesso = int(input("digite seu nivel de acesso:"))
if nivel_acesso == 1:
    print("acesso_restrito")
elif nivel_acesso == 2:
    print("acesso_parcial")
else:
    print("acesso_total")
