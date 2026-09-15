const { Person } = require("./person"); // Importa a classe/módulo Person
const person = new Person("Piter"); // Criando Novo objeto usando o Módulo

// console.log(person.sayMyName());

require("./modules/path"); // Executa o módulo imediatamente
require("./modules/fs");

/* --------- Padão atual -----------
 O uso é apenas para projetos atuais 
--------------------------------------
import { Person } from "./person.js";
import "./modules/path.js"; 
------------------------------------- */
