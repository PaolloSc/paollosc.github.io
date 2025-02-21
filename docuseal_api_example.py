import requests
import json

# Configurações da API
API_KEY = "TRC20_Address4rRXPGzkE"
API_URL = "https://api.docuseal.com/envios"

# Dados da solicitação
submission_data = {
    "template_id": 1000001,
    "send_email": True,
    "submitters": [
        {
            "role": "First Party",
            "email": "john.doe@example.com"
        }
    ]
}

# Cabeçalhos da solicitação
headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Fazendo a solicitação POST
response = requests.post(API_URL, headers=headers, data=json.dumps(submission_data))

# Verificando o status da resposta
if response.status_code == 201:
    # Sucesso - processar a resposta
    data = response.json()
    print("Submissão criada com sucesso:", json.dumps(data, indent=2))
else:
    # Falha - imprimir o status e a mensagem de erro
    print(f"Erro {response.status_code}: {response.text}")