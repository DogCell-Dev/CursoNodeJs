const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta (mkdir)
/*fs.mkdir(path.join(__dirname, "teste"), (error) => {
  if (error) {
    return console.log(`${error}`);
  }
  console.log(`Pasta criada com Sucesso!`);
});*/

// Criar um arquivo (writeFile)
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node! ",
  (error) => {
    if (error) {
      return console.log(error);
    }

    console.log("Arquivo Criado com sucesso!");

    // Adicionar á um arquivo (appendFile)
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "Adicionando mais frases.",
      (error) => {
        if (error) {
          return console.log(error);
        }
        console.log("Frase foi adicionada com exito.");

        // Ler arquivos
        fs.readFile(
          path.join(__dirname, "/teste", "teste.txt"),
          "utf8",
          (error, data) => {
            if (error) {
              return console.log(error);
            }
            console.log(data);
          },
        );
      },
    );
  },
);
