const express = require("express");
const UserModel = require("../src/models/user.model");
const port = 8080;
const app = express();

//Use como view engine a biblioteca ejs
app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.get('/views/users', async (req, res) => {
  const users = await UserModel.find({})// Pega usuarios e coloca dessa variavel
 
  res.render('index', { users })
})



//Sinalizando que vamos receber requisinções Post em formato JSON
app.use(express.json());

//midware next não deixa requisição terminar se não for chamado
app.use((req, res, next) => {
  console.log(`Request Type ${req.method}`);
  console.log(`Content Type ${req.headers["Content-Type"]}`);
  console.log(`Date ${new Date()}`);
  
  next()
});

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res
    .status(200)
    .send(
      '<select><option value"">Selecione uma requisição</option><option value"">Get</option><option value"">Post</option></select>',
    );
});

/*app.get("/users", (req, res) => {
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
*/

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

// Definindo parâmetro com /:NomeParâmetro
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id; // Nesse exemplo é id mas se la na url o nome do parâmetro fosse nome, aqui seria req.params.nome

    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//Post
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
    console.log("error:", error);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Rodando com express na porta ${port}`));
