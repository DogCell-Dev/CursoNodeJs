const http = require("http");
const port = 8080;
// Esse req é o objeto da requisição e o res é a resposta do servidor
const server = http.createServer((req, res) => { 
    // Tipo da requisição -> GET 
  if (req.url === "/home") {
    // Envia o status 200 (Sucesso) e avisa o navegador que o conteúdo enviado será uma página HTML
    res.writeHead(200, { "Content-type": "text/html" });
    // Envia o texto em formato de tag HTML e encerra a resposta do servidor para o navegador
    res.end("<h1>Pagina Home</h1>");
  }

  else if (req.url === "/users") {
    const users = [
      {
        name: "Piter Miranda",
        email: "pitermiranda@gmail.com",
      },
      {
        name: "Maria Eduarda",
        email: "mariaeduardacoimbra@gmail.com",
      },
      {
        name: "Lucelaine Macedo",
        email: "lumacedo@gmail.com",
      },
      {
        name: "Ladir de Macedo",
        email: "ladirmacedo@gmail.com",
      },
    ];

    // Envia o status 200 (Sucesso) e define o tipo de conteúdo que o cliente vai receber (identificado aqui como dados estruturados)
    res.writeHead(200, { "Content-Type": "application/jason" });
    // Converte a lista de usuários em texto estruturado (JSON string), envia esses dados e finaliza a resposta
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => console.log(`Rodando na porta ${port}!`));
