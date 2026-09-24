const express = require("express");
const port = 8080;

const app = express();
app.get("/home", (req, res) => {
  res.contentType("application/html");
  res
    .status(200)
    .send(
      '<select><option value"">Selecione uma requisição</option><option value"">Get</option><option value"">Post</option></select>',
    );
});

app.get("/users", (req, res) => {
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
  res.status(200).json(users);
});



app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
