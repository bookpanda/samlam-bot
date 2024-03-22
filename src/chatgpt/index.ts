import OpenAI from "openai";
import { config } from "../config/config";
import { characterPrompt } from "./prompts/character";
import { translatePrompt } from "./prompts/translate";

const { OPENAI_TOKEN } = config;

const openai = new OpenAI({ apiKey: OPENAI_TOKEN });

const generate = async (systemPrompt: string, userPrompt: string) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      { role: "user", content: userPrompt },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content ?? "";
};

export const askChatGPT = async (prompt: string) => {
  const answer = await generate(characterPrompt, prompt);

  const translatedAnswer = await generate(translatePrompt, answer);

  return translatedAnswer;
};
