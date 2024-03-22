import OpenAI from "openai";
import { config } from "../config/config";
import { infoPrompt } from "./prompts/info";
import { translatePrompt } from "./prompts/translate";

const { OPENAI_TOKEN } = config;

const openai = new OpenAI({ apiKey: OPENAI_TOKEN });

const generate = async (
  systemPrompt: string,
  userPrompt: string,
  model: string
) => {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      { role: "user", content: userPrompt },
    ],
    model: model,
  });

  return completion.choices[0].message.content ?? "";
};

export const askChatGPT3_5 = async (prompt: string) => {
  const answer = await generate(infoPrompt, prompt, "gpt-3.5-turbo");

  const translatedAnswer = await generate(
    translatePrompt,
    answer,
    "gpt-3.5-turbo	"
  );

  return translatedAnswer;
};

export const askChatGPT4 = async (prompt: string) => {
  const answer = await generate(infoPrompt, prompt, "gpt-4-turbo-preview");

  const translatedAnswer = await generate(
    translatePrompt,
    answer,
    "gpt-4-turbo-preview"
  );

  return translatedAnswer;
};
