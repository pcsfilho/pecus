const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  peso: Number,
  fazendaId: { type: mongoose.Schema.Types.ObjectId, ref: "Fazenda" },
  dataAbate: Date,
});

module.exports = mongoose.model("Animal", AnimalSchema);
