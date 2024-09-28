const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateResponse = async (prompt) => {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003", // Ou GPT-4, se disponível
      prompt,
      max_tokens: 150,
    });

    return completion.data.choices[0].text.trim();
  } catch (err) {
    console.error("Erro ao gerar resposta:", err);
    return "Não foi possível processar sua solicitação no momento.";
  }
};

module.exports = { generateResponse };
