Office.onReady(function(info) {
    if (info.host === Office.HostType.Outlook) {
        // Office is ready
        getDataFromDocuSealAPI();
    }
});

function getDataFromDocuSealAPI() {
    var apiUrl = "https://api.docuseal.com/v1/documents";
    var params = {
        // Adicione os parâmetros conforme necessário
    };
    var headers = {
        "Authorization": "Bearer YOUR_ACCESS_TOKEN",
        "Content-Type": "application/json"
    };

    fetch(apiUrl, {
        method: "GET",
        headers: headers,
        // Se precisar adicionar parâmetros, use URLSearchParams
        // body: JSON.stringify(params)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Erro " + response.status + ": " + response.statusText);
        }
    })
    .then(data => {
        // Processar a resposta e exibir os dados
        document.getElementById("data").innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error("Erro ao consumir a API do DocuSeal:", error);
    });
}