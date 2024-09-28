const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
const consultasRouter = require("./routes/consultas");

dotenv.config();

// Conectar ao banco de dados
connectDB();

const app = express();
app.use(express.json());

// Rotas
app.use("/api", consultasRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
