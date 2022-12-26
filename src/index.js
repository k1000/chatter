const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Util exposes the following:\\n\\nutil.stripe() -> authenticates & returns the stripe module; usable as stripe.Charge.create etc\\n\"\"\"\\nimport util\\n\"\"\"\\nCreate a Stripe token using the users credit card: 5555-4444-3333-2222, expiration date 12 / 28, cvc 521.\n\nstripeToken = util.stripe().tokens.create(\n  card={\n    \"number\": \"5555-4444-3333-2222\",\n    \"exp_month\": 12,\n    \"exp_year\": 28,\n    \"cvc\": 521\n  },\n)",
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});