const dotenv = require('dotenv')

dotenv.config() 

const connectToDatabase = require('./modules/connect.js')

connectToDatabase()



//const person = new Person("Piter"); // Criando Novo objeto usando o Módulo
//const { Person } = require("./person"); // Importa a classe/módulo Person
//require("./modules/express.js");
//require("./modules/http");
// console.log(person.sayMyName());
// require("./modules/path"); // Executa o módulo imediatamente
// require("./modules/fs");

/* --------- Padão atual -----------
 O uso é apenas para projetos atuais 
--------------------------------------
import { Person } from "./person.js";
import "./modules/path.js"; 
------------------------------------- */
