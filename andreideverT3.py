
lista = ["id1", "id2", "id3"]
tarefas = {
    1: {"titulo": "Estudar Python", "status": "pendente", "id1": "360"},
    2: {"titulo": "processo", "status": "em andamento", "id2": "530"}
    3: {"titulo": "Fazer relatório", "status": "concluído", "id3": "720"}
}

listar_tarefas()

adicionar_tarefa("id", "titulo", "status")

atualizar_status("id", "novo_status")

remover_tarefa("id")

print(lista[1])
