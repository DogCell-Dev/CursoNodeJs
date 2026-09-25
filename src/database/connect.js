const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    // Removemos a função (error) => {} de dentro do connect
    await mongoose.connect(
      `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@ac-ymve5u7-shard-00-00.5fgbgxr.mongodb.net:27017,ac-ymve5u7-shard-00-01.5fgbgxr.mongodb.net:27017,ac-ymve5u7-shard-00-02.5fgbgxr.mongodb.net:27017/?ssl=true&replicaSet=atlas-1usqit-shard-0&authSource=admin&appName=CursoNodeJs`
    );
    console.log("Conexão com o banco de dados foi um sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o banco de dados: ", error);
  }
};

module.exports = connectToDatabase;

