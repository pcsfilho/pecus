const express = require("express");
const { generateResponse } = require("../services/openaiService");

const router = express.Router();

router.post("/perguntar", async (req, res) => {
  const { pergunta } = req.body;

  try {
    const resposta = await generateResponse(pergunta);
    res.json({ resposta });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
