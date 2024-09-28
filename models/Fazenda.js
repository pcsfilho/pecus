const mongoose = require("mongoose");

const FazendaSchema = new mongoose.Schema({
  nome: String,
  localizacao: String,
  tamanho: Number, // Em hectares
});

module.exports = mongoose.model("Fazenda", FazendaSchema);
